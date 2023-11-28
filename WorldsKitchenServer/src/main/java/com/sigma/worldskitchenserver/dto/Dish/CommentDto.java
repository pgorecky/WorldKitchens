package com.sigma.worldskitchenserver.dto.Dish;

import com.sigma.worldskitchenserver.dto.User.AuthorDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class CommentDto {

    private Long id;

    private AuthorDto author;

    private String content;
}
