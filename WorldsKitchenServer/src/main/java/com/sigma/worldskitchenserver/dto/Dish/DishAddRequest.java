package com.sigma.worldskitchenserver.dto.Dish;

import com.sigma.worldskitchenserver.enums.Level;
import com.sigma.worldskitchenserver.enums.Region;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DishAddRequest {
    private String name;

    private String description;

    private String preparationTime;

    private List<IngredientDto> ingredients;

    private int calories;

    private int portionSize;

    private Region region;

    private Level level;

    private Long authorId;

    private List<String> preparationSteps;

}
