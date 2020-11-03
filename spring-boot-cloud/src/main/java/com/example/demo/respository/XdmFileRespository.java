package com.example.demo.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.XdmFileModel;

public interface XdmFileRespository extends JpaRepository<XdmFileModel,Long>{

}
