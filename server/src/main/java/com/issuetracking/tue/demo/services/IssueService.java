package com.issuetracking.tue.demo.services;

import java.util.List;

import com.issuetracking.tue.demo.dto.IssueDTO;
import com.issuetracking.tue.demo.serviceInterfaces.IssueServiceInterface;

public  class  IssueService implements IssueServiceInterface {

    @Override
    public void addLabelToIssue(String issueId, String label) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'addLabelToIssue'");
    }

    @Override
    public void removeLabelFromIssue(String issueId, String label) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'removeLabelFromIssue'");
    }

    @Override
    public void updateIssuesFromGitHub() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateIssuesFromGitHub'");
    }

    @Override
    public List<IssueDTO> getIssuesForRepository(String repositoryName) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getIssuesForRepository'");
    }
    
}
