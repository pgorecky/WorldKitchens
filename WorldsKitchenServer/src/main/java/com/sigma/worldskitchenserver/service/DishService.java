package com.sigma.worldskitchenserver.service;

import com.sigma.worldskitchenserver.dto.Dish.DishAddRequest;
import com.sigma.worldskitchenserver.dto.Dish.DishDto;
import com.sigma.worldskitchenserver.dto.User.UserDto;
import com.sigma.worldskitchenserver.enums.ActivityType;
import com.sigma.worldskitchenserver.enums.Region;
import com.sigma.worldskitchenserver.mapper.DishMapper;
import com.sigma.worldskitchenserver.model.Dish;
import com.sigma.worldskitchenserver.model.Ingredient;
import com.sigma.worldskitchenserver.model.User;
import com.sigma.worldskitchenserver.repository.DishRepository;
import com.sigma.worldskitchenserver.repository.IngredientRepository;
import com.sigma.worldskitchenserver.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class DishService {

    private final UserService userService;
    private final DishRepository dishRepository;
    private final DishMapper dishMapper;
    private final UserRepository userRepository;
    private final RecentActivityService recentActivityService;
    private final IngredientRepository ingredientRepository;

    public List<DishDto> mapDishesToDishesDto(List<Dish> dishes) {
        List<DishDto> dtoDishes = new ArrayList<>();

        dishes.forEach(dish -> {
            DishDto dishDto = dishMapper.toDishDto(dish);
            dtoDishes.add(dishDto);
        });

        return dtoDishes;
    }

    public List<DishDto> getCurrentUserDishes() {
        UserDto user = userService.getCurrentUserDto();

        List<Dish> allDishes = dishRepository.findByAuthor_Id(user.getId());

        return mapDishesToDishesDto(allDishes);

    }

    public List<DishDto> getUserLikedDishes() {
        Optional<User> user = userService.getCurrentUser();
        List<Dish> likedDishes = new ArrayList<>();

        if (user.isPresent()) {
            likedDishes = dishRepository.findByLikedByUsersContaining(user.get());
        }

        return mapDishesToDishesDto(likedDishes);
    }

    public void likeDishById(Long dishId) {
        userService.getCurrentUser().ifPresent(user -> {
            Optional<Dish> dish = dishRepository.findById(dishId);
            dish.ifPresent(meal -> {
                user.getLikedDishes().add(meal);
                meal.getLikedByUsers().add(user);
                userRepository.save(user);
                dishRepository.save(meal);
                recentActivityService.addActivity(user, meal, ActivityType.LIKE_MEAL);
            });
        });
    }

    public void unlikeDishById(Long dishId) {
        userService.getCurrentUser().ifPresent(user -> {
            Optional<Dish> dish = dishRepository.findById(dishId);
            dish.ifPresent(meal -> {
                user.getLikedDishes().remove(meal);
                meal.getLikedByUsers().remove(user);
                userRepository.save(user);
                dishRepository.save(meal);
                recentActivityService.addActivity(user, meal, ActivityType.UNLIKE_MEAL);
            });
        });
    }

    public List<DishDto> getDishesByRegion(Region region) {
        List<Dish> dishesByRegion = dishRepository.findByRegion(region);

        return mapDishesToDishesDto(dishesByRegion);
    }

    public Boolean checkIsDishLiked(Long dishId) {
        Optional<User> user = userService.getCurrentUser();
        Optional<Dish> dish = dishRepository.findById(dishId);
        if (user.isPresent() && dish.isPresent()) {
            return dish.get().getLikedByUsers().contains(user.get());
        }
        return false;
    }

    public DishDto createDish(DishAddRequest dish) {
        Dish newDish = dishMapper.toDish(dish);
        userService.getCurrentUser().ifPresent(user -> {
            newDish.setAuthor(user);
            recentActivityService.addActivity(user, newDish, ActivityType.ADD_MEAL);
        });

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

        return dishMapper.toDishDto(newDish);
    }
}
