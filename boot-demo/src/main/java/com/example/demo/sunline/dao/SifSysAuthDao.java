package com.example.demo.sunline.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;

import com.example.demo.sunline.domain.SifSysAuth;
import com.example.demo.sunline.domain.SifSysAuthPk;

public interface SifSysAuthDao {
	/*
	 * 以下是重新定义JpaRepository的抽象方法
	 */
    public List<SifSysAuth> findAll();
	
	public List<SifSysAuth> findAll(Sort sort);
	
	public List<SifSysAuth> findAll(Iterable<SifSysAuthPk> ids);
	
	public <S extends SifSysAuth> List<S> save(Iterable<S> entities);
	
	public void flush();
	
	public <S extends SifSysAuth> S saveAndFlush(S entity);
	
	public void deleteInBatch(Iterable<SifSysAuth> entities);
	
	public void deleteAllInBatch();
	
	public SifSysAuth getOne(SifSysAuthPk id);
	
	public Page<SifSysAuth> findAll(Pageable pageable);
	
	public <S extends SifSysAuth> S save(S entity);
	
//	public SifSysAuth findOne(SifSysAuthPk id);
	
	public boolean exists(SifSysAuthPk id);

	public long count();
	
	public void delete(SifSysAuthPk id);
	
	public void delete(SifSysAuth entity);
	
	public void delete(Iterable<? extends SifSysAuth> entities);
	
	public void deleteAll();
	
	public Optional<SifSysAuth> findOne(Specification<SifSysAuth> spec);
	
	public List<SifSysAuth> findAll(Specification<SifSysAuth> spec);
	
	public Page<SifSysAuth> findAll(Specification<SifSysAuth> spec,
			Pageable pageable);
	
	public List<SifSysAuth> findAll(Specification<SifSysAuth> spec, Sort sort);
	
	public long count(Specification<SifSysAuth> spec);
	
	/*
	 * 自定义方法
	 */
	
	public Specification<SifSysAuth> getSpecification(final SifSysAuth tmp);
	
	
	/**
	 * 根据模版查询实体，无排序
	 * @param tmp 模版对象
	 * @return 查询到的实体对象集合
	 */
	public List<SifSysAuth> queryEntitiesByTemplate(SifSysAuth tmp);
	
	/**
	 * 根据模版查询实体并按照sort排序
	 * @param tmp 模版对象
	 * @param sort 排序模板
	 * @return 查询到的实体对象集合
	 */
	public List<SifSysAuth> queryEntitiesByTemplate(SifSysAuth tmp,Sort sort);
		
	/**
	 * 根据模版分页查询实体
	 * @param tmp 模版对象
     * @param pageable 分页排序模版
     * @return 查询到的实体对象集合
	 */
	public Page<SifSysAuth> queryEntitiesByTemplate(final SifSysAuth tmp,Pageable pageable);
}
