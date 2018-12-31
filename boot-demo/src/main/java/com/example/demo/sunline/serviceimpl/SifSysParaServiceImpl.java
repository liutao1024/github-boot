package com.example.demo.sunline.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.sunline.dao.SifSysParaDao;
import com.example.demo.sunline.domain.SifSysPara;
import com.example.demo.sunline.exception.SumpException;
import com.example.demo.sunline.service.SifSysParaService;

@Service("SifSysParaService")
public class SifSysParaServiceImpl implements SifSysParaService {
	
	@Autowired
	SifSysParaDao sifSysParaDao;

//	@Override
//	public SifSysPara expandEntity(SifSysPara entity) {
//		String id = entity.getRegisterCd();
//		return sifSysParaDao.findOne(id);
//	}

	@Override
	public boolean checkUnique(String registerCd) {
		return !sifSysParaDao.exists(registerCd);
	}

	@Override
	public SifSysPara saveEntity(SifSysPara entity) throws Throwable {
		String id = entity.getRegisterCd();
		if(!checkUnique(id)){
			throw new SumpException("1001");
		}
		return sifSysParaDao.save(entity);
	}

	@Override
	public List<SifSysPara> saveEntities(List<SifSysPara> entities)
			throws Throwable {
		for(SifSysPara entity:entities){
			String id = entity.getRegisterCd();
			if(!checkUnique(id)){
				throw new SumpException("1001");
			}
		}
		return sifSysParaDao.save(entities);
	}

	@Override
	public void deleteEntity(SifSysPara entity) {
		sifSysParaDao.delete(entity);
	}

	@Override
	public void deleteEntities(List<SifSysPara> entities) {
		sifSysParaDao.delete(entities);
	}

	@Override
	public void deleteAllInBatch() {
		sifSysParaDao.deleteAllInBatch();
	}

	@Override
	public List<SifSysPara> queryEntitiesByTemplate(SifSysPara tmp) {
		return sifSysParaDao.queryEntitiesByTemplate(tmp);
	}
	
	@Override
	public List<SifSysPara> queryEntitiesByTemplateWithSort(SifSysPara tmp, Sort sort) {
		return sifSysParaDao.queryEntitiesByTemplate(tmp, sort);
	}

	@Override
	public Page<SifSysPara> queryEntitiesByTemplateWithPage(SifSysPara tmp,
			Pageable pageable) {
		return sifSysParaDao.queryEntitiesByTemplate(tmp, pageable);
	}

//	@Override
//	public Date getLastSysDate(String registerCd) {
//		SifSysPara entity = sifSysParaDao.findOne(registerCd);
//		if(entity == null){
//			return null;
//		}
//		
//		return entity.getLastSysDt();
//	}

//	@Override
//	public Date getCurrentSysDate(String registerCd) {
//		SifSysPara entity = sifSysParaDao.findOne(registerCd);
//		if(entity == null){
//			return null;
//		}
//		
//		return entity.getSysDt();
//	}

//	@Override
//	public Date getNextSysDate(String registerCd) {
//		SifSysPara entity = sifSysParaDao.findOne(registerCd);
//		if(entity == null){
//			return null;
//		}
//		
//		if(entity.getSysDt() == null){
//			return null;
//		}
//		
//		//通过日历对象实现增加一天
//		Calendar cal = Calendar.getInstance();
//		cal.setTime(entity.getSysDt());
//		cal.add(Calendar.DATE, 1);  //增加一天
//		
//		return cal.getTime();
//		
//	}
	
//	@Override
//	public Boolean switchSysDateToNextDay(String registerCd) {
//		//查看该registerCd是否存在“全局控制”信息
//		if(sifSysParaDao.exists(registerCd)){
//			try {
//				sifSysParaDao.switchSysDate(registerCd,getCurrentSysDate(registerCd),getNextSysDate(registerCd));
//			} catch (Exception e) {
//				return false;
//			}
//		}
//		
//		return true;
//	}

//	@Override
//	public Boolean switchAllSysDateToNextDay() {
//		for(SifSysPara entity:sifSysParaDao.findAll()){
//			if(!switchSysDateToNextDay(entity.getRegisterCd())){
//				return false;
//			}
//		}
//		
//		return true;
//	}


}
