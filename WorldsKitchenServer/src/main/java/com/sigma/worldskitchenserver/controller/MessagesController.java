package com.sigma.worldskitchenserver.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class MessagesController {

    @GetMapping("/messages")
    public ResponseEntity<List<String>> messages(HttpServletRequest request) {
        String clientIpAddress = request.getRemoteAddr();
//        System.out.println("Żądanie od adresu IP: " + clientIpAddress + " dla endpointu /messages");
        return ResponseEntity.ok(Arrays.asList("siema", "niema"));
    }
}
