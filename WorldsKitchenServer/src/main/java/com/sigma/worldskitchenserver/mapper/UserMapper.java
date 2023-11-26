package com.sigma.worldskitchenserver.mapper;

import com.sigma.worldskitchenserver.dto.AuthorDto;
import com.sigma.worldskitchenserver.dto.SignUpDto;
import com.sigma.worldskitchenserver.dto.UserDto;
import com.sigma.worldskitchenserver.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

    AuthorDto toAuthorDto(User user);
}
