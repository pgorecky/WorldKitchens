package com.sigma.worldskitchenserver.repository;

import com.sigma.worldskitchenserver.entity.Dish;
import com.sigma.worldskitchenserver.enums.Region;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DishRepository extends JpaRepository<Dish, Long> {

    List<Dish> findByRegion(Region region);
    List<Dish> findByAuthor_Id(Long id);
}
