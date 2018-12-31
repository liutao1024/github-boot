package com.example.demo.sunline.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.demo.sunline.domain.RoleAuth;
import com.example.demo.sunline.domain.SifSysRoleAuth;
import com.example.demo.sunline.domain.SifSysRoleAuthPk;

public interface SifSysRoleAuthService {
	/**
     * 
     * @param entity
     * @return 币种信息
     */
//	public SifSysRoleAuth expandEntity(SifSysRoleAuth entity);
	
	/**
	 * 检查主键是否唯一
	 * @param id 主键对象
	 * @return 是否唯一
	 */
	public boolean checkUnique(SifSysRoleAuthPk id);
	
	/**
	 * 保存数据实体数据
	 * @param entity
	 * @return 
	 */
	public SifSysRoleAuth saveEntity(SifSysRoleAuth entity) throws Throwable;
	
	/**
	 * 保存多条记录
	 * @param entities 实体对象集合
	 * @return 保存后实体对象集合
	 */
	public List<SifSysRoleAuth> saveEntities(List<SifSysRoleAuth> entities) throws Throwable ;
	
	/**
	 * 删除实体
	 * @param entity 实体对象
	 * @return 
	 */
	public void deleteEntity(SifSysRoleAuth entity);
	
	/**
	 * 删除多条实体
	 * @param entities 实体对象集合
	 * @return 
	 */
	public void deleteEntities(List<SifSysRoleAuth> entities);
	
	/**
	 * 批量删除全部记录
	 */
	public void deleteAllInBatch();
	
	/**
	 * 根据模版查询实体
	 * @param tmp 模版对象
	 * @return 查询到的实体对象集合
	 */
	public List<SifSysRoleAuth> queryEntitiesByTemplate(RoleAuth tmp);
	
	/**
	 * 根据模版查询实体并按照sort排序
	 * @param tmp 模版对象
	 * @param sort 排序模板
	 * @return 查询到的实体对象集合
	 */
	public List<SifSysRoleAuth> queryEntitiesByTemplateWithSort(RoleAuth tmp, Sort sort);
	
	/**
	 * 根据模版分页查询实体
	 * @param tmp 模版对象
	 * @param pageable 分页排序模版
	 * @return 查询到的实体对象集合
	 */
	public Page<SifSysRoleAuth> queryEntitiesByTemplateWithPage(RoleAuth tmp,Pageable pageable);
}
