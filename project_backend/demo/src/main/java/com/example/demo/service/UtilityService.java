package com.example.demo.service;

import com.example.demo.model.Utility;

import java.util.List;

public interface UtilityService {
    public Utility saveUtility(Utility utility);
    public List<Utility> getAllUtilitys();
}
