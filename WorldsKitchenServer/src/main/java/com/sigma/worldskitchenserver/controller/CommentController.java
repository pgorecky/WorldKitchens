package com.sigma.worldskitchenserver.controller;

import com.sigma.worldskitchenserver.dto.Dish.CommentRequestDto;
import com.sigma.worldskitchenserver.enums.ActivityType;
import com.sigma.worldskitchenserver.mapper.CommentMapper;
import com.sigma.worldskitchenserver.model.Comment;
import com.sigma.worldskitchenserver.service.CommentService;
import com.sigma.worldskitchenserver.service.RecentActivityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/comment")
public class CommentController {

    private final CommentMapper commentMapper;
    private final RecentActivityService recentActivityService;
    private final CommentService commentService;

    @PostMapping("/add")
    public ResponseEntity<?> addComment(@RequestBody CommentRequestDto comment) {
        Comment newComment = commentService.addNewComment(comment);
        recentActivityService.addActivity(newComment.getAuthor(), newComment.getDish(), ActivityType.ADD_COMMENT);

        return ResponseEntity.status(HttpStatus.CREATED).body(commentMapper.toCommentDto(newComment));
    }
}
