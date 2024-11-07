package com.example.kaiway.service;
import com.example.kaiway.model.Transportation;
import com.example.kaiway.model.TransportationOption;
import com.example.kaiway.repository.TransportationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class TransportationService {
    @Autowired
    private TransportationRepository transportationRepository;

    // 获取某个城市的所有交通工具信息
    public List<Transportation> getTransportationByDepartureCity(String departureCity) {
        return transportationRepository.findByDepartureCity(departureCity);
    }

    // 获取所有出发城市列表
    public List<String> getAllDepartureCities() {
        return transportationRepository.findAllDepartureCities();
    }

    // 获取所有到达城市列表
    public List<String> getAllArrivalCities() {
        return transportationRepository.findAllArrivalCities();
    }

    public List<Transportation> getTransportations(String departureCity, String arrivalCity, LocalDate departureDate) {
        // 查询出发城市和到达城市的交通选项，根据出发日期进行过滤
        return transportationRepository.findByDepartureCityAndArrivalCity(departureCity, arrivalCity);
    }

    // 获取从出发城市到目的城市的联运选项
    public List<TransportationOption> findConnectedTransportation(String departureCity, String arrivalCity, LocalDate departureDate) {
        // 1. 获取所有从出发城市到其他中转城市的航班或列车
        List<Transportation> firstLegOptions = transportationRepository.findByDepartureCity(departureCity);

        // 2. 获取所有从中转城市到目的城市的航班或列车
        List<Transportation> secondLegOptions = transportationRepository.findByArrivalCity(arrivalCity);

        // 3. 构建联运选项
        List<TransportationOption> connectedOptions = new ArrayList<>();

        for (Transportation firstLeg : firstLegOptions) {
            for (Transportation secondLeg : secondLegOptions) {
                if (canConnect(firstLeg, secondLeg)) {  // 检查是否可以连接，例如：时间上可以连接
                    connectedOptions.add(new TransportationOption(firstLeg, secondLeg, departureDate));
                }
            }
        }
        return connectedOptions;
    }

    // 判断两个交通工具是否可以连接（第二段出发时间晚于第一段的到达时间至少3小时，考虑过夜情况）
    protected boolean canConnect(Transportation firstLeg, Transportation secondLeg) {
        LocalTime firstArrivalTime = firstLeg.getArrivalTime();
        LocalTime secondDepartureTime = secondLeg.getDepartureTime();

        // 计算时间差
        Duration duration = Duration.between(firstArrivalTime, secondDepartureTime);

        // 如果第一段到达时间在第二段出发时间前 3 小时之内，连接有效
        // 如果时间差小于 0，说明跨越了午夜，需要再加上一天的时间
        if (duration.isNegative()) {
            // 跨夜情况：第一段到达时间晚于第二段出发时间
            duration = duration.plusDays(1);  // 加一天，假设跨越了午夜
        }

        // 判断时间差是否大于等于 3 小时且小于等于 8 小时
        return duration.toHours() >= 3  && duration.toHours() <= 8;
    }

}
