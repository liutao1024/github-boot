package com.example.demo.sunline.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.demo.sunline.domain.SifSysUserQry;
import com.example.demo.sunline.domain.SifSysUserQryPk;

public interface SifSysUserQryDao {

	public Page<SifSysUserQry> findAll(Pageable pageable);

	public <S extends SifSysUserQry> S save(S entity);

//	public SifSysUserQry findOne(SifSysUserQryPk id);

	public boolean exists(SifSysUserQryPk id);

	public long count();

	public void delete(SifSysUserQryPk id);

	public void delete(SifSysUserQry entity);

	public void delete(Iterable<? extends SifSysUserQry> entities);

	public void deleteAll();

	public List<SifSysUserQry> findAll();

	public List<SifSysUserQry> findAll(Sort sort);

	public List<SifSysUserQry> findAll(Iterable<SifSysUserQryPk> ids) ;

	public <S extends SifSysUserQry> List<S> save(Iterable<S> entities);

	public void flush();

	public <S extends SifSysUserQry> S saveAndFlush(S entity);

	public void deleteInBatch(Iterable<SifSysUserQry> entities) ;

	public void deleteAllInBatch();

	public SifSysUserQry getOne(SifSysUserQryPk id);
	
	/**
	 * 根据模版查询实体
	 * @param tmp 模版对象
	 * @return 查询到的实体对象集合
	 */
	List<SifSysUserQry> queryByTemplate(final SifSysUserQry tmp);
	
	/**
	 * 根据模版排序查询实体
	 * @param tmp 模版对象
	 * @param sort 排序模板
	 * @return 查询到的实体对象集合
	 */
	List<SifSysUserQry> queryByTemplate(final SifSysUserQry tmp, Sort sort);
	
	/**
	 * 根据模版分页排序查询实体
	 * @param tmp 模版对象
	 * @param pageable 分页排序模版
	 * @return Page对象
	 */
	Page<SifSysUserQry> queryByTemplate(final SifSysUserQry tmp,Pageable pageable);
	
	/**
	 * 根据注册机构号和操作员号查询
	 * @param registerCd 注册机构号
	 * @param userCd	操作员号
	 * @return 查询到的实体对象集合
	 */
	List<SifSysUserQry> queryQryUsers(String registerCd, String userCd);

}
