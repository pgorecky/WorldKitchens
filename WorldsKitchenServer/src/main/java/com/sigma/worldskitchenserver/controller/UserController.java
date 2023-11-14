package com.sigma.worldskitchenserver.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/me")
    public ResponseEntity getPrincipleDetails() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            return ResponseEntity.ok(authentication.getPrincipal());
        }

        return ResponseEntity.notFound().build();
    }
}
