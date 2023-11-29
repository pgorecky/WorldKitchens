package com.sigma.worldskitchenserver.mapper;

import com.sigma.worldskitchenserver.dto.Dish.DishDto;
import com.sigma.worldskitchenserver.model.Dish;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DishMapper {

    DishDto toDishDto(Dish dish);
}
