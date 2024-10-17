package com.PFA.service;

import com.PFA.entity.Conge;
import com.PFA.repository.CongeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CongeService {

    @Autowired
    private CongeRepository congeRepository;

    // Créer un nouveau congé
    public Conge createConge(Conge conge) {
        return congeRepository.save(conge);
    }

    // Lire un congé par son ID
    public Conge getCongeById(int id) {
        Optional<Conge> conge = congeRepository.findById(id);
        return conge.orElse(null);
    }

    // Lire tous les congés
    public List<Conge> getAllConges() {
        return congeRepository.findAll();
    }

    public Conge updateConge(int id, Conge conge) {
        Conge ExistingConge = getCongeById(id);
        ExistingConge.setDescription(conge.getDescription());
        ExistingConge.setDateDebut(conge.getDateDebut());
        ExistingConge.setDateFin(conge.getDateFin());
        ExistingConge.setUser(conge.getUser());
        ExistingConge.setEtat(conge.getEtat());
        return congeRepository.save(ExistingConge);

    }
    public List<Conge> getCongesByUserId(int userId) {
        return congeRepository.findByUserId(userId);
    }

    // Supprimer un congé
    public boolean deleteConge(int id) {
        if (congeRepository.existsById(id)) {
            congeRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
