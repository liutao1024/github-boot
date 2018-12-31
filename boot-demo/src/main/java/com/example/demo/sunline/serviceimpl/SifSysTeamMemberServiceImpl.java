package com.example.demo.sunline.serviceimpl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.sunline.dao.SifSysTeamMemberDao;
import com.example.demo.sunline.domain.SifSysTeamMember;
import com.example.demo.sunline.domain.SifSysTeamMemberPk;
import com.example.demo.sunline.exception.SumpException;
import com.example.demo.sunline.service.SifSysTeamMemberService;
import com.example.demo.sunline.service.SifSysUserService;

@Service("SifSysTeamMemberService")
public class SifSysTeamMemberServiceImpl implements SifSysTeamMemberService{
	
	@Autowired
	private SifSysTeamMemberDao sifSysTeamMemberDao;
	@Resource
	private SifSysUserService sifSysUserService;

//	@Override
//	public SifSysTeamMember expandEntity(SifSysTeamMember entity) {
//		SifSysTeamMemberPk id = new SifSysTeamMemberPk(entity.getRegisterCd(), entity.getTeamCd(), entity.getUserCd());
//		return sifSysTeamMemberDao.findOne(id);
//	}
	@Override
	public boolean checkUnique(SifSysTeamMember entity) {
		SifSysTeamMemberPk id = new SifSysTeamMemberPk(entity.getRegisterCd(), entity.getTeamCd(), entity.getUserCd());
		return !sifSysTeamMemberDao.exists(id);
	}
	@Override
	public SifSysTeamMember saveEntity(SifSysTeamMember entity) throws SumpException {
		if(!checkUnique(entity)){
			throw new SumpException("1001");
		}
		return sifSysTeamMemberDao.save(entity);
	}
	@Override
	public List<SifSysTeamMember> saveEntities(List<SifSysTeamMember> entities) throws SumpException {
		for(SifSysTeamMember entity:entities){
			if(!checkUnique(entity)){
				throw new SumpException("1001");
			}
		}
		return sifSysTeamMemberDao.save(entities);
	}
	@Override
	public void deleteEntity(SifSysTeamMember entity) {
		sifSysTeamMemberDao.delete(entity);
	}
	@Override
	public void deleteEntities(List<SifSysTeamMember> entities) {
		sifSysTeamMemberDao.delete(entities);
	}
	@Override
	public void deleteAllInBatch() {
		sifSysTeamMemberDao.deleteAllInBatch();
	}
	@Override
	public Page<SifSysTeamMember> queryAll(Pageable pageable) {
		return sifSysTeamMemberDao.findAll(pageable);
	}
	@Override
	public List<SifSysTeamMember> queryByTemplate(SifSysTeamMember tmp) {
		return sifSysTeamMemberDao.queryByTemplate(tmp);
	}
	@Override
	public List<SifSysTeamMember> queryByTemplateWithSort(SifSysTeamMember tmp,
			Sort sort) {
		return sifSysTeamMemberDao.queryByTemplate(tmp, sort);
	}
	@Override
	public Page<SifSysTeamMember> queryByTemplateWithPage(SifSysTeamMember tmp,
			Pageable pageable) {
		return sifSysTeamMemberDao.queryByTemplate(tmp, pageable);
	}
//	@Override
//	public List<SifSysUser> queryUsersByTeamCd(String registerCd, String teamCd) {
//		List<SifSysUser> userList = new ArrayList<SifSysUser>();
//		List<SifSysTeamMember> teamMemeberList = sifSysTeamMemberDao.findByRegisterCdAndTeamCd(registerCd, teamCd);
//		for(SifSysTeamMember entity:teamMemeberList){
//			SifSysUser tmp = new SifSysUser(registerCd, entity.getUserCd());
//			tmp = sifSysUserService.expandEntity(tmp);
//			if(tmp != null){
//				userList.add(tmp);
//			}
//		}
//		return userList;
//	}

}
