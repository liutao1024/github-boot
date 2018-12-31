package com.example.demo.sunline.domain;

import java.io.Serializable;

/**
 * 团队组织表主键类
 */
public class SifSysTeamPk implements Serializable{

	private static final long serialVersionUID = -3546062334006880597L;
	
	private String registerCd;
	private String teamCd;
	
	public SifSysTeamPk() {
		super();
	}

	public SifSysTeamPk(String registerCd, String teamCd) {
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
		SifSysTeamPk other = (SifSysTeamPk) obj;
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
		return "SifSysTeamPk [registerCd=" + registerCd + ", teamCd=" + teamCd
				+ "]";
	}
	

}
