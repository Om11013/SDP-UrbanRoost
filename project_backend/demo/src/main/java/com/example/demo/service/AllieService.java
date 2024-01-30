package com.example.demo.service;

import com.example.demo.model.Allie;

import java.util.List;

public interface AllieService {
    public Allie saveAllie(Allie allie);
    public List<Allie> getAllAllies();
}
