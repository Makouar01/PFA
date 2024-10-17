package com.PFA.repository;

import com.PFA.entity.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehiculeRepository extends JpaRepository<Vehicule ,Integer> {
    List<Vehicule> findByDisponible(boolean disponible);


}
