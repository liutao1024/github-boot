package com.example.demo.sunline.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.sunline.dao.SifSysRoleUserDao;
import com.example.demo.sunline.domain.SifSysRoleUser;
import com.example.demo.sunline.domain.SifSysRoleUserPk;
import com.example.demo.sunline.exception.SumpException;
import com.example.demo.sunline.service.SifSysRoleUserService;

@Service("SifSysRoleUserService")
public class SifSysRoleUserServiceImpl implements SifSysRoleUserService {
    @Autowired
    SifSysRoleUserDao sifSysRoleUserDao;
	
//	@Override
//	public SifSysRoleUser expandEntity(SifSysRoleUser entity) {
//		SifSysRoleUserPk id = new SifSysRoleUserPk(entity.getRegisterCd(), entity.getAuthType(),entity.getRoleCd(),entity.getUserCd());
//		return sifSysRoleUserDao.findOne(id);
//	}

	@Override
	public boolean checkUnique(SifSysRoleUserPk id) {
		return !sifSysRoleUserDao.exists(id);
	}

	@Override
	public SifSysRoleUser saveEntity(SifSysRoleUser entity) throws Throwable {
		SifSysRoleUserPk id = new SifSysRoleUserPk(entity.getRegisterCd(), entity.getAuthType(),entity.getRoleCd(),entity.getUserCd());
		if(!checkUnique(id)){
			throw new SumpException("1001");
		}
		return sifSysRoleUserDao.save(entity);
	}

	@Override
	public List<SifSysRoleUser> saveEntities(List<SifSysRoleUser> entities)
			throws Throwable {
		for(SifSysRoleUser entity:entities){
			SifSysRoleUserPk id = new SifSysRoleUserPk(entity.getRegisterCd(), entity.getAuthType(),entity.getRoleCd(),entity.getUserCd());
			if(!checkUnique(id)){
				throw new SumpException("1001");
			}
		}
		return sifSysRoleUserDao.save(entities);
	}

	@Override
	public void deleteEntity(SifSysRoleUser entity) {
		sifSysRoleUserDao.delete(entity);
	}

	@Override
	public void deleteEntities(List<SifSysRoleUser> entities) {
		sifSysRoleUserDao.delete(entities);
	}

	@Override
	public void deleteAllInBatch() {
		sifSysRoleUserDao.deleteAllInBatch();
	}

	@Override
	public List<SifSysRoleUser> queryEntitiesByTemplate(SifSysRoleUser tmp) {
		return sifSysRoleUserDao.queryEntitiesByTemplate(tmp);
	}
	
	@Override
	public List<SifSysRoleUser> queryEntitiesByTemplateWithSort(SifSysRoleUser tmp, Sort sort){
		return sifSysRoleUserDao.queryEntitiesByTemplate(tmp,sort);
	}

	@Override
	public Page<SifSysRoleUser> queryEntitiesByTemplateWithPage(
			SifSysRoleUser tmp, Pageable pageable) {
		return sifSysRoleUserDao.queryEntitiesByTemplate(tmp, pageable);
	}

	@Override
	public List<String> getUserListByRegisterCdAndAuthTypeAndRoleCd(
			String registerCd, String authType, String roleCd) {
		return sifSysRoleUserDao.getUserListByRegisterCdAndAuthTypeAndRoleCd(registerCd, authType, roleCd);
	}

}
