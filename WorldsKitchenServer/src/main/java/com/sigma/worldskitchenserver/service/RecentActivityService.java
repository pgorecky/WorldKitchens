package com.sigma.worldskitchenserver.service;

import com.sigma.worldskitchenserver.dto.User.RecentActivityDto;
import com.sigma.worldskitchenserver.enums.ActivityType;
import com.sigma.worldskitchenserver.mapper.RecentActivityMapper;
import com.sigma.worldskitchenserver.model.Dish;
import com.sigma.worldskitchenserver.model.RecentActivity;
import com.sigma.worldskitchenserver.model.User;
import com.sigma.worldskitchenserver.repository.RecentActivityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class RecentActivityService {

    private final RecentActivityRepository recentActivityRepository;
    private final UserService userService;
    private final RecentActivityMapper recentActivityMapper;

    public void addActivity(User user, Dish dish, ActivityType activityType) {
        RecentActivity activity = new RecentActivity();

        activity.setUser(user);
        activity.setDish(dish);
        activity.setActivityType(activityType);
        activity.setDate(LocalDateTime.now());

        recentActivityRepository.save(activity);
    }

    public List<RecentActivityDto> getCurrentUserRecentActivitiesList() {
        Optional<User> user = userService.getCurrentUser();

        List<RecentActivity> activities = recentActivityRepository.findByUser(user.get());
        List<RecentActivityDto> activitiesDto = new ArrayList<>();

        activities.forEach(activity -> activitiesDto.add(recentActivityMapper.toRecentActivityDto(activity)));

        return activitiesDto;
    }
}
