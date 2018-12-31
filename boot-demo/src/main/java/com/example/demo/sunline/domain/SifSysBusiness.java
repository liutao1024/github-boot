package com.example.demo.sunline.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

/**
 * 系统业务分类控制表
 */
@Entity
@Table(name="sif_sys_business")
@IdClass(SifSysBusinessPk.class)
public class SifSysBusiness implements Serializable{
	
	private static final long serialVersionUID = 7175588806147628436L;
	@Id
	@Column(name="register_cd",length=19)
	private String registerCd;	//注册机构号
	@Id
	@Column(name="busi_cd",length=19)
	private String busiCd;		//业务种类编号
	
	@Column(name="busi_name",length=200,nullable=false)
	private String busiName;	//业务种类名称
	@Column(name="halt_flag",length=1,nullable=false)
	private String haltFlag;		//是否启用 Y-是 N-否
	@Column(name="account_rule",length=1,nullable=false)
	private String accountRule;	//电子帐号生成规则 1-一个产品一个账户2-一笔交易一个帐户
	@Column(name="prod_rule",length=1,nullable=false)
	private String prodRule;		//设置产品规则 1-只能有一个产品2-不限制
	
	public SifSysBusiness() {
		super();
	}
	
	public SifSysBusiness(String registerCd, String busiCd) {
		super();
		this.registerCd = registerCd;
		this.busiCd = busiCd;
	}

	public String getRegisterCd() {
		return registerCd;
	}
	public void setRegisterCd(String registerCd) {
		this.registerCd = registerCd;
	}
	public String getBusiCd() {
		return busiCd;
	}
	public void setBusiCd(String busiCd) {
		this.busiCd = busiCd;
	}
	public String getBusiName() {
		return busiName;
	}
	public void setBusiName(String busiName) {
		this.busiName = busiName;
	}
	public String getHaltFlag() {
		return haltFlag;
	}
	public void setHaltFlag(String haltFlag) {
		this.haltFlag = haltFlag;
	}
	public String getAccountRule() {
		return accountRule;
	}
	public void setAccountRule(String accountRule) {
		this.accountRule = accountRule;
	}
	public String getProdRule() {
		return prodRule;
	}
	public void setProdRule(String prodRule) {
		this.prodRule = prodRule;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((busiCd == null) ? 0 : busiCd.hashCode());
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
		SifSysBusiness other = (SifSysBusiness) obj;
		if (busiCd == null) {
			if (other.busiCd != null)
				return false;
		} else if (!busiCd.equals(other.busiCd))
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
		return "SifSysBusiness [registerCd=" + registerCd + ", busiCd="
				+ busiCd + ", busiName=" + busiName + ", haltFlag=" + haltFlag
				+ ", accountRule=" + accountRule + ", prodRule=" + prodRule
				+ "]";
	}
	
}
