package com.example.demo.sunline.domain;

public class BaseBean {
	
   private String retCode;
   
   private String retmsg;
   public BaseBean(){
	   
   }
  public BaseBean(String retCode){
	   this.retCode=retCode;
   }
public String getRetCode() {
	return retCode;
}

public void setRetCode(String retCode) {
	this.retCode = retCode;
}

public String getRetmsg() {
	return retmsg;
}

public void setRetmsg(String retmsg) {
	this.retmsg = retmsg;
}

@Override
public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((retCode == null) ? 0 : retCode.hashCode());
	result = prime * result + ((retmsg == null) ? 0 : retmsg.hashCode());
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
	BaseBean other = (BaseBean) obj;
	if (retCode == null) {
		if (other.retCode != null)
			return false;
	} else if (!retCode.equals(other.retCode))
		return false;
	if (retmsg == null) {
		if (other.retmsg != null)
			return false;
	} else if (!retmsg.equals(other.retmsg))
		return false;
	return true;
}
	
	
}
