package com.example.kaiway.controller;

import com.example.kaiway.service.TransportationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/cities")
public class CityController {
    @Autowired
    private TransportationService transportationService;

    // 获取所有出发城市列表
    @GetMapping("/departure")
    public List<String> getAllDepartureCities() {
        return transportationService.getAllDepartureCities();
    }

    // 获取所有到达城市列表
    @GetMapping("/arrival")
    public List<String> getAllArrivalCities() {
        return transportationService.getAllArrivalCities();
    }

}
