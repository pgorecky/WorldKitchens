package com.sigma.worldskitchenserver.repository;

import com.sigma.worldskitchenserver.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {


}
