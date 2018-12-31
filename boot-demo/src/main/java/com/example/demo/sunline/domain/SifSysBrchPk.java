package com.example.demo.sunline.domain;

import java.io.Serializable;

/**
 *组织机构表主键类
 */
public class SifSysBrchPk implements Serializable{

	private static final long serialVersionUID = 6587013087946993819L;
	
	private String registerCd;
	private String branchCd;
	
	public SifSysBrchPk() {
		super();
	}

	public SifSysBrchPk(String registerCd, String branchCd) {
		super();
		this.registerCd = registerCd;
		this.branchCd = branchCd;
	}

	public String getRegisterCd() {
		return registerCd;
	}

	public void setRegisterCd(String registerCd) {
		this.registerCd = registerCd;
	}

	public String getBranchCd() {
		return branchCd;
	}

	public void setBranchCd(String branchCd) {
		this.branchCd = branchCd;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((branchCd == null) ? 0 : branchCd.hashCode());
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
		SifSysBrchPk other = (SifSysBrchPk) obj;
		if (branchCd == null) {
			if (other.branchCd != null)
				return false;
		} else if (!branchCd.equals(other.branchCd))
			return false;
		if (registerCd == null) {
			if (other.registerCd != null)
				return false;
		} else if (!registerCd.equals(other.registerCd))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "SifSysBrchPk [registerCd=" + registerCd + ", branchCd="
				+ branchCd + "]";
	}
	
	
	
}
