package com.example.demo.sunline.domain;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

/**
 * 组织机构类
 */
@Entity
@Table(name="sif_sys_brch")
@IdClass(SifSysBrchPk.class)
public class SifSysBrch implements Serializable{

	private static final long serialVersionUID = 4479032829211814145L;

	@Id
	@Column(name="register_cd",length=19)
	private String registerCd;//注册机构号
	@Id
	@Column(name="branchCd",length=19)
	private String branchCd;//机构号
	
	@Column(name="parent_branch_cd",length=19)
	private String parentBranchCd;//父级机构号
	@Column(name="branch_name",length=50,nullable=false)
	private String branchName;//机构名称
	@Column(name="rank",precision=2,scale=0)
	private BigDecimal rank;//层级
	@Column(name="status",length=1)
	private String status;//有效状态Y-有效N-无效
	@Column(name="sortno",precision=2,scale=0)
	private BigDecimal sortno;//排序
	@Column(name="branch_addr",length=100)
	private String branchAddr;//详细地址
	@Column(name="branch_zipcode",length=6)
	private String branchZipcode;//邮编
	@Column(name="branch_type",length=1)
	private String branchType;//机构类型1-总行/总公司2-管理部门3-分行/分公司4-网点/子公司
	
	public SifSysBrch() {
		super();
	}
	
	public SifSysBrch(String registerCd, String branchCd) {
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

	public String getParentBranchCd() {
		return parentBranchCd;
	}

	public void setParentBranchCd(String parentBranchCd) {
		this.parentBranchCd = parentBranchCd;
	}

	public String getBranchName() {
		return branchName;
	}

	public void setBranchName(String branchName) {
		this.branchName = branchName;
	}

	public BigDecimal getRank() {
		return rank;
	}

	public void setRank(BigDecimal rank) {
		this.rank = rank;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public BigDecimal getSortno() {
		return sortno;
	}

	public void setSortno(BigDecimal sortno) {
		this.sortno = sortno;
	}

	public String getBranchAddr() {
		return branchAddr;
	}

	public void setBranchAddr(String branchAddr) {
		this.branchAddr = branchAddr;
	}

	public String getBranchZipcode() {
		return branchZipcode;
	}

	public void setBranchZipcode(String branchZipcode) {
		this.branchZipcode = branchZipcode;
	}

	public String getBranchType() {
		return branchType;
	}

	public void setBranchType(String branchType) {
		this.branchType = branchType;
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
		SifSysBrch other = (SifSysBrch) obj;
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
		return "SifSysBrch [registerCd=" + registerCd + ", branchCd="
				+ branchCd + ", parentBranchCd=" + parentBranchCd
				+ ", branchName=" + branchName + ", rank=" + rank + ", status="
				+ status + ", sortno=" + sortno + ", branchAddr=" + branchAddr
				+ ", branchZipcode=" + branchZipcode + ", branchType="
				+ branchType + "]";
	}
	
}
