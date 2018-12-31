package com.example.demo.sunline.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.sunline.domain.SifSysBrch;
import com.example.demo.sunline.domain.SifSysBrchPk;

public interface SifSysBrchRepository extends JpaRepository<SifSysBrch, SifSysBrchPk>,JpaSpecificationExecutor<SifSysBrch> {
	
	/**
	 * 查询父级机构号为空的机构
	 * @param registerCd
	 * @return 查询到的实体对象集合
	 */
	@Query(value="select s from SifSysBrch s where s.registerCd = ?1 and parentBranchCd is null")
	List<SifSysBrch> findByParentBranchIsNull(String registerCd);
	
	/**
	 * 根据父级机构号查询子级机构
	 * @param registerCd
	 * @param parentBranchCd
	 * @return 查询到的实体对象集合
	 */
	List<SifSysBrch> findByRegisterCdAndParentBranchCd(String registerCd, String parentBranchCd);
	
	/**
	 * 统计当前机构子级机构数量
	 * @param registerCd
	 * @param branchCd
	 * @return 查询到的记录条数
	 */
	int countByRegisterCdAndParentBranchCd(String registerCd, String parentBranchCd);
	
}
