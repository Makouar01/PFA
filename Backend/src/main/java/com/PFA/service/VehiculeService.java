package com.PFA.service;

import com.PFA.entity.Vehicule;
import com.PFA.repository.VehiculeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VehiculeService {

    private final VehiculeRepository vehiculeRepository;

    public List<Vehicule> getAllVehicules() {
        return vehiculeRepository.findAll();
    }

    public Vehicule getVehiculeById(int id) {


            return vehiculeRepository.findById(id)
                    .orElseThrow(()->new RuntimeException("Vehicule not found !"));

    }

    public List<Vehicule> getAvailableVehicules() {
        return vehiculeRepository.findByDisponible(true);
    }

    public Vehicule saveVehicule(Vehicule vehicule) {
        return vehiculeRepository.save(vehicule);
    }

    public Vehicule updateVehicule(int id, Vehicule vehiculeDetails) {
        Vehicule existingVehicule = getVehiculeById(id);
        existingVehicule.setName(vehiculeDetails.getName());
        existingVehicule.setMarque(vehiculeDetails.getMarque());
        existingVehicule.setModel(vehiculeDetails.getModel());
        existingVehicule.setImmatriculation(vehiculeDetails.getImmatriculation());
        existingVehicule.setDateAchat(vehiculeDetails.getDateAchat());
        existingVehicule.setDisponible(vehiculeDetails.getDisponible());

        return vehiculeRepository.save(existingVehicule);
    }

    public void deleteVehicule(int id) {
        if (!vehiculeRepository.existsById(id)) {
            throw new RuntimeException("Vehicule not found with id: " + id);
        }
        vehiculeRepository.deleteById(id);
    }
}
