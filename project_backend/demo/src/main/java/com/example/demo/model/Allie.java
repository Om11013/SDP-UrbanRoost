package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Allie {
    public Allie() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id = 1;
    private String allieName;
    private String contact;
    private String type_of_allie;
    private long fees;
    private String image;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id+1;
    }

    public String getAllieName() {
        return allieName;
    }

    public void setAllieName(String allieName) {
        this.allieName = allieName;
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

    public long getFees() {
        return fees;
    }

    public void setFees(long fees) {
        this.fees = fees;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
