package com.sigma.worldskitchenserver.dto.Dish;

import com.sigma.worldskitchenserver.entity.Dish;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class IngredientDto {

    private Long id;

    private String ingredientName;

    private String portion;
}
