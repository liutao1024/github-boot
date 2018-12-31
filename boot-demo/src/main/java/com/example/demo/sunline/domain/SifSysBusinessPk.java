package com.example.demo.sunline.domain;

import java.io.Serializable;

/**
 * 系统业务分类控制表主键类
 */
public class SifSysBusinessPk implements Serializable{

	private static final long serialVersionUID = -8408702064496221994L;
	private String registerCd;
	private String busiCd;
	
	public SifSysBusinessPk(){
		super();
	}
	
	public SifSysBusinessPk(String registerCd, String busiCd){
		super();
		this.registerCd = registerCd;
		this.busiCd = busiCd;
	}
	
	public String getRegisterCd() {
		return registerCd;
	}
	public void setRegisterCd(String registerCd) {
		this.registerCd = registerCd;
	}
	public String getBusiCd() {
		return busiCd;
	}
	public void setBusiCd(String busiCd) {
		this.busiCd = busiCd;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((busiCd == null) ? 0 : busiCd.hashCode());
		result = prime * result
				+ ((registerCd == null) ? 0 : registerCd.hashCode());
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
		SifSysBusinessPk other = (SifSysBusinessPk) obj;
		if (busiCd == null) {
			if (other.busiCd != null)
				return false;
		} else if (!busiCd.equals(other.busiCd))
			return false;
		if (registerCd == null) {
			if (other.registerCd != null)
				return false;
		} else if (!registerCd.equals(other.registerCd))
			return false;
		return true;
	}

}
