package com.example.kaiway.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    // 映射主页的 GET 请求，方便调试
    @GetMapping("/")
    public String home() {
        return "Welcome to the Kaiway homepage!";
    }
}
