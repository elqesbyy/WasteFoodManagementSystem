package org.example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class HelloController {

    @GetMapping("/test")
    public String sayHello() {
        return "Le serveur Spring Boot répond parfaitement !";
    }
}