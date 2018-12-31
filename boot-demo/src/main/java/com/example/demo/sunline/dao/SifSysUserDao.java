package com.example.demo.sunline.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.demo.sunline.domain.SifSysUser;
import com.example.demo.sunline.domain.SifSysUserPk;

public interface SifSysUserDao {

	public Page<SifSysUser> findAll(Pageable pageable);

	public <S extends SifSysUser> S save(S entity);

//	public SifSysUser findOne(SifSysUserPk id);

	public boolean exists(SifSysUserPk id);

	public long count();

	public void delete(SifSysUserPk id);

	public void delete(SifSysUser entity);

	public void delete(Iterable<? extends SifSysUser> entities);

	public void deleteAll();

	public List<SifSysUser> findAll();

	public List<SifSysUser> findAll(Sort sort);

	public List<SifSysUser> findAll(Iterable<SifSysUserPk> ids) ;

	public <S extends SifSysUser> List<S> save(Iterable<S> entities);

	public void flush();

	public <S extends SifSysUser> S saveAndFlush(S entity);

	public void deleteInBatch(Iterable<SifSysUser> entities) ;

	public void deleteAllInBatch();

	public SifSysUser getOne(SifSysUserPk id);
	
	/**
	 * 根据模版查询实体
	 * @param tmp 模版对象
	 * @return 查询到的实体对象集合
	 */
	List<SifSysUser> queryByTemplate(final SifSysUser tmp);
	
	/**
	 * 根据模版排序查询实体
	 * @param tmp 模版对象
	 * @param sort 排序模板 
	 * @return 查询到的实体对象集合
	 */
	List<SifSysUser> queryByTemplate(final SifSysUser tmp, Sort sort);
	
	/**
	 * 根据模板分页排序查询实体
	 * @param tmp 模版对象
	 * @param pageable 分页排序模版
	 * @return 查询到的实体对象集合
	 */
	Page<SifSysUser> queryByTemplate(final SifSysUser tmp,Pageable pageable);

}
