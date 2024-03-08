package com.example.demo.service;
import com.example.demo.repository.SecretaryRepository;

import com.example.demo.model.Secretary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SecretaryServiceImpl implements SecretaryService{

    @Autowired
    private SecretaryRepository secretaryRepository;
    @Override
    public Secretary saveSecretary(Secretary secretary) {
        return secretaryRepository.save(secretary);
    }

    @Override
    public List<Secretary> getAllSecretarys() {
        return secretaryRepository.findAll();
    }

}