package com.sigma.worldskitchenserver.repository;

import com.sigma.worldskitchenserver.model.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
}