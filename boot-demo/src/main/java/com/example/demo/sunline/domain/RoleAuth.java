package com.example.demo.sunline.domain;


public class RoleAuth {

	private String registerCd;  //注册机构号
	
	private String authType;  //权限类型
	
	private String roleCd;  //角色编号
	
	private String authCd;  //权限编号

	public String getRegisterCd() {
		return registerCd;
	}

	public void setRegisterCd(String registerCd) {
		this.registerCd = registerCd;
	}

	public String getAuthType() {
		return authType;
	}

	public void setAuthType(String authType) {
		this.authType = authType;
	}

	public String getRoleCd() {
		return roleCd;
	}

	public void setRoleCd(String roleCd) {
		this.roleCd = roleCd;
	}

	public String getAuthCd() {
		return authCd;
	}

	public void setAuthCd(String authCd) {
		this.authCd = authCd;
	}
	
	
	
}
