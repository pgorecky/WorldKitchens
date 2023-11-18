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
    @CollectionTable(
            name = "ingredients",
            joinColumns = @JoinColumn(name = "dish_id")
    )
    @Column(name = "ingredient", length = 255)
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
    @CollectionTable(
            name = "preparation_steps",
            joinColumns = @JoinColumn(name = "dish_id")
    )
    @Column(name = "step", length = 255)
    private List<String> preparationSteps;

}
