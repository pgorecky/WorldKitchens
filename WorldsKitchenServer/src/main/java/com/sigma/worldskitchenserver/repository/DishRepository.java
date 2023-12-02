package com.sigma.worldskitchenserver.repository;

import com.sigma.worldskitchenserver.enums.Region;
import com.sigma.worldskitchenserver.model.Dish;
import com.sigma.worldskitchenserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DishRepository extends JpaRepository<Dish, Long> {

    List<Dish> findByRegion(Region region);
    List<Dish> findByAuthor_Id(Long id);

    List<Dish> findByLikedByUsersContaining(User user);
}
