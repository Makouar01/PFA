package com.PFA.controller;

import com.PFA.entity.Conge;
import com.PFA.entity.Vehicule;
import com.PFA.service.CongeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/conge")
public class CongeController {

    @Autowired
    private CongeService congeService;

    // Créer un nouveau congé
    @PostMapping
    public ResponseEntity<Conge> createConge(@RequestBody Conge conge) {
        try {
            Conge createdConge = congeService.createConge(conge);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdConge);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // Lire un congé par son ID
    @GetMapping("/{id}")
    public ResponseEntity<Conge> getCongeById(@PathVariable int id) {
        try {
            Conge conge = congeService.getCongeById(id);
            return conge != null ? ResponseEntity.ok(conge) : ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // Lire tous les congés
    @GetMapping
    public ResponseEntity<List<Conge>> getAllConges() {
        try {
            List<Conge> conges = congeService.getAllConges();
            return ResponseEntity.ok(conges);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // Mettre à jour un congé
    @PutMapping("/update/{id}")
    public ResponseEntity<Conge> updateConge(@PathVariable int id, @RequestBody Conge conge) {
            Conge updatedConge = congeService.updateConge(id, conge);
            return ResponseEntity.ok(updatedConge);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteConge(@PathVariable int id) {
        try {
            if (congeService.deleteConge(id)) {
                return ResponseEntity.noContent().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
