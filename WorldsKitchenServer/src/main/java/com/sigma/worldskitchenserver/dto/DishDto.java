package com.sigma.worldskitchenserver.dto;

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

    private int calories;

    private Region region;

    private AuthorDto author;

    private List<String> ingredients;

    private List<String> preparationSteps;

    private List<CommentDto> comments;
}
