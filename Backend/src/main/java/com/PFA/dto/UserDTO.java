package com.PFA.dto;

import com.PFA.enums.Departement;
import com.PFA.enums.UserRole;

import lombok.Data;

import java.util.List;

@Data
public class UserDTO {

    private Long id;

    private String email;

    private String name;
    private List<String> permissions;
    private UserRole userRole;
    private Departement departement;
    private  boolean enConge ;
    private String job;
}
