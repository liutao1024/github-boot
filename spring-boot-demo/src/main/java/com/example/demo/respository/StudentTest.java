package com.example.demo.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.StudentModel;

public interface StudentTest extends JpaRepository<StudentModel, Long> {

}
