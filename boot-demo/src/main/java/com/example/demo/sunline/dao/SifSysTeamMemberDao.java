package com.example.demo.sunline.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.demo.sunline.domain.SifSysTeamMember;
import com.example.demo.sunline.domain.SifSysTeamMemberPk;

public interface SifSysTeamMemberDao {

	public Page<SifSysTeamMember> findAll(Pageable pageable);

	public <S extends SifSysTeamMember> S save(S entity);

//	public SifSysTeamMember findOne(SifSysTeamMemberPk id);

	public boolean exists(SifSysTeamMemberPk id);

	public long count();

	public void delete(SifSysTeamMemberPk id);

	public void delete(SifSysTeamMember entity);

	public void delete(Iterable<? extends SifSysTeamMember> entities);

	public void deleteAll();

	public List<SifSysTeamMember> findAll();

	public List<SifSysTeamMember> findAll(Sort sort);

	public List<SifSysTeamMember> findAll(Iterable<SifSysTeamMemberPk> ids) ;

	public <S extends SifSysTeamMember> List<S> save(Iterable<S> entities);

	public void flush();

	public <S extends SifSysTeamMember> S saveAndFlush(S entity);

	public void deleteInBatch(Iterable<SifSysTeamMember> entities) ;

	public void deleteAllInBatch();

	public SifSysTeamMember getOne(SifSysTeamMemberPk id);
	
	/**
	 * 根据模版查询实体
	 * @param tmp 模版对象
	 * @return 查询到的实体对象集合
	 */
	List<SifSysTeamMember> queryByTemplate(final SifSysTeamMember tmp);
	
	/**
	 * 根据模版排序查询实体
	 * @param tmp 模版对象
	 * @param sort 排序模板
	 * @return 查询到的实体对象集合
	 */
	List<SifSysTeamMember> queryByTemplate(final SifSysTeamMember tmp, Sort sort);
	
	/**
	 * 根据模板分页排序查询实体
	 * @param tmp 模版对象
	 * @param pageable 分页排序模版
	 * @return 查询到的实体对象集合
	 */
	Page<SifSysTeamMember> queryByTemplate(final SifSysTeamMember tmp,Pageable pageable);
	
	/**
	 * 根据模版查询实体
	 * @param registerCd
	 * @param teamCd
	 * @return 查询到的实体对象集合
	 */
	List<SifSysTeamMember> findByRegisterCdAndTeamCd(String registerCd, String teamCd);

}
