package com.sigma.worldskitchenserver.repository;

import com.sigma.worldskitchenserver.model.RecentActivity;
import com.sigma.worldskitchenserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecentActivityRepository extends JpaRepository<RecentActivity, Long> {

    List<RecentActivity> findByUser(User user);
}
