package com.example.demo.sunline.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.demo.sunline.domain.SifSysRoleUser;
import com.example.demo.sunline.domain.SifSysRoleUserPk;

public interface SifSysRoleUserService {
	/**
     * 
     * @param entity
     * @return 币种信息
     */
//	public SifSysRoleUser expandEntity(SifSysRoleUser entity);
	
	/**
	 * 检查主键是否唯一
	 * @param id 主键对象
	 * @return 是否唯一
	 */
	public boolean checkUnique(SifSysRoleUserPk id);
	
	/**
	 * 保存数据实体数据
	 * @param entity
	 * @return 
	 */
	public SifSysRoleUser saveEntity(SifSysRoleUser entity) throws Throwable;
	
	/**
	 * 保存多条记录
	 * @param entities 实体对象集合
	 * @return 保存后实体对象集合
	 */
	public List<SifSysRoleUser> saveEntities(List<SifSysRoleUser> entities) throws Throwable ;
	
	/**
	 * 删除实体
	 * @param entity 实体对象
	 * @return 
	 */
	public void deleteEntity(SifSysRoleUser entity);
	
	/**
	 * 删除多条实体
	 * @param entities 实体对象集合
	 * @return 
	 */
	public void deleteEntities(List<SifSysRoleUser> entities);
	
	/**
	 * 批量删除全部记录
	 */
	public void deleteAllInBatch();
	
	/**
	 * 根据模版查询实体
	 * @param tmp 模版对象
	 * @return 查询到的实体对象集合
	 */
	public List<SifSysRoleUser> queryEntitiesByTemplate(SifSysRoleUser tmp);
	
	/**
	 * 根据模版查询实体并按照sort排序
	 * @param tmp 模版对象
	 * @param sort 排序模板
	 * @return 查询到的实体对象集合
	 */
	public List<SifSysRoleUser> queryEntitiesByTemplateWithSort(SifSysRoleUser tmp, Sort sort);
	
	/**
	 * 根据模版分页查询实体
	 * @param tmp 模版对象
	 * @param pageable 分页排序模版
	 * @return 查询到的实体对象集合
	 */
	public Page<SifSysRoleUser> queryEntitiesByTemplateWithPage(SifSysRoleUser tmp,Pageable pageable);
	
	/**
	 * 获取系统角色下的操作员列表
	 * @param registerCd
	 * @param authType: 1--操作权限  2--菜单权限  3--查询权限
	 * @param roleCd
	 * @return the list of userCd
	 */
	public List<String> getUserListByRegisterCdAndAuthTypeAndRoleCd(String registerCd, String authType, String roleCd);
}
