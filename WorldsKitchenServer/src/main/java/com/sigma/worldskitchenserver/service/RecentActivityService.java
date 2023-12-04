package com.sigma.worldskitchenserver.service;

import com.sigma.worldskitchenserver.enums.ActivityType;
import com.sigma.worldskitchenserver.model.Dish;
import com.sigma.worldskitchenserver.model.RecentActivity;
import com.sigma.worldskitchenserver.model.User;
import com.sigma.worldskitchenserver.repository.RecentActivityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@RequiredArgsConstructor
@Service
public class RecentActivityService {

    RecentActivityRepository recentActivityRepository;

    @Autowired
    public RecentActivityService(RecentActivityRepository recentActivityRepository) {
        this.recentActivityRepository = recentActivityRepository;
    }

    public void addActivity(User user, Dish dish, ActivityType activityType) {
        RecentActivity activity = new RecentActivity();

        activity.setUser(user);
        activity.setDish(dish);
        activity.setActivityType(activityType);
        activity.setDate(LocalDateTime.now());

        recentActivityRepository.save(activity);
    }
}
