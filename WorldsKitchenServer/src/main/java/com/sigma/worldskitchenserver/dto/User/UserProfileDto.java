package com.sigma.worldskitchenserver.dto.User;

import com.sigma.worldskitchenserver.dto.Dish.DishDto;
import com.sigma.worldskitchenserver.enums.Region;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class UserProfileDto {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String login;
    private String imageUrl;
    private List<RecentActivityDto> activities;
    private List<DishDto> usersMeals;
    private List<DishDto> likedMeals;
    private Region favouriteCuisine;
    private int amountOfCreatedRecipes;
    private int amountOfCommentsAdded;
    private int amountOfLikedMeals;

}
