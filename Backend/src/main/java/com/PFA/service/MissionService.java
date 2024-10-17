package com.PFA.service;

import com.PFA.entity.Mission;
import com.PFA.entity.User;
import com.PFA.entity.Vehicule;
import com.PFA.repository.MissionRepository;
import com.PFA.repository.UserRepository;
import com.PFA.repository.VehiculeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class MissionService {

    private final MissionRepository missionRepository;
    private final UserRepository userRepository;
    private final VehiculeRepository vehiculeRepository;

    public Mission createMission(Mission mission) {
        return missionRepository.save(mission);
    }

    public List<Mission> getAllMissions() {
        return missionRepository.findAll();
    }

    public User getUserById(Long userId) {
        return userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
    }

    public Vehicule getVehiculeById(int vehiculeId) {
        return vehiculeRepository.findById(vehiculeId).orElseThrow(() -> new RuntimeException("Vehicule not found"));
    }
    public Mission getMissionById(int id){
       return  missionRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("Mission not found by id :"+id));
    }
    public Mission updateMission(int id, Mission mission) {
        Mission existingMission = getMissionById(id);
        existingMission.setTitle(mission.getTitle());
        existingMission.setDescription(mission.getDescription());
        existingMission.setUser(mission.getUser());
        existingMission.setVehicule(mission.getVehicule());
        existingMission.setCout(mission.getCout());
        existingMission.setTypeCout(mission.getTypeCout());
        existingMission.setDateDebut(mission.getDateDebut());
        existingMission.setDateFin(mission.getDateFin());
        return missionRepository.save(existingMission);
    }

    public List<Mission> getMissionsByUserId(int userId) {
        return missionRepository.findByUserId(userId);
    }



    public void deletMission(int id) {
        if (!missionRepository.existsById(id)) {
            throw new RuntimeException("Mission not found by id: " + id);
        }
        missionRepository.deleteById(id);
    }

}
