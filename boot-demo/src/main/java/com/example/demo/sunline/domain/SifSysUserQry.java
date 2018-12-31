package com.example.demo.sunline.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

/**
 * 操作员查询权限表实体类
 */
@Entity
@Table(name="sif_sys_user_qry")
@IdClass(SifSysUserQryPk.class)
public class SifSysUserQry implements Serializable{

	private static final long serialVersionUID = -7643881424025059754L;
	
	@Id
	@Column(name="register_cd",length=19)
	private String registerCd;//注册机构号
	@Id
	@Column(name="user_cd",length=19)
	private String userCd;//操作员号
	@Id
	@Column(name="query_user_cd",length=19)
	private String queryUserCd;//查询操作员号
	
	public SifSysUserQry() {
		super();
	}
	
	public SifSysUserQry(String registerCd, String userCd, String queryUserCd) {
		super();
		this.registerCd = registerCd;
		this.userCd = userCd;
		this.queryUserCd = queryUserCd;
	}
	
	public String getRegisterCd() {
		return registerCd;
	}
	public void setRegisterCd(String registerCd) {
		this.registerCd = registerCd;
	}
	public String getUserCd() {
		return userCd;
	}
	public void setUserCd(String userCd) {
		this.userCd = userCd;
	}
	public String getQueryUserCd() {
		return queryUserCd;
	}
	public void setQueryUserCd(String queryUserCd) {
		this.queryUserCd = queryUserCd;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((queryUserCd == null) ? 0 : queryUserCd.hashCode());
		result = prime * result
				+ ((registerCd == null) ? 0 : registerCd.hashCode());
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
		SifSysUserQry other = (SifSysUserQry) obj;
		if (queryUserCd == null) {
			if (other.queryUserCd != null)
				return false;
		} else if (!queryUserCd.equals(other.queryUserCd))
			return false;
		if (registerCd == null) {
			if (other.registerCd != null)
				return false;
		} else if (!registerCd.equals(other.registerCd))
			return false;
		if (userCd == null) {
			if (other.userCd != null)
				return false;
		} else if (!userCd.equals(other.userCd))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "SifSysUserQry [registerCd=" + registerCd + ", userCd=" + userCd
				+ ", queryUserCd=" + queryUserCd + "]";
	}
	
}
