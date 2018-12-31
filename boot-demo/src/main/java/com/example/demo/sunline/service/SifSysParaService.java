package com.example.demo.sunline.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.demo.sunline.domain.SifSysPara;

public interface SifSysParaService {
	/**
     * 
     * @param entity
     * @return 币种信息
     */
//	public SifSysPara expandEntity(SifSysPara entity);
	
	/**
	 * 检查主键是否唯一
	 * @param registerCd
	 * @return 是否唯一
	 */
	public boolean checkUnique(String registerCd);
	
	/**
	 * 保存数据实体数据
	 * @param entity
	 * @return 
	 */
	public SifSysPara saveEntity(SifSysPara entity) throws Throwable;
	
	/**
	 * 保存多条记录
	 * @param entities 实体对象集合
	 * @return 保存后实体对象集合
	 */
	public List<SifSysPara> saveEntities(List<SifSysPara> entities) throws Throwable ;
	
	/**
	 * 删除实体
	 * @param entity 实体对象
	 * @return 
	 */
	public void deleteEntity(SifSysPara entity);
	
	/**
	 * 删除多条实体
	 * @param entities 实体对象集合
	 * @return 
	 */
	public void deleteEntities(List<SifSysPara> entities);
	
	/**
	 * 批量删除全部记录
	 */
	public void deleteAllInBatch();
	
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
	public List<SifSysPara> queryEntitiesByTemplateWithSort(SifSysPara tmp, Sort sort);
	
	/**
	 * 根据模版分页查询实体
	 * @param tmp 模版对象
	 * @param pageable 分页排序模版
	 * @return 查询到的实体对象集合
	 */
	public Page<SifSysPara> queryEntitiesByTemplateWithPage(SifSysPara tmp,Pageable pageable);
	
	/**
	 * 根据注册机构号获取对应的系统上一日期
	 * @param registerCd 
	 * @param 对应的系统上一日期
	 */
//	public Date getLastSysDate(String registerCd);
	
	/**
	 * 根据注册机构号获取对应的系统当前日期
	 * @param registerCd 
	 * @param 对应的系统当前日期
	 */
//	public Date getCurrentSysDate(String registerCd);
	
	
	/**
	 * 根据注册机构号获取对应的系统下一日期
	 * @param registerCd 
	 * @param 对应的系统下一日期
	 */
//	public Date getNextSysDate(String registerCd);
	
	/**
	 * 换日：切换所有系统的日期到下一日期
	 * 
	 * @return true/false
	 */
//	public Boolean switchAllSysDateToNextDay();
	
	/**
	 * 换日：根据registerCd切换对应系统的当前日期到下一日期
	 * @param registerCd
	 * @return true/false
	 */
//	public Boolean switchSysDateToNextDay(String registerCd);
}
