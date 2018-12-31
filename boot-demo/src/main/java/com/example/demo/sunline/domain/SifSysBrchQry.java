package com.example.demo.sunline.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

/**
 *机构查询权限表
 */
@Entity
@Table(name="sif_sys_brch_qry")
@IdClass(SifSysBrchQryPk.class)
public class SifSysBrchQry implements Serializable{

	private static final long serialVersionUID = -2454893526985351164L;
	
	@Id
	@Column(name="register_cd",length=19)
	private String registerCd;//注册机构号
	@Id
	@Column(name="branch_cd",length=19)
	private String branchCd;//机构号
	@Id
	@Column(name="query_branch_cd",length=19)
	private String queryBranchCd;//查询机构号
	public String getRegisterCd() {
		return registerCd;
	}
	
	public SifSysBrchQry() {
		super();
	}

	public SifSysBrchQry(String registerCd, String branchCd, String queryBranchCd) {
		super();
		this.registerCd = registerCd;
		this.branchCd = branchCd;
		this.queryBranchCd = queryBranchCd;
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
		SifSysBrchQry other = (SifSysBrchQry) obj;
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
		return "SifSysBrchQry [registerCd=" + registerCd + ", branchCd="
				+ branchCd + ", queryBranchCd=" + queryBranchCd + "]";
	}
}
