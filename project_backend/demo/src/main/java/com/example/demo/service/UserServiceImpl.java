package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User findUserByEmail(String email){
        return userRepository.findUserByEmail(email);
    }

    @Override
    public void deleteUserById(int id) {
        Optional<User> user1 = userRepository.findById(id);
        if(user1.isPresent()){
            userRepository.deleteById(id);
        }
    }

    @Override
    public Optional<User> findUserById(int id) {
        Optional<User> user1 = userRepository.findById(id);
        if(user1.isPresent()){
            return user1;
        }
        return null;
    }

    @Override
    public User editUser(User updatedUser, int id) {
        Optional<User> user1 = userRepository.findById(id);

        if(user1.isPresent()){
            userRepository.save(updatedUser);
        }
        return userRepository.save(updatedUser);
    }
}
