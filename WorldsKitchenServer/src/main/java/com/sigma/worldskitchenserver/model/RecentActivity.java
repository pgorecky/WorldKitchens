package com.sigma.worldskitchenserver.model;

import com.sigma.worldskitchenserver.enums.ActivityType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "recent_activities")
public class RecentActivity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "dish_id")
    private Dish dish;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    private ActivityType activityType;

    @Column(name = "date")
    private LocalDateTime date;

    public RecentActivity(User user, Dish dish, ActivityType activityType, LocalDateTime date) {
        this.user = user;
        this.dish = dish;
        this.activityType = activityType;
        this.date = date;
    }
}
