package com.example.demo.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.XdmPresentationModel;

public interface XdmPresentationRespository extends JpaRepository<XdmPresentationModel, Long> {

}
