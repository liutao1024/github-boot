package com.example.demo.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.XdmBaseSetModel;

public interface XdmBaseSetRespository  extends JpaRepository<XdmBaseSetModel, Long>{

}
