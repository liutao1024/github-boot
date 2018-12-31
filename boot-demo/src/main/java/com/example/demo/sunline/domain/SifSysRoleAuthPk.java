package com.example.demo.sunline.domain;

import java.io.Serializable;

import javax.persistence.Column;

public class SifSysRoleAuthPk implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name = "register_cd")
	private String registerCd;  //注册机构号
	
	@Column(name = "auth_type")
	private String authType;  //权限类型
	
	@Column(name = "role_cd")
	private String roleCd;  //角色号
	
	@Column(name = "auth_cd")
	private String authCd;  //权限编号
	
	public SifSysRoleAuthPk(){
		super();
	}
	
	public SifSysRoleAuthPk(String registerCd, String authType, String roleCd, String authCd){
		super();
		this.registerCd = registerCd;
		this.authType = authType;
		this.roleCd = roleCd;
		this.authCd = authCd;
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

	public String getAuthCd() {
		return authCd;
	}

	public void setAuthCd(String authCd) {
		this.authCd = authCd;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((authCd == null) ? 0 : authCd.hashCode());
		result = prime * result
				+ ((authType == null) ? 0 : authType.hashCode());
		result = prime * result
				+ ((registerCd == null) ? 0 : registerCd.hashCode());
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
		SifSysRoleAuthPk other = (SifSysRoleAuthPk) obj;
		if (authCd == null) {
			if (other.authCd != null)
				return false;
		} else if (!authCd.equals(other.authCd))
			return false;
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
		return true;
	}

	

}
