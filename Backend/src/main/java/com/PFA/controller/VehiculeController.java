package com.PFA.controller;

import com.PFA.entity.Vehicule;
import com.PFA.service.VehiculeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/vehicule")
public class VehiculeController {
    private final VehiculeService vehiculeService;

    @GetMapping("/all")
    public List<Vehicule> getAllVehicule() {
        return vehiculeService.getAllVehicules();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vehicule> getVehiculeById(@PathVariable int id) {
        Vehicule vehicule = vehiculeService.getVehiculeById(id);
        return ResponseEntity.ok(vehicule);
    }

    @GetMapping("/available")
    public List<Vehicule> getAvailableVehicules() {
        return vehiculeService.getAvailableVehicules();
    }

    @PostMapping("/add")
    public ResponseEntity<Vehicule> addVehicule(@RequestBody Vehicule vehicule) {
        Vehicule newVehicule = vehiculeService.saveVehicule(vehicule);
        return ResponseEntity.ok(newVehicule);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Vehicule> updateVehicule(@PathVariable int id, @RequestBody Vehicule vehicule) {
        Vehicule updatedVehicule = vehiculeService.updateVehicule(id, vehicule);
        return ResponseEntity.ok(updatedVehicule);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteVehicule(@PathVariable int id) {
        vehiculeService.deleteVehicule(id);
        return ResponseEntity.noContent().build();
    }
}
