package com.issuetracking.tue.demo.serviceInterfaces;

import com.issuetracking.tue.demo.dto.UserDTO;

public interface UserServiceInterface {
    UserDTO createUser(UserDTO user);
    UserDTO getUser(String githubLoginId);
}
