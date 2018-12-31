package com.example.demo.sunline.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;

import com.example.demo.sunline.domain.RoleAuth;
import com.example.demo.sunline.domain.SifSysRoleAuth;
import com.example.demo.sunline.domain.SifSysRoleAuthPk;

public interface SifSysRoleAuthDao {
	/*
	 * 以下是重新定义JpaRepository的抽象方法
	 */
	public List<SifSysRoleAuth> findAll();
	
	public List<SifSysRoleAuth> findAll(Sort sort);
	
	public List<SifSysRoleAuth> findAll(Iterable<SifSysRoleAuthPk> ids);
	
	public <S extends SifSysRoleAuth> List<S> save(Iterable<S> entities);
	
	public void flush();
	
	public <S extends SifSysRoleAuth> S saveAndFlush(S entity);
	
	public void deleteInBatch(Iterable<SifSysRoleAuth> entities);
	
	public void deleteAllInBatch();
	
	public SifSysRoleAuth getOne(SifSysRoleAuthPk id);
	
	public Page<SifSysRoleAuth> findAll(Pageable pageable);
	
	public <S extends SifSysRoleAuth> S save(S entity);
	
//	public SifSysRoleAuth findOne(SifSysRoleAuthPk id);
	
	public boolean exists(SifSysRoleAuthPk id);
	
	public long count();
	
	public void delete(SifSysRoleAuthPk id);
	
	public void delete(SifSysRoleAuth entity);
	
	public void delete(Iterable<? extends SifSysRoleAuth> entities);
	
	public void deleteAll();
	
//	public SifSysRoleAuth findOne(Specification<SifSysRoleAuth> spec);
	
	public List<SifSysRoleAuth> findAll(Specification<SifSysRoleAuth> spec);
	
	public Page<SifSysRoleAuth> findAll(Specification<SifSysRoleAuth> spec, Pageable pageable);
	
	public List<SifSysRoleAuth> findAll(Specification<SifSysRoleAuth> spec, Sort sort);
	
	public long count(Specification<SifSysRoleAuth> spec);
	
	/*
	 * 自定义方法
	 * 
	 */
	
	public Specification<SifSysRoleAuth> getSpecification(final RoleAuth tmp);
	
	/**
	 * 获取系统角色下的不同权限类型的权限列表
	 * @param registerCd
	 * @param authType: 1--操作权限  2--菜单权限
	 * @param roleCd
	 * @return the list of authCd
	 */
	public List<String> getAuthCdListByRegisterCdAndAuthTypeAndRoleCd(
			String registerCd, String authType, String roleCd);
	
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
	public List<SifSysRoleAuth> queryEntitiesByTemplate(RoleAuth tmp,Sort sort);
		
	/**
	 * 根据模版分页查询实体
	 * @param tmp 模版对象
     * @param pageable 分页排序模版
     * @return 查询到的实体对象集合
	 */
	public Page<SifSysRoleAuth> queryEntitiesByTemplate(final RoleAuth tmp,Pageable pageable);
}
