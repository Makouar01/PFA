package com.PFA.service.jwt;

import com.PFA.dto.UserDTO;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService {
    UserDetailsService userDetailsService();
    // UserService.java
        UserDTO getUserById(Long userId);
        UserDTO updateUser(Long userId, UserDTO userDTO);

}
