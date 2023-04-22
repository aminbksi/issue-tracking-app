package com.issuetracking.tue.demo.dto;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "comments")
public class CommentDTO {
    @Id
    private String id;
    private String author;
    private LocalDateTime creationDate;
    private String text;
    @DBRef
    private IssueDTO issue;
}
