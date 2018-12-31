package com.example.demo.sunline.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.demo.sunline.domain.SifSysTeam;
import com.example.demo.sunline.domain.SifSysTeamPk;

public interface SifSysTeamDao {

	public Page<SifSysTeam> findAll(Pageable pageable);

	public <S extends SifSysTeam> S save(S entity);

//	public SifSysTeam findOne(SifSysTeamPk id);

	public boolean exists(SifSysTeamPk id);

	public long count();

	public void delete(SifSysTeamPk id);

	public void delete(SifSysTeam entity);

	public void delete(Iterable<? extends SifSysTeam> entities);

	public void deleteAll();

	public List<SifSysTeam> findAll();

	public List<SifSysTeam> findAll(Sort sort);

	public List<SifSysTeam> findAll(Iterable<SifSysTeamPk> ids) ;

	public <S extends SifSysTeam> List<S> save(Iterable<S> entities);

	public void flush();

	public <S extends SifSysTeam> S saveAndFlush(S entity);

	public void deleteInBatch(Iterable<SifSysTeam> entities) ;

	public void deleteAllInBatch();

	public SifSysTeam getOne(SifSysTeamPk id);
	
	/**
	 * 根据模版查询实体
	 * @param tmp 模版对象
	 * @return 查询到的实体对象集合
	 */
	List<SifSysTeam> queryByTemplate(final SifSysTeam tmp);
	
	/**
	 * 根据模版排序查询实体
	 * @param tmp 模版对象
	 * @param sort 排序模版
	 * @return 查询到的实体对象集合
	 */
	List<SifSysTeam> queryByTemplate(final SifSysTeam tmp, Sort sort);
	
	/**
	 * 根据模板分页排序查询实体
	 * @param tmp 模版对象
	 * @param pageable 分页排序模版
	 * @return 查询到的实体对象集合
	 */
	Page<SifSysTeam> queryByTemplate(final SifSysTeam tmp,Pageable pageable);

}
