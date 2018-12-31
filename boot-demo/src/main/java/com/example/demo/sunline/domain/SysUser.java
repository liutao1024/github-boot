package com.example.demo.sunline.domain;

import java.io.Serializable;

public class SysUser implements Serializable{
	/**
	 */
	private static final long serialVersionUID = -3060417299626605158L;

    private String corpno;//法人号
     
	private String userid;//柜员id

	private String passwd;//柜员密码

	private String pswdfg;//是否验证密码

	private String userna;//柜员名称

	private String brchno;//机构号

	private String usform;//柜员属性
	
    private String userst;//柜员状态
    
    private String uslgst;//柜员签到状态
    
    private String pwaect;//密码错误次数
    
	private String systdt;//系统日期
	
	private String userlv;//柜员等级
	
    public SysUser(){
		
	}
	public SysUser(String userid){
		this.userid=userid;
	}
	
	public String getUserst() {
		return userst;
	}
	public void setUserst(String userst) {
		this.userst = userst;
	}
	public String getUslgst() {
		return uslgst;
	}
	public void setUslgst(String uslgst) {
		this.uslgst = uslgst;
	}

	public String getPwaect() {
		return pwaect;
	}
	public void setPwaect(String pwaect) {
		this.pwaect = pwaect;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getPasswd() {
		return passwd;
	}
	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
	public String getUsform() {
		return usform;
	}
	public void setUsform(String usform) {
		this.usform = usform;
	}
	public String getPswdfg() {
		return pswdfg;
	}
	public void setPswdfg(String pswdfg) {
		this.pswdfg = pswdfg;
	}
	public String getUserna() {
		return userna;
	}
	public void setUserna(String userna) {
		this.userna = userna;
	}
	public String getBrchno() {
		return brchno;
	}
	public void setBrchno(String brchno) {
		this.brchno = brchno;
	}
	public String getSystdt() {
		return systdt;
	}
	public void setSystdt(String systdt) {
		this.systdt = systdt;
	}
	public String getCorpno() {
		return corpno;
	}
	public void setCorpno(String corpno) {
		this.corpno = corpno;
	}
	public String getUserlv() {
		return userlv;
	}
	public void setUserlv(String userlv) {
		this.userlv = userlv;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((userid == null) ? 0 : userid.hashCode());
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
		SysUser other = (SysUser) obj;
		if (userid == null) {
			if (other.userid != null)
				return false;
		} else if (!userid.equals(other.userid))
			return false;
		return true;
	}
	

}
