package com.example.demo.sunline.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.sunline.dao.SifSysBusinessDao;
import com.example.demo.sunline.domain.SifSysBusiness;
import com.example.demo.sunline.domain.SifSysBusinessPk;
import com.example.demo.sunline.exception.SumpException;
import com.example.demo.sunline.service.SifSysBusinessService;

@Service("SifSysBusinessService")
public class SifSysBusinessServiceImpl implements SifSysBusinessService{
	
	@Autowired
	private SifSysBusinessDao sifSysBusinessDao;

//	@Override
//	public SifSysBusiness expandEntity(SifSysBusiness entity) {
//		SifSysBusinessPk id = new SifSysBusinessPk(entity.getRegisterCd(), entity.getBusiCd());
//		return sifSysBusinessDao.findOne(id);
//	}
	@Override
	public boolean checkUnique(SifSysBusiness entity) {
		SifSysBusinessPk id = new SifSysBusinessPk(entity.getRegisterCd(), entity.getBusiCd());
		return !sifSysBusinessDao.exists(id);
	}
	@Override
	public SifSysBusiness saveEntity(SifSysBusiness entity) throws SumpException {
		if(!checkUnique(entity)){
			throw new SumpException("1001");
		}
		return sifSysBusinessDao.save(entity);
	}
	@Override
	public List<SifSysBusiness> saveEntities(List<SifSysBusiness> entities) throws SumpException {
		for(SifSysBusiness entity:entities){
			if(!checkUnique(entity)){
				throw new SumpException("1001");
			}
		}
		return sifSysBusinessDao.save(entities);
	}
	@Override
	public void deleteEntity(SifSysBusiness entity) {
		sifSysBusinessDao.delete(entity);
	}
	@Override
	public void deleteEntities(List<SifSysBusiness> entities) {
		sifSysBusinessDao.delete(entities);
	}
	@Override
	public void deleteAllInBatch() {
		sifSysBusinessDao.deleteAllInBatch();
	}
	@Override
	public Page<SifSysBusiness> queryAll(Pageable pageable) {
		return sifSysBusinessDao.findAll(pageable);
	}
	@Override
	public List<SifSysBusiness> queryByTemplate(SifSysBusiness tmp) {
		return sifSysBusinessDao.queryByTemplate(tmp);
	}
	@Override
	public List<SifSysBusiness> queryByTemplateWithSort(SifSysBusiness tmp,Sort sort) {
		return sifSysBusinessDao.queryByTemplate(tmp,sort);
	}
	@Override
	public Page<SifSysBusiness> queryByTemplateWithPage(SifSysBusiness tmp,
			Pageable pageable) {
		return sifSysBusinessDao.queryByTemplate(tmp, pageable);
	}

}
