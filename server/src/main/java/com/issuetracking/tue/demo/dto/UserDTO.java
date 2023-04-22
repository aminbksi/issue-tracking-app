package com.issuetracking.tue.demo.dto;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "users")
public class UserDTO {
    @Id
    private String id;
    private String githubLoginId;
    private String email;
    private List<RepositoryDTO> repositories;
}
