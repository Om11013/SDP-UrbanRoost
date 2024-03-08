package com.example.demo.service;

import com.example.demo.model.Secretary;

import java.util.List;

public interface SecretaryService {
    public Secretary saveSecretary(Secretary secretary);
    public List<Secretary> getAllSecretarys();
}
