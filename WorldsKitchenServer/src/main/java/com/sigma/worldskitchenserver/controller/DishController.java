package com.sigma.worldskitchenserver.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sigma.worldskitchenserver.dto.DishDto;
import com.sigma.worldskitchenserver.dto.UserDto;
import com.sigma.worldskitchenserver.entity.Dish;
import com.sigma.worldskitchenserver.enums.Region;
import com.sigma.worldskitchenserver.mapper.DishMapper;
import com.sigma.worldskitchenserver.repository.DishRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/dishes")
public class DishController {
    DishRepository dishRepository;
    DishMapper dishMapper;
    ObjectMapper objectMapper;

    public DishController(DishRepository dishRepository, ObjectMapper objectMapper, DishMapper dishMapper) {
        this.dishRepository = dishRepository;
        this.objectMapper = objectMapper;
        this.dishMapper = dishMapper;
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
}
