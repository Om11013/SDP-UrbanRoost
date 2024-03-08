package com.example.demo.repository;
import com.example.demo.model.Allie;

import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AllieRepository extends JpaRepository<Allie,Integer> {

    Allie findByUsername(String username);
}
