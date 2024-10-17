package com.PFA.service.auth;

import com.PFA.dto.SignupRequest;
import com.PFA.dto.UserDTO;

import java.util.List;

public interface AuthService {

     UserDTO createUser(SignupRequest signupRequest) throws Exception;

     Boolean hasUserWithEmail(String email);
     UserDTO updateUser(Long id, SignupRequest signupRequest) throws Exception;
     void deleteUser(Long id) throws Exception;
     UserDTO getUserById(Long id) throws Exception;
     List<UserDTO> getAllUsers();

}
