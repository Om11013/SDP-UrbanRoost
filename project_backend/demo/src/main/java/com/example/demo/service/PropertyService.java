package com.example.demo.service;

import com.example.demo.model.Property;

import java.util.List;

public interface PropertyService {
    public Property saveProperty(Property property);
    public List<Property> getAllProperties();
}
