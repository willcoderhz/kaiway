package com.example.kaiway.model;

import java.time.LocalDate;

public class FlightRailSearchRequest {
    private String departureCity;   // 出发地
    private String arrivalCity; // 目的地
    private LocalDate departureDate;     // 出发日期

    // 构造函数、getter 和 setter 方法

    public FlightRailSearchRequest(String departureCity, String arrivalCity, LocalDate departureDate) {
        this.departureCity = departureCity;
        this.arrivalCity = arrivalCity;
        this.departureDate = departureDate;
    }

    public String getDepartureCity() {
        return departureCity;
    }

    public void setDepartureCity(String departureCity) {
        this.departureCity = departureCity;
    }

    public String getArrivalCity() {
        return arrivalCity;
    }

    public void setArrivalCity(String arrivalCity) {
        this.arrivalCity = arrivalCity;
    }

    public LocalDate getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(LocalDate departureDate) {
        this.departureDate = departureDate;
    }

    @Override
    public String toString() {
        return "SearchRequest{" +
                "departure='" + departureCity + '\'' +
                ", arrival='" + arrivalCity + '\'' +
                ", date='" + departureDate + '\'' +
                '}';
    }

}
