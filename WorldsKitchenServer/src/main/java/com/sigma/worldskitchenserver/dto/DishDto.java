package com.sigma.worldskitchenserver.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sigma.worldskitchenserver.entity.Comment;
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

    private int calories;

    private Region region;

    @JsonIgnore
    private UserDto author;

    private List<String> ingredients;

    private List<String> preparationSteps;

    @JsonIgnore
    private List<Comment> comments;
}
