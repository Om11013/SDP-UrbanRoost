package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Allie {
    public Allie() {
    }
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id=1;
    private String name;
    private String contact;
    private String type_of_allie;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getType_of_allie() {
        return type_of_allie;
    }

    public void setType_of_allie(String type_of_allie) {
        this.type_of_allie = type_of_allie;
    }
}
