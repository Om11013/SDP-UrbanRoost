package com.example.demo.service;

import com.example.demo.model.Owner;

import java.util.List;

public interface OwnerService {
    public Owner saveOwner(Owner owner);
    public List<Owner> getAllOwners();
}
