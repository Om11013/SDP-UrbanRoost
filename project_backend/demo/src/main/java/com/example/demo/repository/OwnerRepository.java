package com.example.demo.repository;
import com.example.demo.model.Owner;

import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OwnerRepository extends JpaRepository<Owner,Integer> {

    Owner findByUsername(String username);
}
