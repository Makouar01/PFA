package com.PFA.repository;

import com.PFA.entity.ReparationVehicule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReparationVehiculeRepository extends JpaRepository<ReparationVehicule,Integer> {
}
