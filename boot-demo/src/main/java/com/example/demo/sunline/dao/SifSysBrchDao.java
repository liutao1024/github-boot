package com.example.demo.sunline.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.demo.sunline.domain.SifSysBrch;
import com.example.demo.sunline.domain.SifSysBrchPk;

public interface SifSysBrchDao {

	public Page<SifSysBrch> findAll(Pageable pageable);

	public <S extends SifSysBrch> S save(S entity);

//	public SifSysBrch findOne(SifSysBrchPk id);

	public boolean exists(SifSysBrchPk id);

	public long count();

	public void delete(SifSysBrchPk id);

	public void delete(SifSysBrch entity);

	public void delete(Iterable<? extends SifSysBrch> entities);

	public void deleteAll();

	public List<SifSysBrch> findAll();

	public List<SifSysBrch> findAll(Sort sort);

	public List<SifSysBrch> findAll(Iterable<SifSysBrchPk> ids) ;

	public <S extends SifSysBrch> List<S> save(Iterable<S> entities);

	public void flush();

	public <S extends SifSysBrch> S saveAndFlush(S entity);

	public void deleteInBatch(Iterable<SifSysBrch> entities) ;

	public void deleteAllInBatch();

	public SifSysBrch getOne(SifSysBrchPk id);
	
	/**
	 * 根据模版查询实体
	 * @param tmp 模版对象
	 * @return 查询到的实体对象集合
	 */
	List<SifSysBrch> queryByTemplate(final SifSysBrch tmp);
	
	/**
	 * 根据模版排序查询实体
	 * @param tmp 模版对象
	 * @param sort 排序模板
	 * @return 查询到的实体对象集合
	 */
	List<SifSysBrch> queryByTemplate(final SifSysBrch tmp,Sort sort);
	
	/**
	 * 根据模版分页排序查询实体
	 * @param tmp 模版对象
	 * @param pageable 分页排序模版
	 * @return 查询到的实体对象集合
	 */
	Page<SifSysBrch> queryByTemplate(final SifSysBrch tmp,Pageable pageable);
	
	/**
	 * 查询父级机构号为空的机构
	 * @param registerCd
	 * @return 查询到的实体对象集合
	 */
	List<SifSysBrch> queryParentBranchIsNull(String registerCd);
	
	/**
	 * 根据父级机构号查询子级机构
	 * @param registerCd
	 * @param parentBranchCd
	 * @return 查询到的实体对象集合
	 */
	List<SifSysBrch> queryChildBrchs(String registerCd, String parentBranchCd);
	
	/**
	 * 统计当前机构下子级机构个数
	 * @param registerCd
	 * @param branchCd
	 * @return 子级机构数量
	 */
	int countChildBrchs(String registerCd, String branchCd);

}
