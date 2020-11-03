package com.example.demo.model;

import javax.persistence.*;

@Entity
public class XdmPresentationModel {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private String relationshipId;
	private String parentConceptId;
	private String childConceptId;
	private String arcOrder;
	private String preferedLabel;
	private String dtsDomain;
	private String usable;
	private String priority;
	private String baseId;

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:05:01
	 * @Title: getRelationshipId
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getRelationshipId() {
		return relationshipId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:05:03
	 * @Title: setRelationshipId
	 * @Description: TODO(Describe)
	 * @param relationshipId
	 */
	public void setRelationshipId(String relationshipId) {
		this.relationshipId = relationshipId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:05:08
	 * @Title: getParentConceptId
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getParentConceptId() {
		return parentConceptId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:05:10
	 * @Title: setParentConceptId
	 * @Description: TODO(Describe)
	 * @param parentConceptId
	 */
	public void setParentConceptId(String parentConceptId) {
		this.parentConceptId = parentConceptId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:05:12
	 * @Title: getChildConceptId
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getChildConceptId() {
		return childConceptId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:05:15
	 * @Title: setChildConceptId
	 * @Description: TODO(Describe)
	 * @param childConceptId
	 */
	public void setChildConceptId(String childConceptId) {
		this.childConceptId = childConceptId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:05:18
	 * @Title: getArcOrder
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getArcOrder() {
		return arcOrder;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:05:21
	 * @Title: setArcOrder
	 * @Description: TODO(Describe)
	 * @param arcOrder
	 */
	public void setArcOrder(String arcOrder) {
		this.arcOrder = arcOrder;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:05:23
	 * @Title: getPreferedLabel
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getPreferedLabel() {
		return preferedLabel;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:05:26
	 * @Title: setPreferedLabel
	 * @Description: TODO(Describe)
	 * @param preferedLabel
	 */
	public void setPreferedLabel(String preferedLabel) {
		this.preferedLabel = preferedLabel;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:05:28
	 * @Title: getDtsDomain
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getDtsDomain() {
		return dtsDomain;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:05:30
	 * @Title: setDtsDomain
	 * @Description: TODO(Describe)
	 * @param dtsDomain
	 */
	public void setDtsDomain(String dtsDomain) {
		this.dtsDomain = dtsDomain;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:05:31
	 * @Title: getUsable
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getUsable() {
		return usable;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:05:33
	 * @Title: setUsable
	 * @Description: TODO(Describe)
	 * @param usable
	 */
	public void setUsable(String usable) {
		this.usable = usable;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:05:35
	 * @Title: getPriority
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getPriority() {
		return priority;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:05:37
	 * @Title: setPriority
	 * @Description: TODO(Describe)
	 * @param priority
	 */
	public void setPriority(String priority) {
		this.priority = priority;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:05:39
	 * @Title: getBaseId
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getBaseId() {
		return baseId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:05:40
	 * @Title: setBaseId
	 * @Description: TODO(Describe)
	 * @param baseId
	 */
	public void setBaseId(String baseId) {
		this.baseId = baseId;
	}

}
