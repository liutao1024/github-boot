package com.example.demo.sunline.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.demo.sunline.domain.SifSysUserQry;
import com.example.demo.sunline.exception.SumpException;

public interface SifSysUserQryService {
	
	/**
	 * 根据主键扩展实体对象
	 * @param entity 实体对象
	 * @return 查询到的实体对象
	 */
//	SifSysUserQry expandEntity(SifSysUserQry entity) ;
	
	/**
	 * 检查主键是否唯一
	 * @param entity 实体对象
	 * @return 是否唯一
	 */
	boolean checkUnique(SifSysUserQry entity);
	
	/**
	 * 保存单条记录
	 * @param entity 实体对象
	 * @return 保存后实体对象
	 * @throws CommonException 
	 */
	SifSysUserQry saveEntity(SifSysUserQry entity) throws SumpException ;
	
	/**
	 * 保存多条记录
	 * @param entities 实体对象集合
	 * @return 保存后实体对象集合
	 */
	List<SifSysUserQry> saveEntities(List<SifSysUserQry> entities) throws SumpException ;
	
	/**
	 * 删除实体
	 * @param entity 实体对象
	 * @return 
	 */
	void deleteEntity(SifSysUserQry entity);
	
	/**
	 * 删除多条实体
	 * @param entities 实体对象集合
	 * @return 
	 */
	void deleteEntities(List<SifSysUserQry> entities);
	
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
	Page<SifSysUserQry> queryAll(Pageable pageable);
	
	/**
	 * 根据模版查询实体
	 * @param tmp 模版对象
	 * @return 查询到的实体对象集合
	 */
	List<SifSysUserQry> queryByTemplate(SifSysUserQry tmp);
	
	/**
	 * 根据模版排序查询实体
	 * @param tmp 模版对象
	 * @param sort 排序模板
	 * @return 查询到的实体对象集合
	 */
	List<SifSysUserQry> queryByTemplateWithSort(SifSysUserQry tmp, Sort sort);
	
	/**
	 * 根据模版分页排序查询实体
	 * @param tmp 模版对象
	 * @param pageable 分页排序模版
	 * @return Page对象
	 */
	Page<SifSysUserQry> queryByTemplateWithPage(SifSysUserQry tmp,Pageable pageable);
	
	/**
	 * 查询操作员查询权限
	 * @param registerCd 注册机构号
	 * @param userCd	操作员号
	 * @return 查询到的实体对象集合
	 */
//	List<SifSysUser> queryQryUsers(String registerCd, String userCd) ;

}
