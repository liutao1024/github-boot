package com.example.demo.sunline.domain;

import java.io.Serializable;

/**
 *操作员查询权限表主键类 
 */
public class SifSysUserQryPk implements Serializable{

	private static final long serialVersionUID = 2027892017209789198L;

	private String registerCd;
	private String userCd;
	private String queryUserCd;
	
	public SifSysUserQryPk() {
		super();
	}

	public SifSysUserQryPk(String registerCd, String userCd, String queryUserCd) {
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
		SifSysUserQryPk other = (SifSysUserQryPk) obj;
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
		return "SifSysUserQryPk [registerCd=" + registerCd + ", userCd="
				+ userCd + ", queryUserCd=" + queryUserCd + "]";
	}

}
