package com.sigma.worldskitchenserver.service;

import com.sigma.worldskitchenserver.dto.Dish.CommentRequestDto;
import com.sigma.worldskitchenserver.model.Comment;
import com.sigma.worldskitchenserver.model.Dish;
import com.sigma.worldskitchenserver.model.User;
import com.sigma.worldskitchenserver.repository.CommentRepository;
import com.sigma.worldskitchenserver.repository.DishRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class CommentService {

    private final UserService userService;
    private final DishRepository dishRepository;
    private final CommentRepository commentRepository;

    public Comment addNewComment(CommentRequestDto comment) {
        Optional<User> user = userService.getCurrentUser();
        Optional<Dish> dish = dishRepository.findById(comment.getDishId());

        Comment newComment = new Comment();

        user.ifPresent(newComment::setAuthor);
        dish.ifPresent(newComment::setDish);
        newComment.setContent(comment.getContent());

        commentRepository.save(newComment);
        return newComment;
    }
}
