package com.example.demo.sunline.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.sunline.dao.SifSysRoleDao;
import com.example.demo.sunline.domain.Role;
import com.example.demo.sunline.domain.RoleAuth;
import com.example.demo.sunline.domain.SifSysRole;
import com.example.demo.sunline.domain.SifSysRoleAuth;
import com.example.demo.sunline.domain.SifSysRolePk;
import com.example.demo.sunline.domain.SifSysRoleUser;
import com.example.demo.sunline.exception.SumpException;
import com.example.demo.sunline.service.SifSysRoleAuthService;
import com.example.demo.sunline.service.SifSysRoleService;
import com.example.demo.sunline.service.SifSysRoleUserService;
import com.example.demo.sunline.service.SifSysUserService;

@Service("SifSysRoleService")
public class SifSysRoleServiceImpl implements SifSysRoleService {
	@Autowired
	SifSysRoleDao sifSysRoleDao;
	@Autowired
	SifSysRoleUserService  sifSysRoleUserService;
	@Autowired
	SifSysUserService  sifSysUserService;
	@Autowired
	SifSysRoleAuthService  sifSysRoleAuthService;

//	@Override
//	public SifSysRole expandEntity(SifSysRole entity) {
//		SifSysRolePk id = new SifSysRolePk(entity.getRegisterCd(), entity.getAuthType(), entity.getRoleCd());
//		return sifSysRoleDao.findOne(id);
//	}

	@Override
	public boolean checkUnique(SifSysRolePk id) {
		return !sifSysRoleDao.exists(id);
	}

	@Override
	public SifSysRole saveEntity(SifSysRole entity) throws Throwable {
		SifSysRolePk id = new SifSysRolePk(entity.getRegisterCd(), entity.getAuthType(), entity.getRoleCd());
		if(!checkUnique(id)){
			throw new SumpException("1001");
		}
		return sifSysRoleDao.save(entity);
	}
	@Override
	public SifSysRole updateEntity(SifSysRole entity) {
		return sifSysRoleDao.save(entity);
	}

	@Override
	public List<SifSysRole> saveEntities(List<SifSysRole> entities)
			throws Throwable {
		for(SifSysRole entity:entities){
			SifSysRolePk id = new SifSysRolePk(entity.getRegisterCd(), entity.getAuthType(), entity.getRoleCd());
			if(!checkUnique(id)){
				throw new SumpException("1001");
			}
		}
		return sifSysRoleDao.save(entities);
	}

	@Override
	public void deleteEntity(SifSysRole entity) {
		sifSysRoleDao.delete(entity);
	}

	@Override
	public void deleteEntities(List<SifSysRole> entities) {
		sifSysRoleDao.delete(entities);
	}

	@Override
	public void deleteAllInBatch() {
		sifSysRoleDao.deleteAllInBatch();
	}

	@Override
	public List<SifSysRole> queryEntitiesByTemplate(Role tmp) {
		return sifSysRoleDao.queryEntitiesByTemplate(tmp);
	}
	
	@Override
	public List<SifSysRole> queryEntitiesByTemplateWithSort(Role tmp, Sort sort){
		return sifSysRoleDao.queryEntitiesByTemplate(tmp, sort);
	}

	@Override
	public Page<SifSysRole> queryEntitiesByTemplateWithPage(Role tmp,
			Pageable pageable) {
		return sifSysRoleDao.queryEntitiesByTemplate(tmp, pageable);
	}

//	@Override
//	public List<SifSysUser> querySysUsersByPrimaryKey(SifSysRolePk id) {
//		//1.检查系统角色的Id是否有效，即是否存在记录
//		if(!sifSysRoleDao.exists(id)){
//			//不存在，则无需继续查询
//			return Collections.emptyList();
//		}
//		
//		//2.查询“系统角色操作员配置”表，获取操作员编号列表
//		SifSysRoleUser tmp = new SifSysRoleUser();
//		tmp.setRegisterCd(id.getRegisterCd());
//		tmp.setAuthType(id.getAuthType());
//		tmp.setRoleCd(id.getRoleCd());
//		
//		List<Order> orderList = new ArrayList<Order>();
//		orderList.add(new Order(Direction.ASC,"userCd"));
//		
//		
//		List<SifSysRoleUser> roleUsers = sifSysRoleUserService.queryEntitiesByTemplateWithSort(tmp,new Sort(orderList));
//		
//		if(roleUsers.isEmpty()){
//			return Collections.emptyList();
//		}
//		
//		//3.查询操作员明细信息列表
//		List<SifSysUser> users = new ArrayList<SifSysUser>();
//		
//		for(SifSysRoleUser entity : roleUsers){
//			SifSysUser exp = new SifSysUser();
//			exp.setRegisterCd(entity.getRegisterCd());
//			exp.setUserCd(entity.getUserCd());
//			
//			exp = sifSysUserService.expandEntity(exp);
//			
//			if(exp != null){
//				users.add(sifSysUserService.expandEntity(exp));
//			}
//		}
//		
//		if(users.isEmpty()){
//			return Collections.emptyList();
//		}
//		
//		return users;
//		
//	}

	@Override
	public void deleteEntityByCascade(SifSysRole entity) {
		//1.查询并删除该角色记录下关联的权限配置信息
		RoleAuth roleAuth = new RoleAuth();
		roleAuth.setRegisterCd(entity.getRegisterCd());
		roleAuth.setAuthType(entity.getAuthType());
		roleAuth.setRoleCd(entity.getRoleCd());
		List<SifSysRoleAuth> roleAuthList= sifSysRoleAuthService.queryEntitiesByTemplate(roleAuth);
		
		if(!roleAuthList.isEmpty()){
			sifSysRoleAuthService.deleteEntities(roleAuthList);
		}
		
		//2.查询并删除该角色记录下关联的操作员配置信息
		SifSysRoleUser roleUser = new SifSysRoleUser();
		roleUser.setRegisterCd(entity.getRegisterCd());
		roleUser.setAuthType(entity.getAuthType());
		roleUser.setRoleCd(entity.getRoleCd());
		
		List<SifSysRoleUser> roleUserList = sifSysRoleUserService.queryEntitiesByTemplate(roleUser);
		
		if(!roleUserList.isEmpty()){
			sifSysRoleUserService.deleteEntities(roleUserList);
		}
		
		//3.删除系统角色记录
		sifSysRoleDao.delete(entity);
	}

	@Override
	public void deleteEntitiesByCascade(List<SifSysRole> entities) {
		for(SifSysRole entity : entities){
			deleteEntityByCascade(entity);
		}
	}

	@Override
	public void deleteAllInBatchByCascade() {
		List<SifSysRole> entities = sifSysRoleDao.findAll();
		
		if(!entities.isEmpty()){
			deleteEntitiesByCascade(entities);
		}
		
	}

}
