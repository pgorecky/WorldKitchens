package com.sigma.worldskitchenserver.controller;

import com.sigma.worldskitchenserver.dto.Dish.CommentRequestDto;
import com.sigma.worldskitchenserver.dto.User.UserDto;
import com.sigma.worldskitchenserver.enums.ActivityType;
import com.sigma.worldskitchenserver.model.Comment;
import com.sigma.worldskitchenserver.model.Dish;
import com.sigma.worldskitchenserver.model.User;
import com.sigma.worldskitchenserver.mapper.CommentMapper;
import com.sigma.worldskitchenserver.repository.CommentRepository;
import com.sigma.worldskitchenserver.repository.DishRepository;
import com.sigma.worldskitchenserver.repository.UserRepository;
import com.sigma.worldskitchenserver.service.RecentActivityService;
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

    RecentActivityService recentActivityService;

    public CommentController(CommentRepository commentRepository, DishRepository dishRepository, CommentMapper commentMapper, UserRepository userRepository, RecentActivityService recentActivityService) {
        this.commentRepository = commentRepository;
        this.dishRepository = dishRepository;
        this.commentMapper = commentMapper;
        this.userRepository = userRepository;
        this.recentActivityService = recentActivityService;
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
        recentActivityService.addActivity(user.get(), dish.get(), ActivityType.ADD_COMMENT);

        return ResponseEntity.ok(commentMapper.toCommentDto(newComment));
    }
}
