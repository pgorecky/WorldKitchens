package com.sigma.worldskitchenserver.controller;

import com.sigma.worldskitchenserver.dto.Dish.DishAddRequest;
import com.sigma.worldskitchenserver.dto.Dish.DishDto;
import com.sigma.worldskitchenserver.enums.Region;
import com.sigma.worldskitchenserver.mapper.DishMapper;
import com.sigma.worldskitchenserver.repository.DishRepository;
import com.sigma.worldskitchenserver.service.DishService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public ResponseEntity<List<DishDto>> getMyDishes() {
        List<DishDto> dtoDishes = dishService.getCurrentUserDishes();

        return ResponseEntity.ok(dtoDishes);
    }

    @GetMapping("/likedDishes")
    public ResponseEntity<List<DishDto>> getLikedDishes() {
        List<DishDto> dtoDishes = dishService.getUserLikedDishes();

        return ResponseEntity.ok(dtoDishes);
    }

    @PostMapping("/{dishId}/like")
    public ResponseEntity<Void> addToFavourite(@PathVariable Long dishId) {
        dishService.likeDishById(dishId);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/{dishId}/unlike")
    public ResponseEntity<Void> deleteFromFavourite(@PathVariable Long dishId) {
        dishService.unlikeDishById(dishId);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/byRegion/{region}")
    public ResponseEntity<List<DishDto>> getDishesByRegion(@PathVariable Region region) {
        List<DishDto> dtoDishes = dishService.getDishesByRegion(region);

        return ResponseEntity.ok(dtoDishes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getDishDetails(@PathVariable Long id) {
        return dishRepository.findById(id)
                .map(dishMapper::toDishDto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<DishDto> createNewMeal(@RequestBody DishAddRequest dish) {
        DishDto newDish = dishService.createDish(dish);

        return ResponseEntity.ok(newDish);
    }

    @GetMapping("/{dishId}/isLiked")
    public ResponseEntity<Boolean> isDishLikedByCurrentUser(@PathVariable Long dishId) {
        boolean isLiked = dishService.checkIsDishLiked(dishId);

        return ResponseEntity.ok(isLiked);
    }
}
