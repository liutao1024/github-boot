package com.example.demo.sunline.domain;

import java.io.Serializable;

/**
 * 操作员表主键类
 */
public class SifSysUserPk implements Serializable{
	
	private static final long serialVersionUID = 7205705220611184038L;
	
	private String registerCd;
	private String userCd;
	public SifSysUserPk() {
		super();
	}
	public SifSysUserPk(String registerCd, String userCd) {
		super();
		this.registerCd = registerCd;
		this.userCd = userCd;
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
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
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
		SifSysUserPk other = (SifSysUserPk) obj;
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
		return "SifSysUser [registerCd=" + registerCd + ", userCd=" + userCd
				+ "]";
	}
}
