package com.example.demo.sunline.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.demo.sunline.domain.SifSysUserQry;
import com.example.demo.sunline.domain.SifSysUserQryPk;

public interface SifSysUserQryRepository extends JpaRepository<SifSysUserQry, SifSysUserQryPk>,JpaSpecificationExecutor<SifSysUserQry> {
	
	/**
	 * 根据注册机构号和操作员号查询
	 * @param registerCd 注册机构号
	 * @param userCd	操作员号
	 * @return 查询到的实体对象集合
	 */
	List<SifSysUserQry> findByRegisterCdAndUserCd(String registerCd, String userCd);
}
