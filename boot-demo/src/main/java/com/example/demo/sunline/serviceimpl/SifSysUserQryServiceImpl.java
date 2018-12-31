package com.example.demo.sunline.serviceimpl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.sunline.dao.SifSysUserQryDao;
import com.example.demo.sunline.domain.SifSysUserQry;
import com.example.demo.sunline.domain.SifSysUserQryPk;
import com.example.demo.sunline.exception.SumpException;
import com.example.demo.sunline.service.SifSysUserQryService;
import com.example.demo.sunline.service.SifSysUserService;

@Service("SifSysUserQryService")
public class SifSysUserQryServiceImpl implements SifSysUserQryService{
	
	@Autowired
	private SifSysUserQryDao sifSysUserQryDao;
	@Resource
	private SifSysUserService sifSysUserService;

//	@Override
//	public SifSysUserQry expandEntity(SifSysUserQry entity) {
//		SifSysUserQryPk id = new SifSysUserQryPk(entity.getRegisterCd(), entity.getUserCd(), entity.getQueryUserCd());
//		return sifSysUserQryDao.findOne(id);
//	}
	@Override
	public boolean checkUnique(SifSysUserQry entity) {
		SifSysUserQryPk id = new SifSysUserQryPk(entity.getRegisterCd(), entity.getUserCd(), entity.getQueryUserCd());
		return !sifSysUserQryDao.exists(id);
	}
	@Override
	public SifSysUserQry saveEntity(SifSysUserQry entity) throws SumpException {
		if(!checkUnique(entity)){
			throw new SumpException("1001");
		}
		return sifSysUserQryDao.save(entity);
	}
	@Override
	public List<SifSysUserQry> saveEntities(List<SifSysUserQry> entities) throws SumpException {
		for(SifSysUserQry entity:entities){
			if(!checkUnique(entity)){
				throw new SumpException("1001");
			}
		}
		return sifSysUserQryDao.save(entities);
	}
	@Override
	public void deleteEntity(SifSysUserQry entity) {
		sifSysUserQryDao.delete(entity);
	}
	@Override
	public void deleteEntities(List<SifSysUserQry> entities) {
		sifSysUserQryDao.delete(entities);
	}
	@Override
	public void deleteAllInBatch() {
		sifSysUserQryDao.deleteAllInBatch();
	}
	@Override
	public Page<SifSysUserQry> queryAll(Pageable pageable) {
		return sifSysUserQryDao.findAll(pageable);
	}
	@Override
	public List<SifSysUserQry> queryByTemplate(SifSysUserQry tmp) {
		return sifSysUserQryDao.queryByTemplate(tmp);
	}
	@Override
	public List<SifSysUserQry> queryByTemplateWithSort(SifSysUserQry tmp,
			Sort sort) {
		return sifSysUserQryDao.queryByTemplate(tmp, sort);
	}
	@Override
	public Page<SifSysUserQry> queryByTemplateWithPage(SifSysUserQry tmp,
			Pageable pageable) {
		return sifSysUserQryDao.queryByTemplate(tmp, pageable);
	}
//	@Override
//	public List<SifSysUser> queryQryUsers(String registerCd, String userCd){
//		List<SifSysUser> userList = new ArrayList<SifSysUser>();
//		List<SifSysUserQry> userQryList = sifSysUserQryDao.queryQryUsers(registerCd, userCd);
//		for(SifSysUserQry entity:userQryList){
//			SifSysUser tmp = new SifSysUser(registerCd, entity.getUserCd());
//			tmp = sifSysUserService.expandEntity(tmp);
//			if(tmp != null){
//				userList.add(tmp);
//			}
//		}
//		return userList;
//	}

}
