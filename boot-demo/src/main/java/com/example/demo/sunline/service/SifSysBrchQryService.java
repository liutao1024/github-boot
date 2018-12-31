package com.example.demo.sunline.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.demo.sunline.domain.SifSysBrchQry;
import com.example.demo.sunline.exception.SumpException;

public interface SifSysBrchQryService {
	
	/**
	 * 根据主键扩展实体对象
	 * @param entity 实体对象
	 * @return 查询到的实体对象
	 */
//	SifSysBrchQry expandEntity(SifSysBrchQry entity) ;
	
	/**
	 * 检查主键是否唯一
	 * @param entity 实体对象
	 * @return 是否唯一
	 */
	boolean checkUnique(SifSysBrchQry entity);
	
	/**
	 * 保存单条记录
	 * @param entity 实体对象
	 * @return 保存后实体对象
	 * @throws CommonException 
	 */
	SifSysBrchQry saveEntity(SifSysBrchQry entity) throws SumpException ;
	
	/**
	 * 保存多条记录
	 * @param entities 实体对象集合
	 * @return 保存后实体对象集合
	 * @throws CommonException
	 */
	List<SifSysBrchQry> saveEntities(List<SifSysBrchQry> entities) throws SumpException ;
	
	/**
	 * 删除实体
	 * @param entity 实体对象
	 * @return 
	 */
	void deleteEntity(SifSysBrchQry entity);
	
	/**
	 * 删除多条实体
	 * @param entities 实体对象集合
	 * @return 
	 */
	void deleteEntities(List<SifSysBrchQry> entities);
	
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
	Page<SifSysBrchQry> queryAll(Pageable pageable);
	
	/**
	 * 根据模版查询实体
	 * @param tmp 模版对象
	 * @return 查询到的实体对象集合
	 */
	List<SifSysBrchQry> queryByTemplate(SifSysBrchQry tmp);
	
	/**
	 * 根据模版排序查询实体
	 * @param tmp 模版对象
	 * @param sort 排序模板
	 * @return 查询到的实体对象集合
	 */
	List<SifSysBrchQry> queryByTemplateWithSort(SifSysBrchQry tmp,Sort sort);
	
	/**
	 * 根据模板分页排序查询实体
	 * @param tmp 模版对象
	 * @param pageable 分页排序模版
	 * @return page对象
	 */
	Page<SifSysBrchQry> queryByTemplateWithPage(SifSysBrchQry tmp,Pageable pageable);
	
	/**
	 * 查询机构查询权限
	 * @param registerCd 注册机构号
	 * @param branchCd	机构号
	 * @return 查询到的实体对象集合
	 */
//	List<SifSysBrch> queryQryBrchs(String registerCd, String branchCd) ;

}
