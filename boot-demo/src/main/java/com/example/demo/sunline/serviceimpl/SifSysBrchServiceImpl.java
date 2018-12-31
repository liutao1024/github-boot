package com.example.demo.sunline.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.sunline.dao.SifSysBrchDao;
import com.example.demo.sunline.domain.SifSysBrch;
import com.example.demo.sunline.domain.SifSysBrchPk;
import com.example.demo.sunline.exception.SumpException;
import com.example.demo.sunline.service.SifSysBrchService;

@Service("SifSysBrchService")
public class SifSysBrchServiceImpl implements SifSysBrchService{
	
	@Autowired
	private SifSysBrchDao sifSysBrchDao;

//	@Override
//	public SifSysBrch expandEntity(SifSysBrch entity) {
//		SifSysBrchPk id = new SifSysBrchPk(entity.getRegisterCd(), entity.getBranchCd());
//		return sifSysBrchDao.findOne(id);
//	}
	@Override
	public boolean checkUnique(SifSysBrch entity) {
		SifSysBrchPk id = new SifSysBrchPk(entity.getRegisterCd(), entity.getBranchCd());
		return !sifSysBrchDao.exists(id);
	}
	@Override
	public SifSysBrch saveEntity(SifSysBrch entity) throws SumpException {
		if(!checkUnique(entity)){
			throw new SumpException("1001");
		}
		return sifSysBrchDao.save(entity);
	}
	@Override
	public List<SifSysBrch> saveEntities(List<SifSysBrch> entities) throws SumpException {
		for(SifSysBrch entity:entities){
			if(!checkUnique(entity)){
				throw new SumpException("1001");
			}
		}
		return sifSysBrchDao.save(entities);
	}
	@Override
	public void deleteEntity(SifSysBrch entity) {
		sifSysBrchDao.delete(entity);
	}
	@Override
	public void deleteEntities(List<SifSysBrch> entities) {
		sifSysBrchDao.delete(entities);
	}
	@Override
	public void deleteAllInBatch() {
		sifSysBrchDao.deleteAllInBatch();
	}
	@Override
	public Page<SifSysBrch> queryAll(Pageable pageable) {
		return sifSysBrchDao.findAll(pageable);
	}
	@Override
	public List<SifSysBrch> queryByTemplate(SifSysBrch tmp) {
		return sifSysBrchDao.queryByTemplate(tmp);
	}
	@Override
	public List<SifSysBrch> queryByTemplateWithSort(SifSysBrch tmp, Sort sort) {
		return sifSysBrchDao.queryByTemplate(tmp, sort);
	}
	@Override
	public Page<SifSysBrch> queryByTemplateWithPage(SifSysBrch tmp,
			Pageable pageable) {
		return sifSysBrchDao.queryByTemplate(tmp, pageable);
	}
	@Override
	public List<SifSysBrch> queryRootBrchs(String registerCd) {
		return sifSysBrchDao.queryParentBranchIsNull(registerCd);
	}
	@Override
	public List<SifSysBrch> queryChildBrchs(String registerCd,
			String parentBranchCd) {
		return parentBranchCd == null ? sifSysBrchDao.queryParentBranchIsNull(registerCd) : 
			sifSysBrchDao.queryChildBrchs(registerCd, parentBranchCd);
	}
	@Override
	public boolean isLeafBrch(String registerCd, String branchCd) {
		return sifSysBrchDao.countChildBrchs(registerCd, branchCd)== 0 ? true:false;
	}

}
