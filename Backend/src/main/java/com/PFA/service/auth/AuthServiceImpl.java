package com.PFA.service.auth;

import com.PFA.dto.SignupRequest;
import com.PFA.dto.UserDTO;
import com.PFA.entity.User;
import com.PFA.enums.Departement;
import com.PFA.enums.UserRole;
import com.PFA.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Transactional
    public UserDTO createUser(SignupRequest signupRequest) throws Exception {
        User user = new User();
        user.setEmail(signupRequest.getEmail());
        user.setName(signupRequest.getName());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        user.setUserRole(UserRole.ROLE_USER);
        user.setJob(signupRequest.getJob());

        Optional<Departement> departement = Optional.ofNullable(signupRequest.getDepartement()).map(Departement::fromString);
        user.setDepartement(departement.orElse(Departement.Fonctionaire)); // Default value if not provided
        user.setEnConge(false);
        User createdUser = userRepository.save(user);
        return createdUser.getUserDto();
    }

    @Transactional
    public UserDTO updateUser(Long id, SignupRequest signupRequest) throws Exception {
        User user = userRepository.findById(id).orElseThrow(() -> new Exception("User not found"));
        user.setName(signupRequest.getName());
        user.setEmail(signupRequest.getEmail());
        user.setEnConge(signupRequest.isEnConge());
        user.setJob(signupRequest.getJob());
        user.setPermissions(signupRequest.getPermissions());
        Optional<Departement> departement = Optional.ofNullable(signupRequest.getDepartement())
                .map(Departement::fromString);
        user.setDepartement(departement.orElse(user.getDepartement()));

        if (signupRequest.getPassword() != null && !signupRequest.getPassword().isEmpty()) {
            user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        }
        User updatedUser = userRepository.save(user);
        return updatedUser.getUserDto();
    }

    @Transactional
    public void deleteUser(Long id) throws Exception {
        if (!userRepository.existsById(id)) {
            throw new Exception("User not found");
        }
        userRepository.deleteById(id);
    }

    public Boolean hasUserWithEmail(String email) {
        return userRepository.findFirstByEmail(email).isPresent();
    }

    public UserDTO getUserById(Long id) throws Exception {
        User user = userRepository.findById(id).orElseThrow(() -> new Exception("User not found"));
        return user.getUserDto();
    }

    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream()
                .map(User::getUserDto)
                .collect(Collectors.toList());
    }
}
