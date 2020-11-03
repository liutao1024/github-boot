package com.example.demo.model;

import javax.persistence.*;

@Entity
public class XdmBaseSetModel {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String baseId;
	private String fileId;
	private String roleUri;
	private String extendName;

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:06:26
	 * @Title: getBaseId
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getBaseId() {
		return baseId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:06:31
	 * @Title: setBaseId
	 * @Description: TODO(Describe)
	 * @param baseId
	 */
	public void setBaseId(String baseId) {
		this.baseId = baseId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:06:33
	 * @Title: getFileId
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getFileId() {
		return fileId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:06:35
	 * @Title: setFileId
	 * @Description: TODO(Describe)
	 * @param fileId
	 */
	public void setFileId(String fileId) {
		this.fileId = fileId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:06:38
	 * @Title: getRoleUri
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getRoleUri() {
		return roleUri;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:06:40
	 * @Title: setRoleUri
	 * @Description: TODO(Describe)
	 * @param roleUri
	 */
	public void setRoleUri(String roleUri) {
		this.roleUri = roleUri;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:06:42
	 * @Title: getExtendName
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getExtendName() {
		return extendName;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:06:44
	 * @Title: setExtendName
	 * @Description: TODO(Describe)
	 * @param extendName
	 */
	public void setExtendName(String extendName) {
		this.extendName = extendName;
	}
	
	public XdmBaseSetModel(){
		
	}
}
