package com.sigma.worldskitchenserver.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    @Column(name = "description", length = 255)
    private String description;

    @Column(name = "preparation_time", length = 255)
    private String preparationTime;

    @OneToMany(mappedBy = "dish", cascade = CascadeType.ALL)
    @JsonManagedReference
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
    @JsonManagedReference
    private List<Comment> comments;

    @ElementCollection
    @CollectionTable(
            name = "preparation_steps",
            joinColumns = @JoinColumn(name = "dish_id")
    )
    @Column(name = "step", length = 255)
    private List<String> preparationSteps;

}
