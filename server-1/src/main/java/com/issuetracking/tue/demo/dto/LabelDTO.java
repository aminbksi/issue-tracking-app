package com.issuetracking.tue.demo.dto;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "labels")
public class LabelDTO {
    @Id
    private String id;
    private String name;
    private String color;
    @DBRef
    private List<IssueDTO> issues;
}
