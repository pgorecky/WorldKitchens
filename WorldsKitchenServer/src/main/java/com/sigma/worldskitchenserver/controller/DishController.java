package com.sigma.worldskitchenserver.controller;

import com.sigma.worldskitchenserver.dto.Dish.DishAddRequest;
import com.sigma.worldskitchenserver.dto.Dish.DishDto;
import com.sigma.worldskitchenserver.enums.Level;
import com.sigma.worldskitchenserver.enums.Region;
import com.sigma.worldskitchenserver.mapper.DishMapper;
import com.sigma.worldskitchenserver.repository.DishRepository;
import com.sigma.worldskitchenserver.service.DishService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/dishes")
public class DishController {

    private final DishMapper dishMapper;
    private final DishService dishService;
    private final DishRepository dishRepository;

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

    @GetMapping("/all")
    public ResponseEntity<List<DishDto>> getAllDishes(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Integer caloriesDown,
            @RequestParam(required = false) Integer caloriesUp,
            @RequestParam(required = false) Region region,
            @RequestParam(required = false) Level level) {

        List<DishDto> dtoDishes;

        if (caloriesDown == null) caloriesDown = 0;
        if (caloriesUp == null) caloriesUp = 10000;

        if ((name != null) || (region != null) || (level != null)) {
            dtoDishes = dishService.getDishesByCriteria(name, region, level, caloriesDown, caloriesUp);
        } else {
            dtoDishes = dishService.getAllDishes();
        }

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
