package com.example.demo.model;

import javax.persistence.*;

@Entity
public class XdmConceptLabelModel {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private String fileId;
	private String conceptId;
	private String labelRole;
	private String labelText;
	private String labelLong;
	private String usable;
	private String priority;

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:23
	 * @Title: getFileId
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getFileId() {
		return fileId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:25
	 * @Title: setFileId
	 * @Description: TODO(Describe)
	 * @param fileId
	 */
	public void setFileId(String fileId) {
		this.fileId = fileId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:29
	 * @Title: getConceptId
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getConceptId() {
		return conceptId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:31
	 * @Title: setConceptId
	 * @Description: TODO(Describe)
	 * @param conceptId
	 */
	public void setConceptId(String conceptId) {
		this.conceptId = conceptId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:33
	 * @Title: getLabelRole
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getLabelRole() {
		return labelRole;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:35
	 * @Title: setLabelRole
	 * @Description: TODO(Describe)
	 * @param labelRole
	 */
	public void setLabelRole(String labelRole) {
		this.labelRole = labelRole;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:36
	 * @Title: getLabelText
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getLabelText() {
		return labelText;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:38
	 * @Title: setLabelText
	 * @Description: TODO(Describe)
	 * @param labelText
	 */
	public void setLabelText(String labelText) {
		this.labelText = labelText;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:40
	 * @Title: getLabelLong
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getLabelLong() {
		return labelLong;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:43
	 * @Title: setLabelLong
	 * @Description: TODO(Describe)
	 * @param labelLong
	 */
	public void setLabelLong(String labelLong) {
		this.labelLong = labelLong;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:47
	 * @Title: getUsable
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getUsable() {
		return usable;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:51
	 * @Title: setUsable
	 * @Description: TODO(Describe)
	 * @param usable
	 */
	public void setUsable(String usable) {
		this.usable = usable;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:52
	 * @Title: getPriority
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getPriority() {
		return priority;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:04:54
	 * @Title: setPriority
	 * @Description: TODO(Describe)
	 * @param priority
	 */
	public void setPriority(String priority) {
		this.priority = priority;
	}

}
