package com.sigma.worldskitchenserver.service;

import com.sigma.worldskitchenserver.dto.Dish.CommentRequestDto;
import com.sigma.worldskitchenserver.model.Comment;
import com.sigma.worldskitchenserver.model.Dish;
import com.sigma.worldskitchenserver.model.User;
import com.sigma.worldskitchenserver.repository.CommentRepository;
import com.sigma.worldskitchenserver.repository.DishRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CommentService {
    private static final Logger logger = LoggerFactory.getLogger(CommentService.class);

    private final UserService userService;
    private final DishRepository dishRepository;
    private final CommentRepository commentRepository;

    public Comment addNewComment(CommentRequestDto comment) {
        User currentUser = userService.getCurrentUser()
                .orElseThrow(() -> new IllegalStateException("User not found"));
        Dish dish = dishRepository.findById(comment.getDishId())
                .orElseThrow(() -> new IllegalArgumentException("Dish not found"));

        logger.info("Adding new comment by user with id: {} for dish: {}", currentUser.getId(), dish.getName());

        Comment newComment = new Comment();
        newComment.setAuthor(currentUser);
        newComment.setDish(dish);
        newComment.setContent(comment.getContent());

        return commentRepository.save(newComment);
    }
}
