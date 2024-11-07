package com.example.kaiway.service;

import com.example.kaiway.model.FlightRailSearchRequest;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class FlightRailSearchService {
    public List<String> searchTickets(FlightRailSearchRequest searchRequest) {
        //测试用
        System.out.println("Searching for tickets with the following details: " + searchRequest);

        // 返回假数据
        return Arrays.asList("Flight 101: " + searchRequest.getDepartureCity() + " to " + searchRequest.getArrivalCity(),
                "Train 202: " + searchRequest.getDepartureCity() + " to " + searchRequest.getArrivalCity());
    }

}
