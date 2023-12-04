package com.sigma.worldskitchenserver.controller;

import com.sigma.worldskitchenserver.dto.User.RecentActivityDto;
import com.sigma.worldskitchenserver.dto.User.UserDto;
import com.sigma.worldskitchenserver.mapper.RecentActivityMapper;
import com.sigma.worldskitchenserver.model.RecentActivity;
import com.sigma.worldskitchenserver.model.User;
import com.sigma.worldskitchenserver.repository.RecentActivityRepository;
import com.sigma.worldskitchenserver.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/activity")
public class RecentActivityController {

    RecentActivityRepository recentActivityRepository;
    UserRepository userRepository;

    RecentActivityMapper recentActivityMapper;

    public RecentActivityController(RecentActivityRepository recentActivityRepository, UserRepository userRepository, RecentActivityMapper recentActivityMapper) {
        this.recentActivityRepository = recentActivityRepository;
        this.userRepository = userRepository;
        this.recentActivityMapper = recentActivityMapper;
    }

    @GetMapping("/my")
    public ResponseEntity<?> getUsersRecentActivity() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDto userDto = (UserDto) authentication.getPrincipal();

        Optional<User> user = userRepository.findById(userDto.getId());

        List<RecentActivity> activities = recentActivityRepository.findByUser(user.get());
        List<RecentActivityDto> activityDtos = new ArrayList<>();

        activities.forEach(activity ->{
            activityDtos.add(recentActivityMapper.toRecentActivityDto(activity));
        });

        return ResponseEntity.ok(activityDtos);
    }
}
