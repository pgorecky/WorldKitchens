package com.sigma.worldskitchenserver.controller;

import com.sigma.worldskitchenserver.dto.Dish.DishAddRequest;
import com.sigma.worldskitchenserver.dto.Dish.DishDto;
import com.sigma.worldskitchenserver.enums.Region;
import com.sigma.worldskitchenserver.mapper.DishMapper;
import com.sigma.worldskitchenserver.model.Dish;
import com.sigma.worldskitchenserver.repository.DishRepository;
import com.sigma.worldskitchenserver.service.DishService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/dishes")
public class DishController {
    DishMapper dishMapper;
    DishService dishService;
    DishRepository dishRepository;


    public DishController(DishMapper dishMapper, DishService dishService, DishRepository dishRepository) {
        this.dishMapper = dishMapper;
        this.dishService = dishService;
        this.dishRepository = dishRepository;
    }

    @GetMapping("/my")
    public ResponseEntity<?> getMyDishes() {
        List<DishDto> dtoDishes = dishService.getCurrentUserDishes();

        return ResponseEntity.ok(dtoDishes);
    }

    @GetMapping("/likedDishes")
    public ResponseEntity<?> getLikedDishes() {
        List<DishDto> dtoDishes = dishService.getUserLikedDishes();

        return ResponseEntity.ok(dtoDishes);
    }

    @PostMapping("/{dishId}/like")
    public ResponseEntity<?> addToFavourite(@PathVariable Long dishId) {
        dishService.likeDishById(dishId);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/{dishId}/unlike")
    public ResponseEntity<?> deleteFromFavourite(@PathVariable Long dishId) {
        dishService.unlikeDishById(dishId);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/byRegion/{region}")
    public ResponseEntity<?> getDishesByRegion(@PathVariable Region region) {
        List<DishDto> dtoDishes = dishService.getDishesByRegion(region);

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
        DishDto newDish = dishService.createDish(dish);

        return ResponseEntity.ok(newDish);
    }

    @GetMapping("/{dishId}/isLiked")
    public ResponseEntity<?> isDishLikedByCurrentUser(@PathVariable Long dishId) {
        boolean isLiked = dishService.checkIsDishLiked(dishId);

        return ResponseEntity.ok(isLiked);
    }
}
