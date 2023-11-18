package com.sigma.worldskitchenserver.entity;

import com.sigma.worldskitchenserver.enums.Region;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "dishes")
public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ElementCollection
    private List<String> ingredients;

    private int calories;

    @Enumerated(EnumType.STRING)
    private Region region;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User author;

    @OneToMany(mappedBy = "dish", cascade = CascadeType.ALL)
    private List<Comment> comments;

    @ElementCollection
    private List<String> preparationSteps;
}
