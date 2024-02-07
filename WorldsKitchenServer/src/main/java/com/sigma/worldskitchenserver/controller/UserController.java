package com.sigma.worldskitchenserver.controller;

import com.sigma.worldskitchenserver.dto.User.UserDto;
import com.sigma.worldskitchenserver.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/me")
    public ResponseEntity<UserDto> getPrincipleDetails() {
        UserDto currentUser = userService.getCurrentUserDto();

        return ResponseEntity.ok(currentUser);
    }
}
