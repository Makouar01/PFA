package com.PFA.controller;

import com.PFA.entity.Stage;
import com.PFA.service.StageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/stages")
public class StageController {

    @Autowired
    private StageService stageService;

    @PostMapping
    public ResponseEntity<Stage> createStage(@RequestBody Stage stage) {
        Stage savedStage = stageService.saveStage(stage);
        return ResponseEntity.ok(savedStage);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Stage> getStageById(@PathVariable int id) {
        Optional<Stage> stage = stageService.getStageById(id);
        return stage.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<Stage>> getAllStages() {
        List<Stage> stages = stageService.getAllStages();
        return ResponseEntity.ok(stages);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Stage> updateStage(@PathVariable int id, @RequestBody Stage stage) {
        Stage updatedStage = stageService.updateStage(id, stage);
        if (updatedStage != null) {
            return ResponseEntity.ok(updatedStage);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStage(@PathVariable int id) {
        stageService.deleteStage(id);
        return ResponseEntity.noContent().build();
    }
}
