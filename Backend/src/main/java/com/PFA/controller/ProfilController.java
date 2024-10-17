package com.PFA.controller;

import com.PFA.entity.Conge;
import com.PFA.entity.Mission;
import com.PFA.service.CongeService;
import com.PFA.service.MissionService;
import com.PFA.service.jwt.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/profil")
public class ProfilController {

    @Autowired
    private MissionService missionService;

    @Autowired
    private CongeService congeService;

    @Autowired
    private UserService userService;

    @GetMapping("/missions")
    public ResponseEntity<List<Mission>> getMissionsForUser(@RequestParam int userId) {
        List<Mission> missions = missionService.getMissionsByUserId(userId);
        return ResponseEntity.ok(missions);
    }

    @GetMapping("/conges")
    public ResponseEntity<List<Conge>> getCongesForUser(@RequestParam int userId) {
        List<Conge> conges = congeService.getCongesByUserId(userId);
        return ResponseEntity.ok(conges);
    }


}
