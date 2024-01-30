package com.example.demo.controller;

import com.example.demo.model.Owner;
import com.example.demo.model.Property;
import com.example.demo.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/property")
@CrossOrigin
public class PropertyController {
    @Autowired
    private PropertyService propertyService;

    @PostMapping("/add")
    public String add(@RequestBody Property property){
        propertyService.saveProperty(property);
        return "New Property is added";
    }
    @GetMapping("/getAll")
    public List<Property> list(){
        return propertyService.getAllProperties();
    }
}
