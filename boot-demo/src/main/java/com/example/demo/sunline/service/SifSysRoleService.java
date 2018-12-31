package com.example.demo.sunline.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.demo.sunline.domain.Role;
import com.example.demo.sunline.domain.SifSysRole;
import com.example.demo.sunline.domain.SifSysRolePk;

public interface SifSysRoleService {
	/**
     * 
     * @param entity
     * @return 币种信息
     */
//	public SifSysRole expandEntity(SifSysRole entity);
	
	/**
	 * 检查主键是否唯一
	 * @param id 主键对象
	 * @return 是否唯一
	 */
	public boolean checkUnique(SifSysRolePk id);
	
	/**
	 * 保存数据实体数据
	 * @param entity
	 * @return 
	 */
	public SifSysRole saveEntity(SifSysRole entity) throws Throwable;
	/**
	 * 保存数据实体数据
	 * @param entity
	 * @return 
	 */
	public SifSysRole updateEntity(SifSysRole entity);
	/**
	 * 保存多条记录
	 * @param entities 实体对象集合
	 * @return 保存后实体对象集合
	 */
	public List<SifSysRole> saveEntities(List<SifSysRole> entities) throws Throwable ;
	
	/**
	 * 删除实体
	 * @param entity 实体对象
	 * @return 
	 */
	public void deleteEntity(SifSysRole entity);
	
	/**
	 * 级联删除实体以及与权限、操作员的关联配置信息
	 * @param entity 实体对象
	 * @return 
	 */
	public void deleteEntityByCascade(SifSysRole entity);
	
	
	/**
	 * 删除多条实体
	 * @param entities 实体对象集合
	 * @return 
	 */
	public void deleteEntities(List<SifSysRole> entities);
	
	/**
	 * 级联删除多条实体以及与权限、操作员的关联配置信息
	 * @param entities 实体对象集合
	 * @return 
	 */
	public void deleteEntitiesByCascade(List<SifSysRole> entities);
	
	/**
	 * 批量删除全部记录
	 */
	public void deleteAllInBatch();
	
	/**
	 * 批量删除全部记录以及与权限、操作员的关联配置信息
	 */
	public void deleteAllInBatchByCascade();
	
	/**
	 * 根据模版查询实体
	 * @param tmp 模版对象
	 * @return 查询到的实体对象集合
	 */
	public List<SifSysRole> queryEntitiesByTemplate(Role tmp);
	
	/**
	 * 根据模版查询实体并按照sort排序
	 * @param tmp 模版对象
	 * @param sort 排序模板
	 * @return 查询到的实体对象集合
	 */
	public List<SifSysRole> queryEntitiesByTemplateWithSort(Role tmp, Sort sort);
	
	/**
	 * 根据模版分页查询实体
	 * @param tmp 模版对象
	 * @param pageable 分页排序模版
	 * @return 查询到的实体对象集合
	 */
	public Page<SifSysRole> queryEntitiesByTemplateWithPage(Role tmp,Pageable pageable);
	
	/**
	 * 获取系统角色下的操作员列表
	 * @Param id  系统角色表主键
	 * @return 操作员列表
	 */
//	public List<SifSysUser> querySysUsersByPrimaryKey(SifSysRolePk id);
}
