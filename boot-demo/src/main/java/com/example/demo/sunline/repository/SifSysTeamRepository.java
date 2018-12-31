package com.example.demo.sunline.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.demo.sunline.domain.SifSysTeam;
import com.example.demo.sunline.domain.SifSysTeamPk;

public interface SifSysTeamRepository extends JpaRepository<SifSysTeam, SifSysTeamPk>,JpaSpecificationExecutor<SifSysTeam> {
	
}
