package com.example.demo.sunline.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.demo.sunline.domain.SifSysTeamMember;
import com.example.demo.sunline.exception.SumpException;

public interface SifSysTeamMemberService {
	
	/**
	 * 根据主键扩展实体对象
	 * @param entity 实体对象
	 * @return 查询到的实体对象
	 */
//	SifSysTeamMember expandEntity(SifSysTeamMember entity) ;
	
	/**
	 * 检查主键是否唯一
	 * @param entity 实体对象
	 * @return 是否唯一
	 */
	boolean checkUnique(SifSysTeamMember entity);
	
	/**
	 * 保存单条记录
	 * @param entity 实体对象
	 * @return 保存后实体对象
	 * @throws CommonException 
	 */
	SifSysTeamMember saveEntity(SifSysTeamMember entity) throws SumpException ;
	
	/**
	 * 保存多条记录
	 * @param entities 实体对象集合
	 * @return 保存后实体对象集合
	 * @throws CommonException 
	 */
	List<SifSysTeamMember> saveEntities(List<SifSysTeamMember> entities) throws SumpException ;
	
	/**
	 * 删除实体
	 * @param entity 实体对象
	 * @return 
	 */
	void deleteEntity(SifSysTeamMember entity);
	
	/**
	 * 删除多条实体
	 * @param entities 实体对象集合
	 * @return 
	 */
	void deleteEntities(List<SifSysTeamMember> entities);
	
	/**
	 * 批量删除所有实体记录
	 * @return 
	 */
	void deleteAllInBatch();
	
	/**
	 * 分页查询所有实体
	 * @param pageable 分页排序模版
	 * @return Page对象
	 */
	Page<SifSysTeamMember> queryAll(Pageable pageable);
	
	/**
	 * 根据模版查询实体
	 * @param tmp 模版对象
	 * @return 查询到的实体对象集合
	 */
	List<SifSysTeamMember> queryByTemplate(SifSysTeamMember tmp);
	
	/**
	 * 根据模版排序查询实体
	 * @param tmp 模版对象
	 * @param sort 排序模板
	 * @return 查询到的实体对象集合
	 */
	List<SifSysTeamMember> queryByTemplateWithSort(SifSysTeamMember tmp,Sort sort);
	
	/**
	 * 根据模版分页查询实体
	 * @param tmp 模版对象
	 * @param pageable 分页排序模版
	 * @return 查询到的实体对象集合
	 */
	Page<SifSysTeamMember> queryByTemplateWithPage(SifSysTeamMember tmp,Pageable pageable);
	
	/**
	 * 根据团队编号查所有团队成员
	 * @param registerCd
	 * @param teamCd
	 * @return 查询到的实体对象集合
	 */
//	List<SifSysUser> queryUsersByTeamCd(String registerCd, String teamCd) ;

}
