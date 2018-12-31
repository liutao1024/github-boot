package com.example.demo.sunline.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@IdClass(SifSysRolePk.class)
@Table(name = "sif_sys_role")
public class SifSysRole implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "register_cd",length=19, nullable = false)
	private String registerCd;  //注册机构号
	
	@Id
	@Column(name = "auth_type", nullable = false)
	private String authType;  //权限类型: 1--操作权限  2--菜单权限  3--查询权限
	
	@Id
	@Column(name = "role_cd",length=19, nullable = false)
	private String roleCd;  //角色编号
	
	@Column(name = "role_name", length=50, nullable = false)
	private String roleName;  //角色名称
	
	@Column(name = "query_auth")
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
	public String toString() {
		return "SifSysRole [registerCd=" + registerCd + ", authType="
				+ authType + ", roleCd=" + roleCd + ", roleName=" + roleName
				+ ", queryAuth=" + queryAuth + "]";
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
		SifSysRole other = (SifSysRole) obj;
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
