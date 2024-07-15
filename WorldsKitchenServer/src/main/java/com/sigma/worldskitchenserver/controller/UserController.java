package com.sigma.worldskitchenserver.controller;

import com.sigma.worldskitchenserver.dto.User.UserProfileDto;
import com.sigma.worldskitchenserver.model.User;
import com.sigma.worldskitchenserver.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @GetMapping("/me")
    public ResponseEntity<UserProfileDto> getPrincipleDetails() {
        User user = userService.getCurrentUser();

        return ResponseEntity.ok(userService.mapUserToUserProfileDto(user));
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserProfileDto> getUserInfo(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @PatchMapping("/me/updatePhoto")
    public ResponseEntity<?> updateProfilePicture(@RequestBody Map<String, String> requestBody) {
        String imageURI = requestBody.get("imageURI");

        if (imageURI != null) {
            userService.updateUserPhoto(imageURI);
        }

        return ResponseEntity.ok().build();
    }
}
