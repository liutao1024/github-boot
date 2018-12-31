package com.example.demo.sunline.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;

import com.example.demo.sunline.domain.Role;
import com.example.demo.sunline.domain.SifSysRole;
import com.example.demo.sunline.domain.SifSysRolePk;

public interface SifSysRoleDao {
	
	/*
	 * 以下是重新定义JpaRepository的抽象方法
	 */
	public List<SifSysRole> findAll();

	
	public List<SifSysRole> findAll(Sort sort);

	
	public List<SifSysRole> findAll(Iterable<SifSysRolePk> ids);

	
	public <S extends SifSysRole> List<S> save(Iterable<S> entities);

	
	public void flush();

	
	public <S extends SifSysRole> S saveAndFlush(S entity);

	
	public void deleteInBatch(Iterable<SifSysRole> entities);

	
	public void deleteAllInBatch();

	
	public SifSysRole getOne(SifSysRolePk id);

	
	public Page<SifSysRole> findAll(Pageable pageable);

	
	public <S extends SifSysRole> S save(S entity);

	
//	public SifSysRole findOne(SifSysRolePk id);

	
	public boolean exists(SifSysRolePk id);

	
	public long count();

	
	public void delete(SifSysRolePk id);

	
	public void delete(SifSysRole entity);

	
	public void delete(Iterable<? extends SifSysRole> entities);

	
	public void deleteAll();

	
//	public SifSysRole findOne(Specification<SifSysRole> spec);

	
	public List<SifSysRole> findAll(Specification<SifSysRole> spec);

	
	public Page<SifSysRole> findAll(Specification<SifSysRole> spec, Pageable pageable);

	
	public List<SifSysRole> findAll(Specification<SifSysRole> spec, Sort sort);

	
	public long count(Specification<SifSysRole> spec);
	
	/*
	 * 自定义方法
	 */
	
	public Specification<SifSysRole> getSpecification(final Role tmp);
	
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
	public List<SifSysRole> queryEntitiesByTemplate(Role tmp, Sort sort);
		
	/**
	 * 根据模版分页查询实体
	 * @param tmp 模版对象
     * @param pageable 分页排序模版
     * @return 查询到的实体对象集合
	 */
	public Page<SifSysRole> queryEntitiesByTemplate(final Role tmp,Pageable pageable);
}
