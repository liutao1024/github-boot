package com.example.demo.xtest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.StudentModel;
import com.example.demo.respository.StudentTest;

@RestController
public class StudentTestController {
	@Autowired
	private StudentTest student;
	@RequestMapping(value="/getall")
	public List<StudentModel> getAllStudent(){
		return student.findAll();
	}
	
	
	@RequestMapping(value="/addstudent", method = {RequestMethod.GET})
	public StudentModel addStudent(@RequestParam("id") String id, @RequestParam("name") String name, @RequestParam("age") String age, @RequestParam("tel") String tel){
		StudentModel stu = new StudentModel();
		System.out.println(id);
		Long sid = Long.parseLong(id);
		Long sage = Long.parseLong(age);
		stu.setId(sid);
		stu.setName(name);
		stu.setAge(sage);
		stu.setTelephone(tel);
		return student.save(stu);
	}
}
