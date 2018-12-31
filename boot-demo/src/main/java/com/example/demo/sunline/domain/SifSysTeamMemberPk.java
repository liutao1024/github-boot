package com.example.demo.sunline.domain;

import java.io.Serializable;

/**
 * 团队组成人员表主键类
 */
public class SifSysTeamMemberPk implements Serializable{

	private static final long serialVersionUID = -8957285653067797400L;

	private String registerCd;
	private String teamCd;
	private String userCd;
	
	public SifSysTeamMemberPk() {
		super();
	}

	public SifSysTeamMemberPk(String registerCd, String teamCd, String userCd) {
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
		SifSysTeamMemberPk other = (SifSysTeamMemberPk) obj;
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
		return "SifSysTeamMemberPk [registerCd=" + registerCd + ", teamCd="
				+ teamCd + ", userCd=" + userCd + "]";
	}

}
