package com.sigma.worldskitchenserver.controller;

import com.sigma.worldskitchenserver.dto.Dish.CommentRequestDto;
import com.sigma.worldskitchenserver.enums.ActivityType;
import com.sigma.worldskitchenserver.mapper.CommentMapper;
import com.sigma.worldskitchenserver.model.Comment;
import com.sigma.worldskitchenserver.service.CommentService;
import com.sigma.worldskitchenserver.service.RecentActivityService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/comment")
public class CommentController {
    CommentMapper commentMapper;

    RecentActivityService recentActivityService;
    CommentService commentService;

    public CommentController(CommentMapper commentMapper, RecentActivityService recentActivityService, CommentService commentService) {
        this.commentMapper = commentMapper;
        this.recentActivityService = recentActivityService;
        this.commentService = commentService;
    }

    @PostMapping("/add")
    public ResponseEntity<?> addComment(@RequestBody CommentRequestDto comment) {

        Comment newComment = commentService.addNewComment(comment);
        recentActivityService.addActivity(newComment.getAuthor(), newComment.getDish(), ActivityType.ADD_COMMENT);

        return ResponseEntity.ok(commentMapper.toCommentDto(newComment));
    }
}
