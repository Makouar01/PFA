package com.PFA.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Mission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "vehicule_id")
    private Vehicule vehicule;
    private String typeCout ;
    private long cout ;

    private String dateDebut;

    private String dateFin;
    private boolean etat ;
}
