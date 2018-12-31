package com.example.demo.sunline.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.demo.sunline.domain.SifSysAuth;
import com.example.demo.sunline.domain.SifSysAuthPk;

public interface SifSysAuthService {
	/**
     * 
     * @param entity
     * @return 币种信息
     */
//	public SifSysAuth expandEntity(SifSysAuth entity);
	
	/**
	 * 检查主键是否唯一
	 * @param id 主键对象
	 * @return 是否唯一
	 */
	public boolean checkUnique(SifSysAuthPk id);
	/**
	 * 保存修改
	 * @param entity
	 * @return
	 */
	public SifSysAuth updateEntity(SifSysAuth entity) ;
	/**
	 * 保存数据实体数据
	 * @param entity
	 * @return 
	 */
	public SifSysAuth saveEntity(SifSysAuth entity) throws Throwable;
	
	/**
	 * 保存多条记录
	 * @param entities 实体对象集合
	 * @return 保存后实体对象集合
	 */
	public List<SifSysAuth> saveEntities(List<SifSysAuth> entities) throws Throwable ;
	
	/**
	 * 删除实体
	 * @param entity 实体对象
	 * @return 
	 */
	public void deleteEntity(SifSysAuth entity);
	
	/**
	 * 级联删除实体以及与系统角色的关联配置信息
	 * @param entity 实体对象
	 * @return 
	 */
	public void deleteEntityByCascade(SifSysAuth entity);
	
	/**
	 * 删除多条实体
	 * @param entities 实体对象集合
	 * @return 
	 */
	public void deleteEntities(List<SifSysAuth> entities);
	
	/**
	 * 删除多条实体以及与系统角色的关联配置信息
	 * @param entities 实体对象集合
	 * @return 
	 */
	public void deleteEntitiesByCascade(List<SifSysAuth> entities);
	
	/**
	 * 批量删除全部记录
	 */
	public void deleteAllInBatch();
	
	/**
	 * 批量删除全部记录以及与系统角色的关联配置信息
	 */
	public void deleteAllInBatchByCascade();
	
	/**
	 * 根据模版查询实体
	 * @param tmp 模版对象
	 * @return 查询到的实体对象集合
	 */
	
	public List<SifSysAuth> queryEntitiesByTemplate(SifSysAuth tmp);
	
	/**
	 * 根据模版查询实体并按照sort排序
	 * @param tmp 模版对象
	 * @param sort 排序模板
	 * @return 查询到的实体对象集合
	 */
	public List<SifSysAuth> queryEntitiesByTemplateWithSort(SifSysAuth tmp,Sort sort);
	
	/**
	 * 根据模版分页查询实体
	 * @param tmp 模版对象
	 * @param pageable 分页排序模版
	 * @return 查询到的实体对象集合
	 */
	public Page<SifSysAuth> queryEntitiesByTemplateWithPage(SifSysAuth tmp,Pageable pageable);
	
	/**
	 * 查询与当前权限关联的下级权限记录（往下查一级）
	 * @param entity
	 * @return 下级权限记录列表
	 */
	public List<SifSysAuth> queryLowerLevelAuthRecords(SifSysAuth entity);
	/**
	 * 
	 * @param roleAuth
	 * @return
	 */	
//	 public SifSysAuth findAuthByRoleAuth(SifSysRoleAuth roleAuth);
}
