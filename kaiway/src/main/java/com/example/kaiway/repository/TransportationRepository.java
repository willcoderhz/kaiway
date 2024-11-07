package com.example.kaiway.repository;

import com.example.kaiway.model.Transportation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

// 继承 JpaRepository，提供基本的 CRUD 操作
@Repository
public interface TransportationRepository extends JpaRepository<Transportation, Long> {

    // 自定义查询方法，查找特定出发城市的所有交通工具
    List<Transportation> findByDepartureCity(String departureCity);

    // 获取所有不同的 departure_city
    @Query("SELECT DISTINCT t.departureCity FROM Transportation t")
    List<String> findAllDepartureCities();

    // 获取所有不同的 arrival_city
    @Query("SELECT DISTINCT t.arrivalCity FROM Transportation t")
    List<String> findAllArrivalCities();

    // 查询出发城市、到达城市和出发日期的交通选项
    List<Transportation> findByDepartureCityAndArrivalCity(String departureCity, String arrivalCity);

    List<Transportation> findByArrivalCity(String arrivalCity);
}