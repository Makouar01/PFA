package com.PFA.service;

import com.PFA.entity.ReparationVehicule;
import com.PFA.entity.Vehicule;
import com.PFA.repository.ReparationVehiculeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReparationVehiculeService {

    private final ReparationVehiculeRepository reparationVehiculeRepository;

    public List<ReparationVehicule> getAll() {
        return reparationVehiculeRepository.findAll();
    }

    public ReparationVehicule getReparationById(int id) {
        return reparationVehiculeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reparation not found"));
    }

    public ReparationVehicule createReparation(ReparationVehicule reparationVehicule) {
        return reparationVehiculeRepository.save(reparationVehicule);
    }

    public ReparationVehicule updateReparation(int id, ReparationVehicule reparationVehicule) {
     ReparationVehicule ExistingReparation = getReparationById(id);

     ExistingReparation.setName(reparationVehicule.getName());
     ExistingReparation.setDescription(reparationVehicule.getDescription());
     ExistingReparation.setCout(reparationVehicule.getCout());
     ExistingReparation.setEtat(reparationVehicule.getEtat());
     ExistingReparation.setVehicule(reparationVehicule.getVehicule());
        return reparationVehiculeRepository.save(ExistingReparation);
    }



    public void deleteReparation(int id) {
        if (!reparationVehiculeRepository.existsById(id)) {
            throw new RuntimeException("Reparation not found");
        }
        reparationVehiculeRepository.deleteById(id);
    }
}
