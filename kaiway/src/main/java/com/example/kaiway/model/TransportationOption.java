package com.example.kaiway.model;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class TransportationOption {
    private Transportation firstLeg;
    private Transportation secondLeg;
    private double totalPrice;
    private String layoverTime;
    private String totalTime;
    private int stop = 1;
    private LocalDate departureDate;
    private LocalDate arrivalDate;



    public TransportationOption(Transportation firstLeg, Transportation secondLeg, LocalDate departureDate) {
        this.firstLeg = firstLeg;
        this.secondLeg = secondLeg;
        this.totalPrice = firstLeg.getPrice() + secondLeg.getPrice();
        this.layoverTime = calculateLayoverDuration(firstLeg, secondLeg);
        this.totalTime = calculateTotalDuration(firstLeg, secondLeg);
        this.departureDate = departureDate;
        this.arrivalDate = calculateArrivalDate(departureDate, this.totalTime);

    }

    private String calculateLayoverDuration(Transportation firstLeg, Transportation secondLeg) {
        // 获取第一段的到达时间和第二段的出发时间
        LocalTime firstLegArrival = firstLeg.getArrivalTime(); // 第一段到达时间
        LocalTime secondLegDeparture = secondLeg.getDepartureTime(); // 第二段出发时间

        // 假设第二段的出发时间早于第一段的到达时间，说明是跨天的
        if (secondLegDeparture.isBefore(firstLegArrival)) {
            secondLegDeparture = secondLegDeparture.plusHours(24);
        }

        // 计算停留时间（从第一段到达时间到第二段出发时间）
        Duration layoverDuration = Duration.between(firstLegArrival, secondLegDeparture);

        // 获取小时和分钟数
        long hours = layoverDuration.toHours();
        long minutes = layoverDuration.toMinutes() % 60;

        // 将计算结果转换为时分字符串格式 "HH:mm"
        return String.format("%02d:%02d", hours, minutes);
    }

    private String calculateTotalDuration(Transportation firstLeg, Transportation secondLeg) {
        // 获取第一段和第二段的时间时长（假设它们是 Time 类型，已经转换为 LocalTime）
        LocalTime firstLegLocalTime = firstLeg.getTimeDuration().toLocalTime();
        LocalTime secondLegLocalTime = secondLeg.getTimeDuration().toLocalTime();

        // 计算第一段和第二段的时间（单位是秒）
        long firstLegSeconds = Duration.between(LocalTime.MIDNIGHT, firstLegLocalTime).getSeconds();
        long secondLegSeconds = Duration.between(LocalTime.MIDNIGHT, secondLegLocalTime).getSeconds();

        // 计算总交通时长（单位是秒）
        long totalSeconds = firstLegSeconds + secondLegSeconds;

        // 计算停留时间（单位：秒），调用你之前的方法来计算 layover
        String layoverTimeString = calculateLayoverDuration(firstLeg, secondLeg);

        // 解析返回的停留时长（假设返回的是 "HH:mm" 格式的字符串）
        if (!layoverTimeString.equals("Not enough layover time")) {
            String[] layoverParts = layoverTimeString.split(":");
            long layoverHours = Long.parseLong(layoverParts[0]);
            long layoverMinutes = Long.parseLong(layoverParts[1]);

            // 计算停留时间的秒数
            long layoverSeconds = (layoverHours * 3600) + (layoverMinutes * 60);

            // 将停留时间加到总时长
            totalSeconds += layoverSeconds;
        }

        // 计算总的小时、分钟和秒数
        long totalHours = totalSeconds / 3600;
        long totalMinutes = (totalSeconds % 3600) / 60;
        long totalSecondsRemaining = totalSeconds % 60;

        // 使用 LocalTime 来表示总时长
        LocalTime totalDuration = LocalTime.of((int) totalHours, (int) totalMinutes, (int) totalSecondsRemaining);

        // 返回总时长的字符串表示
        return totalDuration.toString();
    }

    public LocalDate calculateArrivalDate(LocalDate departureDate, String totalTime) {
        // 1. 将 totalTime 字符串转换为 LocalTime
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm"); // 假设 totalTime 格式为 "HH:mm"
        LocalTime totalTimeAsLocalTime = LocalTime.parse(totalTime, formatter);

        // 2. 将 totalTime 转换为秒数
        long totalSeconds = Duration.between(LocalTime.MIDNIGHT, totalTimeAsLocalTime).getSeconds();

        // 3. 将 departureDate 转换为 LocalDateTime 并加上秒数
        LocalDateTime departureDateTime = departureDate.atStartOfDay(); // 将 LocalDate 转换为 LocalDateTime（午夜 00:00:00）
        LocalDateTime arrivalDateTime = departureDateTime.plusSeconds(totalSeconds); // 添加总秒数

        // 4. 判断是否跨越午夜（即日期是否发生了变化），若发生变化，则到达日期加 1
        if (arrivalDateTime.toLocalDate().isAfter(departureDate)) {
            // 如果到达时间在第二天，需要处理过夜情况，日期会加 1
            return arrivalDateTime.toLocalDate().plusDays(1);
        }

        // 返回原日期
        return arrivalDateTime.toLocalDate();
    }


    // Getter and Setter 方法
    public Transportation getFirstLeg() {
        return firstLeg;
    }

    public void setFirstLeg(Transportation firstLeg) {
        this.firstLeg = firstLeg;
    }

    public Transportation getSecondLeg() {
        return secondLeg;
    }

    public void setSecondLeg(Transportation secondLeg) {
        this.secondLeg = secondLeg;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getTotalTime() {
        return totalTime;
    }

    public void setTotalTime(String totalTime) {
        this.totalTime = totalTime;
    }

    public int getStop() {
        return stop;
    }

    public void setStop(int stop) {
        this.stop = stop;
    }

    public String getLayoverTime() {
        return layoverTime;
    }

    public void setLayoverTime(String layoverTime) {
        this.layoverTime = layoverTime;
    }

    public LocalDate getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(LocalDate departureDate) {
        this.departureDate = departureDate;
    }

    public LocalDate getArrivalDate() {
        return arrivalDate;
    }

    public void setArrivalDate(LocalDate arrivalDate) {
        this.arrivalDate = arrivalDate;
    }
}
