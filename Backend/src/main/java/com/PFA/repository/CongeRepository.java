package com.PFA.repository;

import com.PFA.entity.Conge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CongeRepository extends JpaRepository<Conge , Integer> {
    List<Conge> findByUserId(int userId);

}
