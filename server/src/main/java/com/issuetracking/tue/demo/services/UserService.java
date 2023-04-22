package com.issuetracking.tue.demo.services;

import com.issuetracking.tue.demo.dto.UserDTO;
import com.issuetracking.tue.demo.serviceInterfaces.UserServiceInterface;

public class UserService implements UserServiceInterface{

    @Override
    public UserDTO createUser(UserDTO user) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'createUser'");
    }

    @Override
    public UserDTO getUser(String githubLoginId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getUser'");
    }
    
}
