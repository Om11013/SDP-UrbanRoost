package com.example.demo.controller;

import com.example.demo.model.Secretary;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "New User is added";
    }

    @GetMapping("/getAll")
    public List<User> list(){
        return userService.getAllUsers();
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody User user) {
        String email = user.getEmail();
        String password = user.getPassword();

        System.out.println(email);
        System.out.println(password);

        User user1 = userService.findUserByEmail(email);

        if (user1 != null && user1.getPassword().equals(password)) {
            int id = user1.getId();
            String role = user1.getRole(); // Assuming role is retrieved from User object
            // Construct JSON response
            return ResponseEntity.ok().body(
                    new LoginResponse(id, role)
            );
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("failure");
        }
    }
    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        userService.deleteUserById(id);
        return "User Deleted";
    }

    @PatchMapping("/{id}")
    public String edit(@RequestBody User user, @PathVariable int id)
    {
        Optional<User> user1 = userService.findUserById(id);

        if(user1.isPresent()){
            User existingUser = user1.get();
            existingUser.setUsername(user.getUsername());
            existingUser.setContact(user.getContact());
            existingUser.setEmail(user.getEmail());
            existingUser.setPassword(user.getPassword());
            existingUser.setRole(user.getRole());
            userService.saveUser(existingUser);
        }

        return "User Saved";
    }

    // Inner class for defining response structure
    static class LoginResponse {
        private final int id;
        private final String role;

        public LoginResponse(int id, String role) {
            this.id = id;
            this.role = role;
            System.out.println("Ssssssssssssss");
            System.out.println(id);
            System.out.println(role);

        }

        public int getId() {
            return id;
        }

        public String getRole() {
            return role;
        }
    }





}
