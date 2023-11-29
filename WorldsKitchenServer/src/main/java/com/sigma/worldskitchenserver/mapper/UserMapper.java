package com.sigma.worldskitchenserver.mapper;

import com.sigma.worldskitchenserver.dto.User.AuthorDto;
import com.sigma.worldskitchenserver.dto.User.SignUpDto;
import com.sigma.worldskitchenserver.dto.User.UserDto;
import com.sigma.worldskitchenserver.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

    AuthorDto toAuthorDto(User user);
}
