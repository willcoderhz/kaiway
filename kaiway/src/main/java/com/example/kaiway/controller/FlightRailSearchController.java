package com.example.kaiway.controller;

import com.example.kaiway.model.*;
import com.example.kaiway.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/search")
public class FlightRailSearchController {

    @Autowired
    private FlightRailSearchService searchService;

    @Autowired
    private TransportationService transportationService;

    @PostMapping
    public List<String> searchTickets(@RequestBody FlightRailSearchRequest searchRequest) {
        // 传入 SearchRequest 到服务层，进行查询
        return searchService.searchTickets(searchRequest);
    }

    @GetMapping("/departure/{departureCity}")
    public List<Transportation> getTransportationByDepartureCity(@PathVariable String departureCity) {
        return transportationService.getTransportationByDepartureCity(departureCity);
    }

    @PostMapping("/tickets")
    public List<Transportation> searchOptions(@RequestBody FlightRailSearchRequest searchRequest) {
        try {
            String departureCity = searchRequest.getDepartureCity();
            String arrivalCity = searchRequest.getArrivalCity();
            LocalDate departureDate = searchRequest.getDepartureDate(); // 只使用出发日期

            // 调用 Service 层获取符合条件的交通选项
            return transportationService.getTransportations(departureCity, arrivalCity, departureDate);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid date format. Please use yyyy-MM-dd.");
        }
    }

    // 获取联运选项
    @GetMapping("/connected/{departureCity}/{arrivalCity}/{departureDate}")
    public List<TransportationOption> getConnectedTransportation(@PathVariable String departureCity, @PathVariable String arrivalCity, @PathVariable LocalDate departureDate) {
        return transportationService.findConnectedTransportation(departureCity, arrivalCity, departureDate);
    }
}
