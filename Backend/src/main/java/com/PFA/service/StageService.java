package com.PFA.service;

import com.PFA.entity.Stage;
import com.PFA.repository.StageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StageService {

    @Autowired
    private StageRepository stageRepository;

    public Stage saveStage(Stage stage) {
        return stageRepository.save(stage);
    }

    public Optional<Stage> getStageById(int id) {
        return stageRepository.findById(id);
    }

    public List<Stage> getAllStages() {
        return stageRepository.findAll();
    }

    public Stage updateStage(int id, Stage stage) {
        Optional<Stage> existingStage = stageRepository.findById(id);
        if (existingStage.isPresent()) {
            Stage updatedStage = existingStage.get();
            updatedStage.setSujet(stage.getSujet());
            updatedStage.setNom(stage.getNom());
            updatedStage.setDescription(stage.getDescription());
            updatedStage.setUser(stage.getUser());
            updatedStage.setDepartement(stage.getDepartement());
            updatedStage.setEtat(stage.getEtat());
            return stageRepository.save(updatedStage);
        } else {
            return null;
        }
    }

    public void deleteStage(int id) {
        stageRepository.deleteById(id);
    }
}
