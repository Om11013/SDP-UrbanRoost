package com.example.demo.service;

import com.example.demo.model.Broker;

import java.util.List;

public interface BrokerService {
    public Broker saveBroker(Broker broker);
    public List<Broker> getAllBrokers();
}
