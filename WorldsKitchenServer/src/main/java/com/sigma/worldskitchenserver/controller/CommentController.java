package com.sigma.worldskitchenserver.controller;

import com.sigma.worldskitchenserver.dto.Dish.CommentRequestDto;
import com.sigma.worldskitchenserver.dto.User.UserDto;
import com.sigma.worldskitchenserver.model.Comment;
import com.sigma.worldskitchenserver.model.Dish;
import com.sigma.worldskitchenserver.model.User;
import com.sigma.worldskitchenserver.mapper.CommentMapper;
import com.sigma.worldskitchenserver.repository.CommentRepository;
import com.sigma.worldskitchenserver.repository.DishRepository;
import com.sigma.worldskitchenserver.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/comment")
public class CommentController {
    CommentRepository commentRepository;
    DishRepository dishRepository;
    CommentMapper commentMapper;
    UserRepository userRepository;

    public CommentController(CommentRepository commentRepository, DishRepository dishRepository, CommentMapper commentMapper, UserRepository userRepository) {
        this.commentRepository = commentRepository;
        this.dishRepository = dishRepository;
        this.commentMapper = commentMapper;
        this.userRepository = userRepository;
    }

    @PostMapping("/add")
    public ResponseEntity<?> addComment(@RequestBody CommentRequestDto comment) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDto userDto = (UserDto) authentication.getPrincipal();

        Optional<User> user = userRepository.findById(userDto.getId());
        Optional<Dish> dish = dishRepository.findById(comment.getDishId());

        Comment newComment = new Comment();

        user.ifPresent(newComment::setAuthor);
        dish.ifPresent(newComment::setDish);
        newComment.setContent(comment.getContent());

        commentRepository.save(newComment);

        return ResponseEntity.ok(commentMapper.toCommentDto(newComment));
    }
}
