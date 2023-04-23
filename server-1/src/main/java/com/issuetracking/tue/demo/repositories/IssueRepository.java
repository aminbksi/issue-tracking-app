package com.issuetracking.tue.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.issuetracking.tue.demo.dto.IssueDTO;

@Repository
public interface IssueRepository extends MongoRepository<IssueDTO, String> {
    List<IssueDTO> findByRepositoryName(String repositoryName);
    List<IssueDTO> findByRepositoryId(String repositoryId);
    Optional<IssueDTO> findById(String issueId);
}
