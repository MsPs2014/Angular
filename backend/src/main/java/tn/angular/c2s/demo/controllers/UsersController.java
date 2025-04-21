package tn.angular.c2s.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.angular.c2s.demo.models.Users;
import tn.angular.c2s.demo.repository.UsersRepository;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/users/")
public class UsersController {

    @Autowired
    private UsersRepository userRepository;

    // get all user
    @GetMapping("/GetAlluseres")
    public List<Users> getAllUsers(){
        return userRepository.findAll();
    }

    // create user rest api
    @PostMapping("/AddUser")
    public Users createUser(@RequestBody Users user) {
        return userRepository.save(user);
    }

    // get user by id rest api
    @GetMapping("/GetUserByid/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable Long id) {
        Users user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
        return ResponseEntity.ok(user);
    }

    // update user rest api

    @PutMapping("/UpdateUser/{id}")
    public ResponseEntity<Users> updateUser(@PathVariable Long id, @RequestBody Users userDetails){
        Users user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));

        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());

        Users updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    // delete user rest api
    @DeleteMapping("/deleteUsers/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
        Users user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
