package com.sigma.worldskitchenserver.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sigma.worldskitchenserver.dto.Dish.DishAddRequest;
import com.sigma.worldskitchenserver.dto.Dish.DishDto;
import com.sigma.worldskitchenserver.dto.User.UserDto;
import com.sigma.worldskitchenserver.enums.Region;
import com.sigma.worldskitchenserver.mapper.DishMapper;
import com.sigma.worldskitchenserver.model.Dish;
import com.sigma.worldskitchenserver.model.Ingredient;
import com.sigma.worldskitchenserver.model.User;
import com.sigma.worldskitchenserver.repository.DishRepository;
import com.sigma.worldskitchenserver.repository.IngredientRepository;
import com.sigma.worldskitchenserver.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/dishes")
public class DishController {
    DishRepository dishRepository;
    UserRepository userRepository;
    IngredientRepository ingredientRepository;
    DishMapper dishMapper;
    ObjectMapper objectMapper;

    public DishController(DishRepository dishRepository, ObjectMapper objectMapper, DishMapper dishMapper, UserRepository userRepository, IngredientRepository ingredientRepository) {
        this.dishRepository = dishRepository;
        this.objectMapper = objectMapper;
        this.dishMapper = dishMapper;
        this.userRepository = userRepository;
        this.ingredientRepository = ingredientRepository;
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllDishes() {
        List<Dish> allDishes = dishRepository.findAll();
        List<DishDto> dtoDishes = new ArrayList<>();

        allDishes.forEach(dish -> {
            var dishDto = dishMapper.toDishDto(dish);
            dtoDishes.add(dishDto);
        });

        return ResponseEntity.ok(dtoDishes);
    }

    @GetMapping("/my")
    public ResponseEntity<?> getMyDishes() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDto user = (UserDto) authentication.getPrincipal();

        List<Dish> allDishes = dishRepository.findByAuthor_Id(user.getId());
        List<DishDto> dtoDishes = new ArrayList<>();

        allDishes.forEach(dish -> {
            var dishDto = dishMapper.toDishDto(dish);
            dtoDishes.add(dishDto);
        });

        return ResponseEntity.ok(dtoDishes);
    }

    @GetMapping("/likedDishes")
    public ResponseEntity<?> getLikedDishes() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDto userDto = (UserDto) authentication.getPrincipal();

        User user = userRepository.findById(userDto.getId()).get();

        List<Dish> likedDishes = dishRepository.findByLikedByUsersContaining(user);
        List<DishDto> dtoDishes = new ArrayList<>();

        likedDishes.forEach(dish -> {
            var dishDto = dishMapper.toDishDto(dish);
            dtoDishes.add(dishDto);
        });

        return ResponseEntity.ok(dtoDishes);
    }

    @PostMapping("/{mealId}/like")
    public ResponseEntity<?> addToFavourite(@PathVariable Long mealId){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDto userDto = (UserDto) authentication.getPrincipal();

        User user = userRepository.findById(userDto.getId()).get();

        Optional<Dish> dish = dishRepository.findById(mealId);

        dish.ifPresent(meal -> {
            user.getLikedDishes().add(meal);
            meal.getLikedByUsers().add(user);
            userRepository.save(user);
            dishRepository.save(meal);
        });

        return ResponseEntity.ok().build();
    }

    @PostMapping("/{mealId}/unlike")
    public ResponseEntity<?> deleteFromFavourite(@PathVariable Long mealId){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDto userDto = (UserDto) authentication.getPrincipal();

        User user = userRepository.findById(userDto.getId()).get();

        Optional<Dish> dish = dishRepository.findById(mealId);

        dish.ifPresent(meal -> {
            user.getLikedDishes().remove(meal);
            meal.getLikedByUsers().remove(user);
            userRepository.save(user);
            dishRepository.save(meal);
        });

        return ResponseEntity.ok().build();
    }
    @GetMapping("/byRegion/{region}")
    public ResponseEntity<?> getDishesByRegion(@PathVariable Region region) {
        List<Dish> dishesByRegion = dishRepository.findByRegion(region);
        List<DishDto> dtoDishes = new ArrayList<>();

        dishesByRegion.forEach(dish -> {
            var dishDto = dishMapper.toDishDto(dish);
            dtoDishes.add(dishDto);
        });

        return ResponseEntity.ok(dtoDishes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getDishDetails(@PathVariable Long id) {
        Optional<Dish> dish = dishRepository.findById(id);

        if (dish.isPresent()) {
            DishDto dishDto = dishMapper.toDishDto(dish.get());
            return ResponseEntity.ok(dishDto);
        }

         return ResponseEntity.notFound().build();
    }

    @PostMapping("/add")
    public ResponseEntity<?> createNewMeal(@RequestBody DishAddRequest dish) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDto userDto = (UserDto) authentication.getPrincipal();

        Optional<User> user = userRepository.findById(userDto.getId());

        Dish newDish = dishMapper.toDish(dish);
        user.ifPresent(newDish::setAuthor);

        dishRepository.save(newDish);

        List<Ingredient> ingredients = dish.getIngredients().stream()
                .map(ingredient -> {
                    Ingredient newIngredient = new Ingredient();
                    newIngredient.setDish(newDish);
                    newIngredient.setIngredientName(ingredient.getIngredientName());
                    newIngredient.setPortion(ingredient.getPortion());
                    return newIngredient;
                })
                .collect(Collectors.toList());

        ingredientRepository.saveAll(ingredients);

        return ResponseEntity.ok(dishMapper.toDishDto(newDish));
    }

    @GetMapping("/{dishId}/isLiked")
    public ResponseEntity<?> isDishLikedByCurrentUser(@PathVariable Long dishId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDto userDto = (UserDto) authentication.getPrincipal();

        Optional<User> user = userRepository.findById(userDto.getId());
        Optional<Dish> dish = dishRepository.findById(dishId);

        if (user.isPresent() && dish.isPresent()) {
            boolean isLiked = dish.get().getLikedByUsers().contains(user.get());
            return ResponseEntity.ok(isLiked);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
