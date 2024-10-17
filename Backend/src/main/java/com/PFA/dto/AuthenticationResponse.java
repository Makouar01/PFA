package com.PFA.dto;

import com.PFA.enums.UserRole;
import lombok.Data;

import java.util.List;

@Data
public class AuthenticationResponse {

    private String jwt;

    private Long userId;

    private UserRole userRole;
    private List<String> permissions;
    private String name;
    private String email;


}
