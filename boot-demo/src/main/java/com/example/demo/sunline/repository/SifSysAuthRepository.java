package com.example.demo.sunline.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.demo.sunline.domain.SifSysAuth;
import com.example.demo.sunline.domain.SifSysAuthPk;

public interface SifSysAuthRepository extends JpaRepository<SifSysAuth, SifSysAuthPk>, JpaSpecificationExecutor<SifSysAuth> {

}
