package com.sigma.worldskitchenserver.controller;

import com.sigma.worldskitchenserver.dto.User.UserDto;
import com.sigma.worldskitchenserver.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserController {

    private final UserService userService;

    @GetMapping("/me")
    public ResponseEntity<UserDto> getPrincipleDetails() {
        return ResponseEntity.ok(userService.getCurrentUserDto());
    }

    @PatchMapping("/me/updatePhoto")
    public ResponseEntity<?> updateProfilePicture(@RequestBody Map<String, String> requestBody) {
        String imageURI = requestBody.get("imageURI");
        userService.updateUserPhoto(imageURI);
        return ResponseEntity.ok().build();
    }
}
