package com.sigma.worldskitchenserver.service;

import com.sigma.worldskitchenserver.dto.User.CredentialsDto;
import com.sigma.worldskitchenserver.dto.User.SignUpDto;
import com.sigma.worldskitchenserver.dto.User.UserDto;
import com.sigma.worldskitchenserver.enums.AuthProvider;
import com.sigma.worldskitchenserver.exception.AppException;
import com.sigma.worldskitchenserver.exception.ResourceNotFoundException;
import com.sigma.worldskitchenserver.mapper.UserMapper;
import com.sigma.worldskitchenserver.model.User;
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
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

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
}
