package com.example.demo.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity
//@Table(uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class Secretary {
    public Secretary() {
    }
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id=1;
    //    @Pattern(regexp = "^[a-zA-Z ]+$", message = "Characters from (a-z,A-Z) are allowed")@NotBlank(message = "Field cannot be blank")
    private String username;
    //    @Pattern(regexp = "^[6-9]\\d{9}$",message = "Enter valid contact number")@NotBlank(message = "Field cannot be blank")
    private long contact;
    //    @Size(max=6, message = "Max size is 6")@NotBlank(message = "Field cannot be blank")
    private String password;
    //    @NotBlank(message = "Field cannot be blank")
    private String email;
    private String role;
    public long getContact() {
        return contact;
    }

    public void setContact(long contact) {
        this.contact = contact;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id+1;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
