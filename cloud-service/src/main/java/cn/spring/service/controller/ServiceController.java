package cn.spring.service.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ServiceController {
	@GetMapping("/user/hello")
    public String hello() {
        return "ServiceController Hello";
    }
}