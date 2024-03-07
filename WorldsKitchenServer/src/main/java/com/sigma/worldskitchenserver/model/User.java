package com.sigma.worldskitchenserver.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
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
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String login;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    @Size(max = 100)
    private String password;

    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
    private List<Dish> createdDishes;

    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
    private List<Comment> comments;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "liked_dishes",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "dish_id")
    )
    private List<Dish> likedDishes;

    @Column(name = "image_url")
    private String imageUrl;
}
