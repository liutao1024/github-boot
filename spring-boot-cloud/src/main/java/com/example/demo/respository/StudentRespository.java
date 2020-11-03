package com.example.demo.respository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.*;

@Repository
public interface StudentRespository extends CrudRepository<StudentModel, Long> {
	
	StudentModel findStudentById(Long id);
	List<StudentModel> findAll();
//	int save();
//	@SuppressWarnings("unchecked")
//	Student save(Student student);
//	void delete(Long id);
	
}
