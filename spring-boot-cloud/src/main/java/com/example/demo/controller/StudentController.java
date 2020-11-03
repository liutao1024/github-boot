package com.example.demo.controller;

import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.model.StudentModel;
import com.example.demo.respository.StudentRespository;

@Controller
public class StudentController {
	private static final Logger logger = Logger.getGlobal();
	@Autowired
	private StudentRespository studentRespository;

	
	/**
	 * @author LiuTao @date 2018年4月18日 上午10:22:03 
	 * @Title: student 
	 * @Description: TODO(Describe) 
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/student")
	public String student(Map<String, Object> model) {
		Long id = (long) 1001;
		StudentModel stu = studentRespository.findStudentById(id);
		List<StudentModel> list = studentRespository.findAll();
		for (StudentModel student : list) {
			System.out.println(student.getName());
		}
		model.put("student", stu);
		logger.info("Name:" + stu.getName() + "Telephone:" + stu.getTelephone()
				+ "Age:" + stu.getAge() + "Id:" + stu.getId());
		return "studentJSP";
	}
	
}
