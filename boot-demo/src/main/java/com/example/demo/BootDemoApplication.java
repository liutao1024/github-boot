package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class BootDemoApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(BootDemoApplication.class, args);
	}
	
	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(BootDemoApplication.class);
    }
//	@Value(value="${book.author}")
//	private String bookAuthor;
	
	@RequestMapping("/")
	public String sayHello(){
		return "SpringBootDemoApplication Hello Spring boot!"+"The Book Author is:"/*+bookAuthor*/;
	}
}
