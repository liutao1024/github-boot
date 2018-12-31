package com.example.demo.sunline.domain;

import java.io.Serializable;

import javax.persistence.Column;

@SuppressWarnings("serial")
public class SifSysRoleUserPk implements Serializable {
	@Column(name = "resiter_cd")
	private String registerCd;  //注册机构号
	
	@Column(name = "auth_type")
	private String authType;  //权限类型
	
	@Column(name = "role_cd")
	private String roleCd;  //角色号
	
	@Column(name = "user_cd")
	private String userCd;  //操作员号
	
	public SifSysRoleUserPk(){
		super();
	}
	
	public SifSysRoleUserPk(String registerCd, String authType, String roleCd, String userCd){
		super();
		this.registerCd = registerCd;
		this.authType = authType;
		this.roleCd = roleCd;
		this.userCd = userCd;
	}

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

	public String getUserCd() {
		return userCd;
	}

	public void setUserCd(String userCd) {
		this.userCd = userCd;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((authType == null) ? 0 : authType.hashCode());
		result = prime * result
				+ ((registerCd == null) ? 0 : registerCd.hashCode());
		result = prime * result + ((roleCd == null) ? 0 : roleCd.hashCode());
		result = prime * result + ((userCd == null) ? 0 : userCd.hashCode());
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
		SifSysRoleUserPk other = (SifSysRoleUserPk) obj;
		if (authType == null) {
			if (other.authType != null)
				return false;
		} else if (!authType.equals(other.authType))
			return false;
		if (registerCd == null) {
			if (other.registerCd != null)
				return false;
		} else if (!registerCd.equals(other.registerCd))
			return false;
		if (roleCd == null) {
			if (other.roleCd != null)
				return false;
		} else if (!roleCd.equals(other.roleCd))
			return false;
		if (userCd == null) {
			if (other.userCd != null)
				return false;
		} else if (!userCd.equals(other.userCd))
			return false;
		return true;
	}

	
}
