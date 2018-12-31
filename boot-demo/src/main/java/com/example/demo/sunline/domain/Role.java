package com.example.demo.sunline.domain;



public class Role {
	
	private String registerCd;  //注册机构号
		
	private String authType;  //权限类型: 1--操作权限  2--菜单权限  3--查询权限
	
	private String roleCd;  //角色编号
	
	private String roleName;  //角色名称

	private String queryAuth;  //查询权限: 1--全行  2--个人  3--按机构查询权限   4--按人员查询权限

	

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

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getQueryAuth() {
		return queryAuth;
	}

	public void setQueryAuth(String queryAuth) {
		this.queryAuth = queryAuth;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((roleCd == null) ? 0 : roleCd.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Role other = (Role) obj;
		if (roleCd == null) {
			if (other.roleCd != null)
				return false;
		} else if (!roleCd.equals(other.roleCd))
			return false;
		return true;
	}
	
}
