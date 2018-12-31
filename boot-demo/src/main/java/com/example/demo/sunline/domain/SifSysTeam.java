package com.example.demo.sunline.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

/**
 * 团队组织表实体类
 */
@Entity
@Table(name="sif_sys_team")
@IdClass(SifSysTeamPk.class)
public class SifSysTeam implements Serializable{

	private static final long serialVersionUID = 7136720084957745329L;

	@Id
	@Column(name="register_cd",length=19)
	private String registerCd;//注册机构号
	@Id
	@Column(name="team_cd",length=19)
	private String teamCd;//团队编号
	
	@Column(name="team_name",length=100,nullable=false)
	private String teamName;//团队名称
	@Column(name="branch_cd",length=19,nullable=false)
	private String branchCd;//机构号
	
	public SifSysTeam() {
		super();
	}

	public SifSysTeam(String registerCd, String teamCd) {
		super();
		this.registerCd = registerCd;
		this.teamCd = teamCd;
	}

	public String getRegisterCd() {
		return registerCd;
	}

	public void setRegisterCd(String registerCd) {
		this.registerCd = registerCd;
	}

	public String getTeamCd() {
		return teamCd;
	}

	public void setTeamCd(String teamCd) {
		this.teamCd = teamCd;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
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
				+ ((registerCd == null) ? 0 : registerCd.hashCode());
		result = prime * result + ((teamCd == null) ? 0 : teamCd.hashCode());
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
		SifSysTeam other = (SifSysTeam) obj;
		if (registerCd == null) {
			if (other.registerCd != null)
				return false;
		} else if (!registerCd.equals(other.registerCd))
			return false;
		if (teamCd == null) {
			if (other.teamCd != null)
				return false;
		} else if (!teamCd.equals(other.teamCd))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "SifSysTeam [registerCd=" + registerCd + ", teamCd=" + teamCd
				+ ", teamName=" + teamName + ", branchCd=" + branchCd + "]";
	}
	
}
