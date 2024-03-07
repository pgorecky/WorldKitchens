package com.sigma.worldskitchenserver.dto.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class UserDto {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String login;
    private String token;
    private String imageUrl;
}
