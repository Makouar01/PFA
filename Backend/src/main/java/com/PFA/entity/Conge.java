package com.PFA.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;


@Data
@Entity
public class Conge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;



    private String description ;
    private LocalDate dateDebut ;
    private LocalDate dateFin ;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    private Boolean etat = false ;


}
