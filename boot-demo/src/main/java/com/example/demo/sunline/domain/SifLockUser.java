package com.example.demo.sunline.domain;
import java.io.Serializable;

import javax.persistence.*;

/**
 * 操作员表实体类
 */
@Entity
@Table(name="sif_lock_user")
public class SifLockUser implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -5942549339400590898L;

	@Id
	@Column(name="userid",nullable=false)
	private String userid;//柜员号
	
	@Column(name="gropna")
	private String gropna;//柜员所属组名
	
	@Column(name="status")
	private String status;//记录状态
	
	@Column(name="remark")
	private String remark;//备注

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getGropna() {
		return gropna;
	}

	public void setGropna(String gropna) {
		this.gropna = gropna;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	@Override
	public String toString() {
		return "SifLockUser [userid=" + userid + ", gropna=" + gropna + ", status=" + status + ", remark=" + remark
				+ "]";
	}
	
}
