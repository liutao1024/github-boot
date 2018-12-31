package com.example.demo.sunline.serviceimpl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;

import com.example.demo.sunline.dao.SifSysAuthDao;
import com.example.demo.sunline.domain.RoleAuth;
import com.example.demo.sunline.domain.SifSysAuth;
import com.example.demo.sunline.domain.SifSysAuthPk;
import com.example.demo.sunline.domain.SifSysRoleAuth;
import com.example.demo.sunline.exception.SumpException;
import com.example.demo.sunline.service.SifSysAuthService;
import com.example.demo.sunline.service.SifSysRoleAuthService;

@Service("SifSysAuthService")
public class SifSysAuthServiceImpl implements SifSysAuthService {
    @Autowired
    SifSysAuthDao sifSysAuthDao;
    @Autowired
	SifSysRoleAuthService  sifSysRoleAuthService;
	
//	@Override
//	public SifSysAuth expandEntity(SifSysAuth entity) {
//		SifSysAuthPk id = new SifSysAuthPk(entity.getRegisterCd(), entity.getAuthType(),entity.getAuthCd());
//		return sifSysAuthDao.findOne(id);
//	}

	@Override
	public boolean checkUnique(SifSysAuthPk id) {
		return !sifSysAuthDao.exists(id);
	}

	@Override
	public SifSysAuth saveEntity(SifSysAuth entity) throws Throwable {
		SifSysAuthPk id = new SifSysAuthPk(entity.getRegisterCd(), entity.getAuthType(),entity.getAuthCd());
		if(!checkUnique(id)){
			throw new SumpException("1001");
		}
		return sifSysAuthDao.save(entity);
	}
	@Override
	public SifSysAuth updateEntity(SifSysAuth entity)  {
		return sifSysAuthDao.save(entity);
	}

	@Override
	public List<SifSysAuth> saveEntities(List<SifSysAuth> entities)
			throws Throwable {
		for(SifSysAuth entity:entities){
			SifSysAuthPk id = new SifSysAuthPk(entity.getRegisterCd(), entity.getAuthType(),entity.getAuthCd());
			if(!checkUnique(id)){
				throw new SumpException("1001");
			}
		}
		return sifSysAuthDao.save(entities);
	}

	@Override
	@CachePut(value="defaultCache", key="#entity.getAuthCd()")
	public void deleteEntity(SifSysAuth entity) {
        sifSysAuthDao.delete(entity);
	}
	
	@Override
	public void deleteEntityByCascade(SifSysAuth entity) {
		//1.查询并删除该权限记录下与系统角色的关联权限配置信息
		RoleAuth roleAuth = new RoleAuth();
		roleAuth.setRegisterCd(entity.getRegisterCd());
		roleAuth.setAuthType(entity.getAuthType());
		roleAuth.setAuthCd(entity.getAuthCd());
		List<SifSysRoleAuth> roleAuthList= sifSysRoleAuthService.queryEntitiesByTemplate(roleAuth);
		
		if(!roleAuthList.isEmpty()){
			sifSysRoleAuthService.deleteEntities(roleAuthList);
		}
		
		//2.删除该权限记录
		sifSysAuthDao.delete(entity);
	}

	@Override
	public void deleteEntities(List<SifSysAuth> entities) {
		sifSysAuthDao.delete(entities);
	}

	@Override
	public void deleteEntitiesByCascade(List<SifSysAuth> entities) {
		for(SifSysAuth entity : entities){
			deleteEntityByCascade(entity);
		}
	}
	
	@Override
	public void deleteAllInBatch() {
		sifSysAuthDao.deleteAllInBatch();
	}
	
	@Override
	public void deleteAllInBatchByCascade() {
        List<SifSysAuth> entities = sifSysAuthDao.findAll();
		
		if(!entities.isEmpty()){
			deleteEntitiesByCascade(entities);
		}
	}

	@Override
	public List<SifSysAuth> queryEntitiesByTemplate(SifSysAuth tmp) {
		return sifSysAuthDao.queryEntitiesByTemplate(tmp);
	}
	
	@Override
	@Cacheable(value="menuCache", condition="#tmp!=null",key="#tmp.toString()")
	public List<SifSysAuth> queryEntitiesByTemplateWithSort(SifSysAuth tmp,Sort sort) {
		return sifSysAuthDao.queryEntitiesByTemplate(tmp,sort);
	}

	@Override
	public Page<SifSysAuth> queryEntitiesByTemplateWithPage(SifSysAuth tmp,
			Pageable pageable) {
		return sifSysAuthDao.queryEntitiesByTemplate(tmp, pageable);
	}

	@Override
	public List<SifSysAuth> queryLowerLevelAuthRecords(SifSysAuth entity) {
		//1.根据主键检查该权限记录是否存在
		SifSysAuthPk id = new SifSysAuthPk(entity.getRegisterCd(), entity.getAuthType(), entity.getAuthCd());
		
		if(!sifSysAuthDao.exists(id)){
			//不存在，返回空列表
			return Collections.emptyList();
		}
		
		//2.查询下级关联权限记录
		SifSysAuth tmp = new SifSysAuth();
		tmp.setRegisterCd(entity.getRegisterCd());
		tmp.setAuthType(entity.getAuthType());
		tmp.setParentAuthCd(entity.getAuthCd());
		
		List<Order> orderList = new ArrayList<Order>();
		Order order1 = new Order(Direction.ASC,"sortno");
		orderList.add(order1);
		Order order2 = new Order(Direction.ASC,"authCd");
		orderList.add(order2);
		
		@SuppressWarnings("deprecation")//20180501
		List<SifSysAuth> resultList = sifSysAuthDao.queryEntitiesByTemplate(tmp,new Sort(orderList));
		
		if(resultList.isEmpty()){
			return Collections.emptyList();
		}
		
		return resultList;
	}
//	@Override
//	  public SifSysAuth findAuthByRoleAuth(SifSysRoleAuth roleAuth){
//		  SifSysAuth auth =new SifSysAuth(roleAuth.getRegisterCd(),roleAuth.getAuthType(),roleAuth.getAuthCd());	  
//		  auth=expandEntity(auth);	  
//		  return auth;	  
//	  }
}
