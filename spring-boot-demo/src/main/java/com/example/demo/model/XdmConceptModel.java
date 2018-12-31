package com.example.demo.model;

import javax.persistence.*;

@Entity
public class XdmConceptModel {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private String fileId;
	private String conceptId;
	private String conceptName;
	private String dataType;
	private String substitutionGroup;
	private String nillable;
	private String schemaType;

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:03:07
	 * @Title: getFileId
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getFileId() {
		return fileId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:03:11
	 * @Title: setFileId
	 * @Description: TODO(Describe)
	 * @param fileId
	 */
	public void setFileId(String fileId) {
		this.fileId = fileId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:03:16
	 * @Title: getConceptId
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getConceptId() {
		return conceptId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:03:22
	 * @Title: setConceptId
	 * @Description: TODO(Describe)
	 * @param conceptId
	 */
	public void setConceptId(String conceptId) {
		this.conceptId = conceptId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:03:28
	 * @Title: getConceptName
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getConceptName() {
		return conceptName;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:03:31
	 * @Title: setConceptName
	 * @Description: TODO(Describe)
	 * @param conceptName
	 */
	public void setConceptName(String conceptName) {
		this.conceptName = conceptName;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:03:34
	 * @Title: getDataType
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getDataType() {
		return dataType;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:03:36
	 * @Title: setDataType
	 * @Description: TODO(Describe)
	 * @param dataType
	 */
	public void setDataType(String dataType) {
		this.dataType = dataType;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:03:39
	 * @Title: getSubstitutionGroup
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getSubstitutionGroup() {
		return substitutionGroup;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:03:46
	 * @Title: setSubstitutionGroup
	 * @Description: TODO(Describe)
	 * @param substitutionGroup
	 */
	public void setSubstitutionGroup(String substitutionGroup) {
		this.substitutionGroup = substitutionGroup;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:03:48
	 * @Title: getNillable
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getNillable() {
		return nillable;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:03:50
	 * @Title: setNillable
	 * @Description: TODO(Describe)
	 * @param nillable
	 */
	public void setNillable(String nillable) {
		this.nillable = nillable;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:03:52
	 * @Title: getSchemaType
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getSchemaType() {
		return schemaType;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:03:54
	 * @Title: setSchemaType
	 * @Description: TODO(Describe)
	 * @param schemaType
	 */
	public void setSchemaType(String schemaType) {
		this.schemaType = schemaType;
	}

}
