package com.example.demo.sunline.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.demo.sunline.domain.SifSysBrch;
import com.example.demo.sunline.exception.SumpException;

public interface SifSysBrchService {
	
	/**
	 * 根据主键扩展实体对象
	 * @param entity 实体对象
	 * @return 查询到的实体对象
	 */
//	SifSysBrch expandEntity(SifSysBrch entity) ;
	
	/**
	 * 检查主键是否唯一
	 * @param entity 实体对象
	 * @return 是否唯一
	 */
	boolean checkUnique(SifSysBrch entity);
	
	/**
	 * 保存单条记录
	 * @param entity 实体对象
	 * @return 保存后实体对象
	 * @throws CommonException 
	 */
	SifSysBrch saveEntity(SifSysBrch entity) throws SumpException ;
	
	/**
	 * 保存多条记录
	 * @param entities 实体对象集合
	 * @return 保存后实体对象集合
	 */
	List<SifSysBrch> saveEntities(List<SifSysBrch> entities) throws SumpException ;
	
	/**
	 * 删除实体
	 * @param entity 实体对象
	 * @return 
	 */
	void deleteEntity(SifSysBrch entity);
	
	/**
	 * 删除多条实体
	 * @param entities 实体对象集合
	 * @return 
	 */
	void deleteEntities(List<SifSysBrch> entities);
	
	/**
	 * 批量删除所有实体记录
	 * @return 
	 */
	void deleteAllInBatch();
	
	/**
	 * 分页查询所有实体
	 * @param pageable 分页排序模版
	 * @return Page对象
	 */
	Page<SifSysBrch> queryAll(Pageable pageable);
	
	/**
	 * 根据模版查询实体
	 * @param tmp 模版对象
	 * @return 查询到的实体对象集合
	 */
	List<SifSysBrch> queryByTemplate(SifSysBrch tmp);
	
	/**
	 * 根据模版排序查询实体
	 * @param tmp 模版对象
	 * @param sort 排序模版
	 * @return Page对象
	 */
	List<SifSysBrch> queryByTemplateWithSort(SifSysBrch tmp,Sort sort);
	
	/**
	 * 根据模版分页排序查询实体
	 * @param tmp 模版对象
	 * @param pageable 分页排序模版
	 * @return Page对象
	 */
	Page<SifSysBrch> queryByTemplateWithPage(SifSysBrch tmp,Pageable pageable);
	
	/**
	 * 查询所有顶级机构
	 * @Param registerCd 注册机构号
	 * @return 查询到的实体对象集合
	 */
	List<SifSysBrch> queryRootBrchs(String registerCd);
	
	/**
	 * 根据父级机构编号查找所有子级机构，若父级机构号为空，则查询所有顶级机构
	 * @Param registerCd 注册机构号
	 * @Param parentBranchCd 父级机构号 
	 * @return 查询到的实体对象集合
	 */
	List<SifSysBrch> queryChildBrchs(String registerCd, String parentBranchCd);
	
	/**
	 * 判断当前机构是否叶子节点机构
	 * @param registerCd
	 * @param branchCd
	 * @return true-是 false-否
	 */
	boolean isLeafBrch(String registerCd, String branchCd);
	
}
