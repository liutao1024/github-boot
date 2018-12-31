package com.example.demo.sunline.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.demo.sunline.domain.SifSysRole;
import com.example.demo.sunline.domain.SifSysRolePk;

public interface SifSysRoleRepository extends
		JpaRepository<SifSysRole, SifSysRolePk>, JpaSpecificationExecutor<SifSysRole> {
	
}
