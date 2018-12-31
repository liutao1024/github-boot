package com.example.demo.sunline.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

/**
 * 操作员表实体类
 */
@Entity
@Table(name="sif_sys_user")
@IdClass(SifSysUserPk.class)
public class SifSysUser implements Serializable{

	private static final long serialVersionUID = -54782767908340239L;

	@Id
	@Column(name="register_cd",length=19)
	private String registerCd;//组织机构号
	@Id
	@Column(name="user_cd",length=19)
	private String userCd;//操作员号
	
	@Column(name="branch_cd",length=19)
	private String branchCd;//机构号
	@Column(name="user_name",length=20,nullable=false)
	private String userName;//操作员名称
	@Column(name="user_password",length=10,nullable=false)
	private String userPassword;//操作员密码
	@Column(name="user_certno",length=20)
	private String userCertno;//证件号
	@Column(name="user_telno",length=20)
	private String userTelno;//联系电话
	@Column(name="user_email",length=50)
	private String userEmail;//电子邮箱
	@Column(name="status",length=1)
	private String status;//状态 Y-有效 N-无效
	
	public SifSysUser() {
		super();
	}
	public SifSysUser(String registerCd, String userCd) {
		super();
		this.registerCd = registerCd;
		this.userCd = userCd;
	}
	public String getRegisterCd() {
		return registerCd;
	}
	public void setRegisterCd(String registerCd) {
		this.registerCd = registerCd;
	}
	public String getUserCd() {
		return userCd;
	}
	public void setUserCd(String userCd) {
		this.userCd = userCd;
	}
	public String getBranchCd() {
		return branchCd;
	}
	public void setBranchCd(String branchCd) {
		this.branchCd = branchCd;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public String getUserCertno() {
		return userCertno;
	}
	public void setUserCertno(String userCertno) {
		this.userCertno = userCertno;
	}
	public String getUserTelno() {
		return userTelno;
	}
	public void setUserTelno(String userTelno) {
		this.userTelno = userTelno;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((registerCd == null) ? 0 : registerCd.hashCode());
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
		SifSysUser other = (SifSysUser) obj;
		if (registerCd == null) {
			if (other.registerCd != null)
				return false;
		} else if (!registerCd.equals(other.registerCd))
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
		return "SifSysUser [registerCd=" + registerCd + ", userCd=" + userCd
				+ ", branchCd=" + branchCd + ", userName=" + userName
				+ ", userPassword=" + userPassword + ", userCertno="
				+ userCertno + ", userTelno=" + userTelno + ", userEmail="
				+ userEmail + ", status=" + status + "]";
	}
	
}
