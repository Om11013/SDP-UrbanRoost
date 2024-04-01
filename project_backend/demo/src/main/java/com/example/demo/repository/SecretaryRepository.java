package com.example.demo.repository;
import com.example.demo.model.Secretary;

import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SecretaryRepository extends JpaRepository<Secretary,Integer> {
    Secretary findByUsername(String username);
}
