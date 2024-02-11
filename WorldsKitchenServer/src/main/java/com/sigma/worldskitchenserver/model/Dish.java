package com.sigma.worldskitchenserver.model;

import com.sigma.worldskitchenserver.enums.Level;
import com.sigma.worldskitchenserver.enums.Region;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "dishes")
public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "preparation_time")
    private String preparationTime;

    @OneToMany(mappedBy = "dish", cascade = CascadeType.ALL)
    private List<Ingredient> ingredients;

    private int calories;

    private int portionSize;

    @Enumerated(EnumType.STRING)
    private Region region;

    @Enumerated(EnumType.STRING)
    private Level level;

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
    @Column(name = "step")
    private List<String> preparationSteps;

    @Column(name = "image_url")
    private String imageUrl;
}
