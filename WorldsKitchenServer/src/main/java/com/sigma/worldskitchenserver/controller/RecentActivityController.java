package com.sigma.worldskitchenserver.controller;

import com.sigma.worldskitchenserver.dto.User.RecentActivityDto;
import com.sigma.worldskitchenserver.service.RecentActivityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/activity")
public class RecentActivityController {

    private final RecentActivityService recentActivityService;

    @GetMapping("/my")
    public ResponseEntity<List<RecentActivityDto>> getUsersRecentActivity() {
        List<RecentActivityDto> activities = recentActivityService.getCurrentUserRecentActivitiesList();

        return ResponseEntity.ok(activities);
    }
}
