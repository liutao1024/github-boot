package com.example.demo.sunline.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.sunline.dao.SifSysUserDao;
import com.example.demo.sunline.domain.SifSysUser;
import com.example.demo.sunline.domain.SifSysUserPk;
import com.example.demo.sunline.exception.SumpException;
import com.example.demo.sunline.service.SifSysUserService;

@Service("SifSysUserService")
public class SifSysUserServiceImpl implements SifSysUserService{
	
	@Autowired
	private SifSysUserDao sifSysUserDao;

//	@Override
//	public SifSysUser expandEntity(SifSysUser entity) {
//		SifSysUserPk id = new SifSysUserPk(entity.getRegisterCd(), entity.getUserCd());
//		return sifSysUserDao.findOne(id);
//	}
	@Override
	public boolean checkUnique(SifSysUser entity) {
		SifSysUserPk id = new SifSysUserPk(entity.getRegisterCd(), entity.getUserCd());
		return !sifSysUserDao.exists(id);
	}
	@Override
	public SifSysUser saveEntity(SifSysUser entity) throws SumpException {
		if(!checkUnique(entity)){
			throw new SumpException("1001");
		}
		return sifSysUserDao.save(entity);
	}
	@Override
	public List<SifSysUser> saveEntities(List<SifSysUser> entities) throws SumpException {
		for(SifSysUser entity:entities){
			if(!checkUnique(entity)){
				throw new SumpException("1001");
			}
		}
		return sifSysUserDao.save(entities);
	}
	@Override
	public void deleteEntity(SifSysUser entity) {
		sifSysUserDao.delete(entity);
	}
	@Override
	public void deleteEntities(List<SifSysUser> entities) {
		sifSysUserDao.delete(entities);
	}
	@Override
	public void deleteAllInBatch() {
		sifSysUserDao.deleteAllInBatch();
	}
	@Override
	public Page<SifSysUser> queryAll(Pageable pageable) {
		return sifSysUserDao.findAll(pageable);
	}
	@Override
	public List<SifSysUser> queryByTemplate(SifSysUser tmp) {
		return sifSysUserDao.queryByTemplate(tmp);
	}
	@Override
	public List<SifSysUser> queryByTemplateWithSort(SifSysUser tmp, Sort sort) {
		return sifSysUserDao.queryByTemplate(tmp, sort);
	}
	@Override
	public Page<SifSysUser> queryByTemplateWithPage(SifSysUser tmp,
			Pageable pageable) {
		return sifSysUserDao.queryByTemplate(tmp, pageable);
	}

}
