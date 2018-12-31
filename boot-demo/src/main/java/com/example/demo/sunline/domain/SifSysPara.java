package com.example.demo.sunline.domain;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "sif_sys_para")
public class SifSysPara {
	@Id
	@Column(name = "register_cd", length=19, nullable=false)
	private String registerCd;  //注册机构号
	
	@Column(name = "sys_dt", nullable=false)
	private Date sysDt;  //系统当前日期
	
	@Column(name = "last_sys_dt", nullable=false)
	private Date lastSysDt;  //上日系统日期

	@Column(name = "password_error")
	private Integer passwordError;  //当前连续密码错误次数上限
	
	@Column(name = "freezen_password")
	private Integer freezenPassword;  //累计密码错误被冻结的次数上限
	
	@Column(name = "year_days")
	private Integer yearDays;  //默认全年天数
	
	@Column(name = "month_days")
	private Integer monthDays;  //默认每个月的天数
	
	@Column(name = "oper_auth_default")
	private Character operAuthDefault;  //默认操作权限:1--强制检查  2--不强制检查
	
	@Column(name = "query_auth_default")
	private Character queryAuthDefault;  //默认查询权限：1--全行  2--本人

	public SifSysPara(){
		
	}
	
	public String getRegisterCd() {
		return registerCd;
	}

	public void setRegisterCd(String registerCd) {
		this.registerCd = registerCd;
	}

	public Date getSysDt() {
		return sysDt;
	}

	public void setSysDt(Date sysDt) {
		this.sysDt = sysDt;
	}

	public Date getLastSysDt() {
		return lastSysDt;
	}

	public void setLastSysDt(Date lastSysDt) {
		this.lastSysDt = lastSysDt;
	}

	public Integer getPasswordError() {
		return passwordError;
	}

	public void setPasswordError(Integer passwordError) {
		this.passwordError = passwordError;
	}

	public Integer getFreezenPassword() {
		return freezenPassword;
	}

	public void setFreezenPassword(Integer freezenPassword) {
		this.freezenPassword = freezenPassword;
	}

	public Integer getYearDays() {
		return yearDays;
	}

	public void setYearDays(Integer yearDays) {
		this.yearDays = yearDays;
	}

	public Integer getMonthDays() {
		return monthDays;
	}

	public void setMonthDays(Integer monthDays) {
		this.monthDays = monthDays;
	}

	public Character getOperAuthDefault() {
		return operAuthDefault;
	}

	public void setOperAuthDefault(Character operAuthDefault) {
		this.operAuthDefault = operAuthDefault;
	}

	public Character getQueryAuthDefault() {
		return queryAuthDefault;
	}

	public void setQueryAuthDefault(char queryAuthDefault) {
		this.queryAuthDefault = queryAuthDefault;
	}
	
	@Override
	public String toString() {
		//格式化输出Date
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		return "SifSysPara [registerCd=" + registerCd + ", sysDt=" + df.format(sysDt)
				+ ", lastSysDt=" + df.format(lastSysDt) + ", passwordError="
				+ passwordError + ", freezenPassword=" + freezenPassword
				+ ", yearDays=" + yearDays + ", monthDays=" + monthDays
				+ ", operAuthDefault=" + operAuthDefault
				+ ", queryAuthDefault=" + queryAuthDefault + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + freezenPassword;
		result = prime * result
				+ ((lastSysDt == null) ? 0 : lastSysDt.hashCode());
		result = prime * result + monthDays;
		result = prime * result + operAuthDefault;
		result = prime * result + passwordError;
		result = prime * result + queryAuthDefault;
		result = prime * result
				+ ((registerCd == null) ? 0 : registerCd.hashCode());
		result = prime * result + ((sysDt == null) ? 0 : sysDt.hashCode());
		result = prime * result + yearDays;
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
		SifSysPara other = (SifSysPara) obj;
		if (freezenPassword != other.freezenPassword)
			return false;
		if (lastSysDt == null) {
			if (other.lastSysDt != null)
				return false;
		} else if (!lastSysDt.equals(other.lastSysDt))
			return false;
		if (monthDays != other.monthDays)
			return false;
		if (operAuthDefault != other.operAuthDefault)
			return false;
		if (passwordError != other.passwordError)
			return false;
		if (queryAuthDefault != other.queryAuthDefault)
			return false;
		if (registerCd == null) {
			if (other.registerCd != null)
				return false;
		} else if (!registerCd.equals(other.registerCd))
			return false;
		if (sysDt == null) {
			if (other.sysDt != null)
				return false;
		} else if (!sysDt.equals(other.sysDt))
			return false;
		if (yearDays != other.yearDays)
			return false;
		return true;
	}
	
}
