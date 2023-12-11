package com.sigma.worldskitchenserver.dto.Dish;

import com.sigma.worldskitchenserver.dto.User.AuthorDto;
import com.sigma.worldskitchenserver.enums.Level;
import com.sigma.worldskitchenserver.enums.Region;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class DishDto {

    private Long id;

    private String name;

    private String description;

    private String preparationTime;

    private List<IngredientDto> ingredients;

    private int calories;

    private int portionSize;

    private Region region;

    private Level level;

    private AuthorDto author;

    private List<String> preparationSteps;

    private List<CommentDto> comments;

    private String imageUrl;
}
