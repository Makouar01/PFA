package com.PFA.entity;

import com.PFA.enums.Departement;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Stage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id ;
    private String sujet;
    private String nom ;
    private String description ;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    private Departement departement;
    private Boolean etat ;


}
