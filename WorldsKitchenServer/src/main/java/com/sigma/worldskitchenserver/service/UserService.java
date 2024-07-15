package com.sigma.worldskitchenserver.service;

import com.sigma.worldskitchenserver.dto.Dish.DishDto;
import com.sigma.worldskitchenserver.dto.User.*;
import com.sigma.worldskitchenserver.enums.AuthProvider;
import com.sigma.worldskitchenserver.enums.Region;
import com.sigma.worldskitchenserver.exception.AppException;
import com.sigma.worldskitchenserver.exception.ResourceNotFoundException;
import com.sigma.worldskitchenserver.mapper.DishMapper;
import com.sigma.worldskitchenserver.mapper.RecentActivityMapper;
import com.sigma.worldskitchenserver.mapper.UserMapper;
import com.sigma.worldskitchenserver.model.Dish;
import com.sigma.worldskitchenserver.model.RecentActivity;
import com.sigma.worldskitchenserver.model.User;
import com.sigma.worldskitchenserver.repository.CommentRepository;
import com.sigma.worldskitchenserver.repository.RecentActivityRepository;
import com.sigma.worldskitchenserver.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final RecentActivityRepository recentActivityRepository;
    private final DishMapper dishMapper;
    private final CommentRepository commentRepository;
    private final RecentActivityMapper recentActivityMapper;


    public UserDto login(CredentialsDto credentialsDto) {
        User user = userRepository.findByLoginOrEmail(credentialsDto.getLogin())
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(CharBuffer.wrap(credentialsDto.getPassword()), user.getPassword())) {
            logger.info("User with id: {} logged in successfully!", user.getId());
            return userMapper.toUserDto(user);
        }

        throw new AppException("Invalid password", HttpStatus.UNAUTHORIZED);
    }

    public UserDto register(SignUpDto userDto) {
        if (userRepository.existsByEmail(userDto.getLogin()) || userRepository.existsByLogin(userDto.getLogin())) {
            logger.warn("Registration Failed. The user with the given login or email: {} already exists!", userDto.getLogin());
            throw new AppException("User already exists", HttpStatus.CONFLICT);
        }

        User user = userMapper.signUpToUser(userDto);
        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(userDto.getPassword())));
        user.setAuthProvider(AuthProvider.local);

        User savedUser = userRepository.save(user);

        logger.info("Registration successfully completed. New User ID: {}", savedUser.getId());
        return userMapper.toUserDto(savedUser);
    }

    public UserDto findByLogin(String login) {
        User user = userRepository.findByLogin(login)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        return userMapper.toUserDto(user);
    }

    public User getCurrentUser() {
        UserDto userDto = getCurrentUserDto();
        Optional<User> user = userRepository.findById(userDto.getId());
        return user.orElseThrow(() -> new ResourceNotFoundException("User", "id", userDto.getId()));
    }

    public UserDto getCurrentUserDto() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return (UserDto) authentication.getPrincipal();
    }

    public void updateUserPhoto(String photoURI) {
        User user = getCurrentUser();

        user.setImageUrl(photoURI);
        userRepository.save(user);

        logger.info("User {} successfully updated picture", user.getId());
    }

    public UserProfileDto mapUserToUserProfileDto (User user) {
        UserProfileDto userProfileDto = new UserProfileDto();

        List<Dish> likedMeals = user.getLikedDishes();
        List<Dish> createdDishes = user.getCreatedDishes();

        List<DishDto> likedMealsDto = new ArrayList<>();
        List<DishDto> createdRecipes = new ArrayList<>();

        likedMeals.forEach(meal ->
                likedMealsDto.add(dishMapper.toDishDto(meal)));

        createdDishes.forEach(meal ->
                createdRecipes.add(dishMapper.toDishDto(meal)));

        Map<Region, Long> regionCounts = likedMeals.stream()
                .collect(Collectors.groupingBy(Dish::getRegion, Collectors.counting()));

        Optional<Map.Entry<Region, Long>> mostCommonRegion = regionCounts.entrySet().stream()
                .max(Map.Entry.comparingByValue());

        List<RecentActivity> activities =  recentActivityRepository.findByUser(user);
        List<RecentActivityDto> activitiesDto =  new ArrayList<>();

        activities.forEach(recentActivity ->
                activitiesDto.add(recentActivityMapper.toRecentActivityDto(recentActivity)));


        userProfileDto.setId(user.getId());
        userProfileDto.setFirstName(user.getFirstName());
        userProfileDto.setLastName(user.getLastName());
        userProfileDto.setEmail(user.getEmail());
        userProfileDto.setLogin(user.getLogin());
        userProfileDto.setImageUrl(user.getImageUrl());
        userProfileDto.setActivities(activitiesDto);
        userProfileDto.setUsersMeals(createdRecipes);
        userProfileDto.setLikedMeals(likedMealsDto);
        mostCommonRegion.ifPresent(region -> userProfileDto.setFavouriteCuisine(region.getKey()));
        userProfileDto.setAmountOfCreatedRecipes(createdDishes.size());
        userProfileDto.setAmountOfLikedMeals(likedMeals.size());
        userProfileDto.setAmountOfCommentsAdded(commentRepository.countCommentByAuthor(user));

        return userProfileDto;
    }

    public UserProfileDto getUserById(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));;

        return mapUserToUserProfileDto(user);
    }
}
