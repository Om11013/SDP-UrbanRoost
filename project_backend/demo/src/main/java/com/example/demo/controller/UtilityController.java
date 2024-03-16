package com.example.demo.controller;

import com.example.demo.model.Utility;
import com.example.demo.service.UtilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/utility")
@CrossOrigin
public class UtilityController{

    @Autowired
    private UtilityService utilityService;

    @PostMapping("/add")
    public String add(@RequestBody Utility utility){
        System.out.println(utility);
        utilityService.saveUtility(utility);
        return "New Utility is added";
    }

    @GetMapping("/getAll")
    public List<Utility> list(){
        return utilityService.getAllUtilitys();
    }
}

