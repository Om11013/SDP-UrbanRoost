package com.example.demo.repository;
import com.example.demo.model.Broker;

import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BrokerRepository extends JpaRepository<Broker,Integer> {
    Broker findByUsername(String username);
}
