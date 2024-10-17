package com.PFA.controller;
import com.PFA.entity.ReparationVehicule;
import com.PFA.service.ReparationVehiculeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reparations")
@RequiredArgsConstructor
public class ReparationVehiculeController {

    private final ReparationVehiculeService reparationVehiculeService;

    @GetMapping
    public ResponseEntity<List<ReparationVehicule>> getAllReparations() {
        List<ReparationVehicule> reparations = reparationVehiculeService.getAll();
        return ResponseEntity.ok(reparations);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReparationVehicule> getReparationById(@PathVariable int id) {
        ReparationVehicule reparation = reparationVehiculeService.getReparationById(id);
        return ResponseEntity.ok(reparation);
    }

    @PostMapping
    public ResponseEntity<ReparationVehicule> createReparation(@RequestBody ReparationVehicule reparationVehicule) {
        ReparationVehicule createdReparation = reparationVehiculeService.createReparation(reparationVehicule);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdReparation);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ReparationVehicule> updateReparation(@PathVariable int id, @RequestBody ReparationVehicule reparationVehicule) {
        ReparationVehicule updatedReparation = reparationVehiculeService.updateReparation(id, reparationVehicule);
        return ResponseEntity.ok(updatedReparation);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReparation(@PathVariable int id) {
        reparationVehiculeService.deleteReparation(id);
        return ResponseEntity.noContent().build();
    }
}
