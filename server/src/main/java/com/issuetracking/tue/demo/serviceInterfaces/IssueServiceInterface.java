package com.issuetracking.tue.demo.serviceInterfaces;

import java.util.List;

import com.issuetracking.tue.demo.dto.IssueDTO;

public interface IssueServiceInterface {
    void addLabelToIssue(String issueId, String label);
    void removeLabelFromIssue(String issueId, String label);
    void updateIssuesFromGitHub();
    List<IssueDTO> getIssuesForRepository(String repositoryName);
}
