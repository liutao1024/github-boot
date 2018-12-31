package com.example.demo.sunline.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.demo.sunline.domain.SifSysBrchQry;
import com.example.demo.sunline.domain.SifSysBrchQryPk;

public interface SifSysBrchQryDao {

	public Page<SifSysBrchQry> findAll(Pageable pageable);

	public <S extends SifSysBrchQry> S save(S entity);

//	public SifSysBrchQry findOne(SifSysBrchQryPk id);

	public boolean exists(SifSysBrchQryPk id);

	public long count();

	public void delete(SifSysBrchQryPk id);

	public void delete(SifSysBrchQry entity);

	public void delete(Iterable<? extends SifSysBrchQry> entities);

	public void deleteAll();

	public List<SifSysBrchQry> findAll();

	public List<SifSysBrchQry> findAll(Sort sort);

	public List<SifSysBrchQry> findAll(Iterable<SifSysBrchQryPk> ids) ;

	public <S extends SifSysBrchQry> List<S> save(Iterable<S> entities);

	public void flush();

	public <S extends SifSysBrchQry> S saveAndFlush(S entity);

	public void deleteInBatch(Iterable<SifSysBrchQry> entities) ;

	public void deleteAllInBatch();

	public SifSysBrchQry getOne(SifSysBrchQryPk id);
	
	/**
	 * 根据模版查询实体
	 * @param tmp 模版对象
	 * @return 查询到的实体对象集合
	 */
	List<SifSysBrchQry> queryByTemplate(final SifSysBrchQry tmp);
	
	/**
	 * 根据模版排序查询实体
	 * @param tmp 模版对象
	 * @param sort 排序模版
	 * @return 查询到的实体对象集合
	 */
	List<SifSysBrchQry> queryByTemplate(final SifSysBrchQry tmp, Sort sort);
	
	/**
	 * 根据模版分页排序查询实体
	 * @param tmp 模版对象
	 * @param pageable 分页排序模版
	 * @return Page对象
	 */
	Page<SifSysBrchQry> queryByTemplate(final SifSysBrchQry tmp,Pageable pageable);
	
	/**
	 * 根据注册机构号和机构号查询
	 * @param registerCd 注册机构号
	 * @param branchCd	机构号
	 * @return 查询到的实体对象集合
	 */
	List<SifSysBrchQry> queryQryBrchs(String registerCd, String branchCd);

}
