package com.PFA.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ReparationVehicule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String description;
    private String name ;
    private long cout ;
    private Boolean etat ;
    @ManyToOne
    private Vehicule vehicule;
}
