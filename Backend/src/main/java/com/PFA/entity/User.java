package com.PFA.entity;
import com.PFA.dto.UserDTO;
import com.PFA.enums.Departement;
import com.PFA.enums.UserRole;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Data
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String email;

    private String password;
    private boolean enConge = false;
    private String job ;
    private String name;
    private Departement departement;
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> permissions;


    private UserRole userRole;

    public UserDTO getUserDto() {
        UserDTO userDto = new UserDTO();
        userDto.setId(id);
        userDto.setName(name);
        userDto.setEmail(email);
        userDto.setDepartement(departement);
        userDto.setJob(job);
        userDto.setPermissions(permissions);
        userDto.setEnConge(enConge);
        userDto.setUserRole(userRole);
        return userDto;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(userRole.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
