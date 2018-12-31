package com.example.demo.sunline.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.sunline.domain.SifSysPara;

public interface SifSysParaRepository extends JpaRepository<SifSysPara, String>,JpaSpecificationExecutor<SifSysPara> {
	
	/**
	 * 根据registerCd获取该注册号的全局控制信息
	 * @param registerCd
	 * @return 全局控制信息
	 */
	public SifSysPara findByRegisterCd(String registerCd);
	
	/**
	 * 根据注册机构号，切换对应系统的日期到下一日期
	 * @param registerCd
	 */
	@Modifying
	@Query(value = "update SifSysPara para set para.lastSysDt = :lastSysDt,para.sysDt = :sysDt where para.registerCd = :registerCd")
	public int switchSysDate(@Param("registerCd")String registerCd, @Param("lastSysDt")Date lastSysDt, @Param("sysDt")Date sysDt);
	
	
}
