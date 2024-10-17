package com.PFA.controller;

import com.PFA.entity.Mission;
import com.PFA.entity.User;
import com.PFA.entity.Vehicule;
import com.PFA.service.MissionService;
import com.PFA.service.UserService;
import com.PFA.service.VehiculeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/missions")
public class MissionController {

    private final UserService userService;
    private final VehiculeService vehiculeService;
    private final MissionService missionService;

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/vehicules")
    public List<Vehicule> getVehicules() {
        return vehiculeService.getAvailableVehicules();
    }

    @GetMapping("/all-Vehicule")
    public List<Vehicule> getAll(){
        return vehiculeService.getAllVehicules();
    }
    @PostMapping("/create")
    public Mission createMission(@RequestBody Mission mission, @RequestParam Long userId, @RequestParam int vehiculeId) {
        // Retrieve the associated user and vehicle
        User user = userService.getUserById(userId);
        Vehicule vehicule = vehiculeService.getVehiculeById(vehiculeId);

        // Associate the user and vehicle with the mission
        mission.setUser(user);
        mission.setVehicule(vehicule);
        vehicule.setDisponible(false);

        // Save the mission
        return missionService.createMission(mission);
    }

    @GetMapping("/all")
    public List<Mission> getAllMissions() {
        return missionService.getAllMissions();
    }

    @GetMapping("/{id}")
    public Mission getMissionById(@PathVariable int id) {
        return missionService.getMissionById(id);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Mission> updateMission(@PathVariable int id, @RequestBody Mission mission) {
        try {
            Mission updatedMission = missionService.updateMission(id, mission);
            return ResponseEntity.ok(updatedMission);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMission(@PathVariable int id) {
        try {
            missionService.deletMission(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
