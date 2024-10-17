package com.PFA.repository;

import com.PFA.entity.User;
import com.PFA.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findFirstByEmail(String email);
    Optional<User> findByEmail(String email);


    Optional<User> findByUserRole(UserRole userRole);
    List<User> findByenConge(boolean enConge);

}
