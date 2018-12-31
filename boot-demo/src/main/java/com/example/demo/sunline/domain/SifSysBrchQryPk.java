package com.example.demo.sunline.domain;

import java.io.Serializable;

/**
 *机构查询权限表主键类
 */
public class SifSysBrchQryPk implements Serializable{

	private static final long serialVersionUID = -3333870776424180692L;
	private String registerCd;
	private String branchCd;
	private String queryBranchCd;
	
	public SifSysBrchQryPk() {
		super();
	}

	public SifSysBrchQryPk(String registerCd, String branchCd,
			String queryBranchCd) {
		super();
		this.registerCd = registerCd;
		this.branchCd = branchCd;
		this.queryBranchCd = queryBranchCd;
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

	public String getQueryBranchCd() {
		return queryBranchCd;
	}

	public void setQueryBranchCd(String queryBranchCd) {
		this.queryBranchCd = queryBranchCd;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((branchCd == null) ? 0 : branchCd.hashCode());
		result = prime * result
				+ ((queryBranchCd == null) ? 0 : queryBranchCd.hashCode());
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
		SifSysBrchQryPk other = (SifSysBrchQryPk) obj;
		if (branchCd == null) {
			if (other.branchCd != null)
				return false;
		} else if (!branchCd.equals(other.branchCd))
			return false;
		if (queryBranchCd == null) {
			if (other.queryBranchCd != null)
				return false;
		} else if (!queryBranchCd.equals(other.queryBranchCd))
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
		return "SifSysBrchQryPk [registerCd=" + registerCd + ", branchCd="
				+ branchCd + ", queryBranchCd=" + queryBranchCd + "]";
	}
	
}
