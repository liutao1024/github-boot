package com.example.demo.sunline.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

/**
 * 团队组成成员表实体类
 */
@Entity
@Table(name="sif_sys_team_member")
@IdClass(SifSysTeamMemberPk.class)
public class SifSysTeamMember implements Serializable{

	private static final long serialVersionUID = -5362500856472163495L;

	@Id
	@Column(name="register_cd",length=19)
	private String registerCd;//注册机构号
	@Id
	@Column(name="team_cd",length=19)
	private String teamCd;//团队编号
	@Id
	@Column(name="user_cd",length=19)
	private String userCd;//操作员号
	
	public SifSysTeamMember() {
		super();
	}

	public SifSysTeamMember(String registerCd, String teamCd, String userCd) {
		super();
		this.registerCd = registerCd;
		this.teamCd = teamCd;
		this.userCd = userCd;
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
		result = prime * result + ((teamCd == null) ? 0 : teamCd.hashCode());
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
		SifSysTeamMember other = (SifSysTeamMember) obj;
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
		if (userCd == null) {
			if (other.userCd != null)
				return false;
		} else if (!userCd.equals(other.userCd))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "SifSysTeamMember [registerCd=" + registerCd + ", teamCd="
				+ teamCd + ", userCd=" + userCd + "]";
	}
	
}
