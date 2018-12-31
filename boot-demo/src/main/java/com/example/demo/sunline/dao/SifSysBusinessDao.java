package com.example.demo.sunline.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.demo.sunline.domain.SifSysBusiness;
import com.example.demo.sunline.domain.SifSysBusinessPk;

public interface SifSysBusinessDao {

	public Page<SifSysBusiness> findAll(Pageable pageable);

	public <S extends SifSysBusiness> S save(S entity) ;

//	public SifSysBusiness findOne(SifSysBusinessPk id) ;

	public boolean exists(SifSysBusinessPk id) ;

	public long count() ;

	public void delete(SifSysBusinessPk id) ;

	public void delete(SifSysBusiness entity) ;

	public void delete(Iterable<? extends SifSysBusiness> entities) ;

	public void deleteAll() ;

	public List<SifSysBusiness> findAll() ;

	public List<SifSysBusiness> findAll(Sort sort) ;

	public List<SifSysBusiness> findAll(Iterable<SifSysBusinessPk> ids) ;

	public <S extends SifSysBusiness> List<S> save(Iterable<S> entities) ;

	public void flush() ;

	public <S extends SifSysBusiness> S saveAndFlush(S entity) ;
	
	public void deleteInBatch(Iterable<SifSysBusiness> entities) ;

	public void deleteAllInBatch() ;

	public SifSysBusiness getOne(SifSysBusinessPk id) ;
	
	/**
	 * 根据模版查询实体
	 * @param tmp 模版对象
	 * @return 查询到的实体对象集合
	 */
	List<SifSysBusiness> queryByTemplate(final SifSysBusiness tmp);
	
	/**
	 * 根据模版排序查询实体
	 * @param tmp 模版对象
	 * @param sort 排序模版
	 * @return 查询到的实体对象集合
	 */
	List<SifSysBusiness> queryByTemplate(final SifSysBusiness tmp, Sort sort);
	
	/**
	 * 根据模版分页排序查询实体
	 * @param tmp 模版对象
	 * @param pageable 分页排序模版
	 * @return 查询到的实体对象集合
	 */
	Page<SifSysBusiness> queryByTemplate(final SifSysBusiness tmp,Pageable pageable);
	
}
