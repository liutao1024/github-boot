package com.example.demo.sunline.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.demo.sunline.domain.SifSysBusiness;
import com.example.demo.sunline.domain.SifSysBusinessPk;

public interface SifSysBusinessRepository extends JpaRepository<SifSysBusiness, SifSysBusinessPk>,JpaSpecificationExecutor<SifSysBusiness> {
	
}
