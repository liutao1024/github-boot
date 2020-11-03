package com.example.demo.xtest;

import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.model.StudentModel;
import com.example.demo.respository.StudentRespository;

public class JustTest {
	@Autowired
	private StudentRespository studentRespository; 
	@Test
	public void Test001(){
		List<StudentModel> list = studentRespository.findAll();
		for (StudentModel student : list) {
			System.out.println(student.getName());
		}
		Long id = (long) 1001;
		StudentModel stu = studentRespository.findStudentById(id);
		System.out.println("Name:" + stu.getName() + "Telephone:" +stu.getTelephone()+ "Age:" + stu.getAge() + "Id:" + stu.getId());
	}
}
