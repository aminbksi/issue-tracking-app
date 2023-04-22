package com.issuetracking.tue.demo.dto;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "issues")
public class IssueDTO {
    @Id
    private String id;
    private String title;
    private String description;
    private String author;
    private LocalDateTime creationDate;
    private List<LabelDTO> labels;
    @DBRef
    private RepositoryDTO repository;
    private List<CommentDTO> comments;
}
