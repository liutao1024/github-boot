package com.example.demo.sunline.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.demo.sunline.domain.SifSysUser;
import com.example.demo.sunline.domain.SifSysUserPk;

public interface SifSysUserRepository extends JpaRepository<SifSysUser, SifSysUserPk>,JpaSpecificationExecutor<SifSysUser> {
	//JpaRepository<SifSysUser, SifSysUserPk>,JpaSpecificationExecutor<SifSysUser>
}
