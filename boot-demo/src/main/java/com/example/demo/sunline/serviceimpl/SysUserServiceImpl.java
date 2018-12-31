package com.example.demo.sunline.serviceimpl;

import org.springframework.stereotype.Service;

import com.example.demo.sunline.domain.SysUser;
import com.example.demo.sunline.service.SysUserService;

@Service("SysUserService")
public class SysUserServiceImpl implements SysUserService {
	@Override
	public SysUser login(SysUser user) {
		System.out.println(user.getPasswd());
		// Map<String, Object> recvMsg=service.callSerive("socket",
		// "{'userid':'"+user.getUserid()+"','passwd':'"+user.getPasswd()+"','pswdfg':'"+user.getPswdfg()+"'}");

		return user;
	}

}
