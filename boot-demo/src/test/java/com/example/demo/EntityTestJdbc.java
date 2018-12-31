package com.example.demo;

import org.junit.Test;

import com.example.demo.sunline.domain.SysUser;

public class EntityTestJdbc {
	@Test
	public void SysUserTest(){
		SysUser sysUser = new SysUser();
		String brchno = sysUser.getBrchno();
		System.out.println(brchno);
		
	}
}
