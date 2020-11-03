package com.example.demo.model;

import javax.persistence.*;

@Entity
public class XdmFileRefModel {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private String linkbaseref;
	private String arcroleref;
	private String roleref;
	private String xsdImport;

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:00
	 * @Title: getLinkbaseref
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getLinkbaseref() {
		return linkbaseref;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:02
	 * @Title: setLinkbaseref
	 * @Description: TODO(Describe)
	 * @param linkbaseref
	 */
	public void setLinkbaseref(String linkbaseref) {
		this.linkbaseref = linkbaseref;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:06
	 * @Title: getArcroleref
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getArcroleref() {
		return arcroleref;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:08
	 * @Title: setArcroleref
	 * @Description: TODO(Describe)
	 * @param arcroleref
	 */
	public void setArcroleref(String arcroleref) {
		this.arcroleref = arcroleref;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:10
	 * @Title: getRoleref
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getRoleref() {
		return roleref;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:12
	 * @Title: setRoleref
	 * @Description: TODO(Describe)
	 * @param roleref
	 */
	public void setRoleref(String roleref) {
		this.roleref = roleref;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:14
	 * @Title: getXsdImport
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getXsdImport() {
		return xsdImport;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:16
	 * @Title: setXsdImport
	 * @Description: TODO(Describe)
	 * @param xsdImport
	 */
	public void setXsdImport(String xsdImport) {
		this.xsdImport = xsdImport;
	}

}
