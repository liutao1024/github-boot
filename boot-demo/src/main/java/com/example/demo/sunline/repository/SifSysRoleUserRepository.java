package com.example.demo.sunline.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.sunline.domain.SifSysRoleUser;
import com.example.demo.sunline.domain.SifSysRoleUserPk;

public interface SifSysRoleUserRepository extends
		JpaRepository<SifSysRoleUser, SifSysRoleUserPk>,
		JpaSpecificationExecutor<SifSysRoleUser> { 

	/**
	 * 获取系统角色下的操作员列表
	 * @param registerCd
	 * @param authType: 1--操作权限  2--菜单权限  3--查询权限
	 * @param roleCd
	 * @return the list of userCd
	 */
	@Query(value = "select distinct(ru.userCd) from SifSysRoleUser ru where ru.registerCd = ?1 and ru.authType = ?2 and ru.roleCd = ?3")
	public List<String> getUserListByRegisterCdAndAuthTypeAndRoleCd(String registerCd, String authType, String roleCd);
	
	/**
	 * 根据柜员id获取所有角色列表
	 * @param roleCd
	 * @return the list of userCd
	 */
	@Query(value = "select distinct(ru.roleCd) from SifSysRoleUser ru where ru.userCd = ?1")
	public List<String> getRolesByUserid(String userid);
	
}
