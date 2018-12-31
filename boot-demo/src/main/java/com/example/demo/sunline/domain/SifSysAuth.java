package com.example.demo.sunline.domain;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import javax.persistence.Transient;


@Entity
@IdClass(SifSysAuthPk.class)
@Table(name = "sif_sys_auth")
public class SifSysAuth implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = -8649650515962190250L;

	//实现Comparable接口，从而可以进行按照sortNo排序

	@Id
	@Column(name = "register_cd")
	private String registerCd;  //注册机构号
	
	@Id
	@Column(name = "auth_type")
	private String authType;  //权限类型
	
	@Id
	@Column(name = "auth_cd")
	private String authCd;  //权限编号
	
	@Column(name = "menu_name")
	private String menuName;  //权限名称
	
	@Column(name = "auth_url")
	private String authUrl;  //权限链接
	
	@Column(name = "parent_auth_cd")
	private String parentAuthCd;  //父级权限编号
	
	@Column(name = "rank")
	private Integer rank;  //层级
	
	@Column(name = "sortno")
	private Integer sortno;  //排序
	
	@Column(name = "iconfg")
	private String iconfg; 
	
	@Column(name = "target_flag")
	private String targetFlag;
	
	@Transient
	private List<SifSysAuth> children;
	@Transient
	private String haschild;
	
	public SifSysAuth(){
		
	}
   
	public SifSysAuth(String registerCd,String authType,String authCd){
		this.registerCd=registerCd;
		this.authType=authType;
		this.authCd=authCd;		
	}
	public String getRegisterCd() {
		return registerCd;
	}

	public void setRegisterCd(String registerCd) {
		this.registerCd = registerCd;
	}

	public String getAuthType() {
		return authType;
	}

	public void setAuthType(String authType) {
		this.authType = authType;
	}

	public String getAuthCd() {
		return authCd;
	}

	public void setAuthCd(String authCd) {
		this.authCd = authCd;
	}

	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public String getAuthUrl() {
		return authUrl;
	}

	public void setAuthUrl(String authUrl) {
		this.authUrl = authUrl;
	}

	public String getParentAuthCd() {
		return parentAuthCd;
	}

	public void setParentAuthCd(String parentAuthCd) {
		this.parentAuthCd = parentAuthCd;
	}

	public Integer getRank() {
		return rank;
	}

	public void setRank(Integer rank) {
		this.rank = rank;
	}

	public Integer getSortno() {
		return sortno;
	}

	public void setSortno(Integer sortno) {
		this.sortno = sortno;
	}
	
	

	public List<SifSysAuth> getChildren() {
		return children;
	}

	public void setChildren(List<SifSysAuth> children) {
		this.children = children;
	}

	public String getHaschild() {
		return haschild;
	}

	public void setHaschild(String haschild) {
		this.haschild = haschild;
	}

	public String getIconfg() {
		return iconfg;
	}

	public void setIconfg(String iconfg) {
		this.iconfg = iconfg;
	}
	
	public String getTargetFlag() {
		return targetFlag;
	}

	public void setTargetFlag(String targetFlag) {
		this.targetFlag = targetFlag;
	}

	@Override
	public String toString() {
		return "SifSysAuth [registerCd=" + registerCd + ", authType="
				+ authType + ", authCd=" + authCd + ", menuName=" + menuName
				+ ", authUrl=" + authUrl + ", parentAuthCd=" + parentAuthCd
				+ ", rank=" + rank + ", sortno=" + sortno + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((authCd == null) ? 0 : authCd.hashCode());
		result = prime * result
				+ ((authType == null) ? 0 : authType.hashCode());
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
		SifSysAuth other = (SifSysAuth) obj;
		if (authCd == null) {
			if (other.authCd != null)
				return false;
		} else if (!authCd.equals(other.authCd))
			return false;
		if (authType == null) {
			if (other.authType != null)
				return false;
		} else if (!authType.equals(other.authType))
			return false;
		return true;
	}

	
}
