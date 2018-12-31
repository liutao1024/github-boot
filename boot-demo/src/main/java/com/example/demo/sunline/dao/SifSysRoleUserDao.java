package com.example.demo.sunline.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;

import com.example.demo.sunline.domain.SifSysRoleUser;
import com.example.demo.sunline.domain.SifSysRoleUserPk;

public interface SifSysRoleUserDao {
	/*
	 * 以下是重新定义JpaRepository的抽象方法
	 */
	public List<SifSysRoleUser> findAll();
	
	public List<SifSysRoleUser> findAll(Sort sort);
	
	public List<SifSysRoleUser> findAll(Iterable<SifSysRoleUserPk> ids);
	
	public <S extends SifSysRoleUser> List<S> save(Iterable<S> entities);
	
	public void flush();
	
	public <S extends SifSysRoleUser> S saveAndFlush(S entity);
	
	public void deleteInBatch(Iterable<SifSysRoleUser> entities);
	
	public void deleteAllInBatch();
	
	public SifSysRoleUser getOne(SifSysRoleUserPk id);
	
	public Page<SifSysRoleUser> findAll(Pageable pageable);
	
	public <S extends SifSysRoleUser> S save(S entity);
	
//	public SifSysRoleUser findOne(SifSysRoleUserPk id);
	
	public boolean exists(SifSysRoleUserPk id);
	
	public long count();
	
	public void delete(SifSysRoleUserPk id);
	
	public void delete(SifSysRoleUser entity);
	
	public void delete(Iterable<? extends SifSysRoleUser> entities);
	
	public void deleteAll();
	
//	public SifSysRoleUser findOne(Specification<SifSysRoleUser> spec);
	
	public List<SifSysRoleUser> findAll(Specification<SifSysRoleUser> spec);
	
	public Page<SifSysRoleUser> findAll(Specification<SifSysRoleUser> spec,
			Pageable pageable);
	
	public List<SifSysRoleUser> findAll(Specification<SifSysRoleUser> spec,
			Sort sort);
	
	public long count(Specification<SifSysRoleUser> spec);
	
	
	/*
	 * 自定义方法
	 */
	
	public Specification<SifSysRoleUser> getSpecification(final SifSysRoleUser tmp);
	
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
	public List<SifSysRoleUser> queryEntitiesByTemplate(SifSysRoleUser tmp, Sort sort);
		
	/**
	 * 根据模版分页查询实体
	 * @param tmp 模版对象
     * @param pageable 分页排序模版
     * @return 查询到的实体对象集合
	 */
	public Page<SifSysRoleUser> queryEntitiesByTemplate(final SifSysRoleUser tmp,Pageable pageable);
	/**
	 * 获取系统角色下的操作员列表
	 * @param registerCd
	 * @param authType: 1--操作权限  2--菜单权限  3--查询权限
	 * @param roleCd
	 * @return the list of userCd
	 */
	public List<String> getUserListByRegisterCdAndAuthTypeAndRoleCd(
			String registerCd, String authType, String roleCd);
}
