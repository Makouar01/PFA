package com.PFA.controller;

import com.PFA.dto.SignupRequest;
import com.PFA.dto.UserDTO;
import com.PFA.entity.User;
import com.PFA.service.UserService;
import com.PFA.service.auth.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequiredArgsConstructor
@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    private final AuthService authService;

    @GetMapping
    public ResponseEntity<String> userAccess() {
        return ResponseEntity.ok("Bonjour User");
    }
    @GetMapping("/all")
    public List<User> getAll(){
        return userService.getAllUsers();

    }

    @PostMapping("/addusers")
    public ResponseEntity<?> signupUser(@RequestBody SignupRequest signupRequest) throws Exception {

        if (authService.hasUserWithEmail(signupRequest.getEmail()))
            return new ResponseEntity<>("User already exists", HttpStatus.NOT_ACCEPTABLE);

        UserDTO createdUser = authService.createUser(signupRequest);
        if (createdUser == null)
            return new ResponseEntity<>("User not created, come again later", HttpStatus.NOT_ACCEPTABLE);

        return new ResponseEntity<>(createdUser, HttpStatus.OK);
    }

}
