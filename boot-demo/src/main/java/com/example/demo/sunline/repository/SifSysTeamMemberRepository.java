package com.example.demo.sunline.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.demo.sunline.domain.SifSysTeamMember;
import com.example.demo.sunline.domain.SifSysTeamMemberPk;

public interface SifSysTeamMemberRepository extends JpaRepository<SifSysTeamMember, SifSysTeamMemberPk>,JpaSpecificationExecutor<SifSysTeamMember> {
	
	/**
	 * 根据模版查询实体
	 * @param registerCd
	 * @param teamCd
	 * @return 查询到的实体对象集合
	 */
	List<SifSysTeamMember> findByRegisterCdAndTeamCd(String registerCd, String teamCd);
	
}
