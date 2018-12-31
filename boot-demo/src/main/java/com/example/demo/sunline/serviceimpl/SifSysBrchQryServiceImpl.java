package com.example.demo.sunline.serviceimpl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.sunline.dao.SifSysBrchQryDao;
import com.example.demo.sunline.domain.SifSysBrchQry;
import com.example.demo.sunline.domain.SifSysBrchQryPk;
import com.example.demo.sunline.exception.SumpException;
import com.example.demo.sunline.service.SifSysBrchQryService;
import com.example.demo.sunline.service.SifSysBrchService;

@Service("SifSysBrchQryService")
public class SifSysBrchQryServiceImpl implements SifSysBrchQryService{
	
	@Autowired
	private SifSysBrchQryDao sifSysBrchQryDao;
	@Resource
	private SifSysBrchService sifSysBrchService;

//	@Override
//	public SifSysBrchQry expandEntity(SifSysBrchQry entity){
//		SifSysBrchQryPk id = new SifSysBrchQryPk(entity.getRegisterCd(), entity.getBranchCd(), entity.getQueryBranchCd());
//		return sifSysBrchQryDao.findOne(id);
//	}
	@Override
	public boolean checkUnique(SifSysBrchQry entity) {
		SifSysBrchQryPk id = new SifSysBrchQryPk(entity.getRegisterCd(), entity.getBranchCd(), entity.getQueryBranchCd());
		return !sifSysBrchQryDao.exists(id);
	}
	@Override
	public SifSysBrchQry saveEntity(SifSysBrchQry entity) throws SumpException {
		if(!checkUnique(entity)){
			throw new SumpException("1001");
		}
		return sifSysBrchQryDao.save(entity);
	}
	@Override
	public List<SifSysBrchQry> saveEntities(List<SifSysBrchQry> entities) throws SumpException {
		for(SifSysBrchQry entity:entities){
			if(!checkUnique(entity)){
				throw new SumpException("1001");
			}
		}
		return sifSysBrchQryDao.save(entities);
	}
	@Override
	public void deleteEntity(SifSysBrchQry entity) {
		sifSysBrchQryDao.delete(entity);
	}
	@Override
	public void deleteEntities(List<SifSysBrchQry> entities) {
		sifSysBrchQryDao.delete(entities);
	}
	@Override
	public void deleteAllInBatch() {
		sifSysBrchQryDao.deleteAllInBatch();
	}
	@Override
	public Page<SifSysBrchQry> queryAll(Pageable pageable) {
		return sifSysBrchQryDao.findAll(pageable);
	}
	@Override
	public List<SifSysBrchQry> queryByTemplate(SifSysBrchQry tmp) {
		return sifSysBrchQryDao.queryByTemplate(tmp);
	}
	@Override
	public List<SifSysBrchQry> queryByTemplateWithSort(SifSysBrchQry tmp,
			Sort sort) {
		return sifSysBrchQryDao.queryByTemplate(tmp, sort);
	}
	@Override
	public Page<SifSysBrchQry> queryByTemplateWithPage(SifSysBrchQry tmp,
			Pageable pageable) {
		return sifSysBrchQryDao.queryByTemplate(tmp, pageable);
	}
//	@Override
//	public List<SifSysBrch> queryQryBrchs(String registerCd, String branchCd) {
//		List<SifSysBrch> brchList = new ArrayList<SifSysBrch>();
//		List<SifSysBrchQry> brchQryList = sifSysBrchQryDao.queryQryBrchs(registerCd, branchCd);
//		for(SifSysBrchQry entity:brchQryList){
//			SifSysBrch tmp = new SifSysBrch(registerCd, entity.getBranchCd());
//			tmp = sifSysBrchService.expandEntity(tmp);
//			if(tmp != null){
//				brchList.add(tmp);
//			}
//		}
//		return brchList;
//	}

}
