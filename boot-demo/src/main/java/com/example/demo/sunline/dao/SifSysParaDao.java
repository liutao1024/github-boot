package com.example.demo.sunline.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;

import com.example.demo.sunline.domain.SifSysPara;

public interface SifSysParaDao {
	/*
	 * 以下是重新定义JpaRepository的抽象方法
	 */
	public Page<SifSysPara> findAll(Pageable pageable);

	public <S extends SifSysPara> S save(S entity) ;

//	public SifSysPara findOne(String id) ;

	public boolean exists(String id) ;

	public long count() ;

	public void delete(String id) ;

	public void delete(SifSysPara entity) ;

	public void delete(Iterable<? extends SifSysPara> entities) ;

	public void deleteAll() ;

	public List<SifSysPara> findAll() ;

	public List<SifSysPara> findAll(Sort sort) ;

	public List<SifSysPara> findAll(Iterable<String> ids) ;

	public <S extends SifSysPara> List<S> save(Iterable<S> entities) ;

	public void flush() ;

	public <S extends SifSysPara> S saveAndFlush(S entity) ;
	
	public void deleteInBatch(Iterable<SifSysPara> entities) ;

	public void deleteAllInBatch() ;

	public SifSysPara getOne(String id) ;
	
	/*
	 * 自定义方法
	 */
	
	public Specification<SifSysPara> getSpecification(final SifSysPara tmp);
	
	public SifSysPara findByRegisterCd(String registerCd);
	
	/**
	 * 根据注册机构号，切换对应系统的日期到下一日期
	 * @param registerCd
	 * @param lastSysDt
	 * @param sysDt
	 * @return 影响的记录数
	 */
	public int switchSysDate(String registerCd, Date lastSysDt, Date sysDt);
	
	/**
	 * 根据模版查询实体
	 * @param tmp 模版对象
     * @return 查询到的实体对象集合
	 */
	public List<SifSysPara> queryEntitiesByTemplate(SifSysPara tmp);
	
	/**
	 * 根据模版查询实体并按照sort排序
	 * @param tmp 模版对象
	 * @param sort 排序模板
	 * @return 查询到的实体对象集合
	 */
	public List<SifSysPara> queryEntitiesByTemplate(SifSysPara tmp, Sort osrt);
		
	/**
	 * 根据模版分页查询实体
	 * @param tmp 模版对象
     * @param pageable 分页排序模版
     * @return 查询到的实体对象集合
	 */
	public Page<SifSysPara> queryEntitiesByTemplate(final SifSysPara tmp,Pageable pageable);
}
