package com.example.demo.service;

import com.example.demo.model.Utility;
import com.example.demo.repository.UtilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UtilityServiceImpl implements UtilityService{

    @Autowired
    private UtilityRepository utilityRepository;

    @Override
    public Utility saveUtility(Utility utility) {
        return utilityRepository.save(utility);
    }

    @Override
    public List<Utility> getAllUtilitys() {
        return utilityRepository.findAll();
    }
}
