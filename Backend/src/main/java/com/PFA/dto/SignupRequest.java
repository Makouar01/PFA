package com.PFA.dto;

import lombok.Data;

import java.util.List;

@Data
public class SignupRequest {

    private String email;

    private String password;

    private String name;
    private String departement;
    private boolean enConge ;
    private String job ;
    private List<String> permissions;

    private String role;

}
