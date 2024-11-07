package com.example.kaiway.model;

import jakarta.persistence.*;

import java.sql.Time;
import java.time.LocalTime;

@Entity
@Table(name = "transportation")
public class Transportation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    @Column(name = "transport_type")
    private TransportType transportType; // 'flight' or 'train'
    @Column(name = "carrier_code")
    private String carrierCode;
    @Column(name = "transport_number")
    private String transportNumber;
    @Column(name = "departure_city")
    private String departureCity;
    @Column(name = "departure_code")
    private String departureCode;
    @Column(name = "arrival_city")
    private String arrivalCity;
    @Column(name = "arrival_code")
    private String arrivalCode;
    @Column(name = "departure_time")
    private LocalTime departureTime; // 出发时间
    @Column(name = "arrival_time")
    private LocalTime arrivalTime;   // 到达时间
    @Column(name = "time_duration")
    private Time timeDuration;  // 时长
    @Column(name = "price")
    private double price;            // 票价
    @Column(name = "carrier_name")
    private String carrierName;      // 运营商名称
    @Column(name = "class")
    private String travelClass;      // 座位类型 (例如：二等座，经济舱)

    // Constructors, Getters and Setters
    public Transportation() {}

    public Transportation(TransportType transportType, String carrierCode, String transportNumber, String departureCity,
                          String departureCode, String arrivalCity, String arrivalCode, LocalTime departureTime,
                          LocalTime arrivalTime, Time timeDuration, double price, String carrierName, String travelClass) {
        this.transportType = transportType;
        this.carrierCode = carrierCode;
        this.transportNumber = transportNumber;
        this.departureCity = departureCity;
        this.departureCode = departureCode;
        this.arrivalCity = arrivalCity;
        this.arrivalCode = arrivalCode;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.timeDuration = timeDuration;
        this.price = price;
        this.carrierName = carrierName;
        this.travelClass = travelClass;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TransportType getTransportType() {
        return transportType;
    }

    public void setTransportType(TransportType transportType) {
        this.transportType = transportType;
    }

    public String getCarrierCode() {
        return carrierCode;
    }

    public void setCarrierCode(String carrierCode) {
        this.carrierCode = carrierCode;
    }

    public String getTransportNumber() {
        return transportNumber;
    }

    public void setTransportNumber(String transportNumber) {
        this.transportNumber = transportNumber;
    }

    public String getDepartureCity() {
        return departureCity;
    }

    public void setDepartureCity(String departureCity) {
        this.departureCity = departureCity;
    }

    public String getDepartureCode() {
        return departureCode;
    }

    public void setDepartureCode(String departureCode) {
        this.departureCode = departureCode;
    }

    public String getArrivalCity() {
        return arrivalCity;
    }

    public void setArrivalCity(String arrivalCity) {
        this.arrivalCity = arrivalCity;
    }

    public String getArrivalCode() {
        return arrivalCode;
    }

    public void setArrivalCode(String arrivalCode) {
        this.arrivalCode = arrivalCode;
    }

    public LocalTime getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(LocalTime departureTime) {
        this.departureTime = departureTime;
    }

    public LocalTime getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(LocalTime arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public Time getTimeDuration() {
        return timeDuration;
    }

    public void setTimeDuration(Time timeDuration) {
        this.timeDuration = timeDuration;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getCarrierName() {
        return carrierName;
    }

    public void setCarrierName(String carrierName) {
        this.carrierName = carrierName;
    }

    public String getTravelClass() {
        return travelClass;
    }

    public void setTravelClass(String travelClass) {
        this.travelClass = travelClass;
    }
}
