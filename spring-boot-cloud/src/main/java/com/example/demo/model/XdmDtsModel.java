package com.example.demo.model;

import javax.persistence.*;
/**
 * @author LiuTao @date 2018年4月17日 下午3:43:32
 * @ClassName: XdmDts
 * @Description: TODO(Describe)
 */

@Entity
public class XdmDtsModel/* implements Serializable */{
	/**
	 * @Fields serialVersionUID : TODO(Describe)
	 */
	// private static final long serialVersionUID = 1L;
	// dd
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String entryLocation;
	private String dtsRef;
	private String dtsId;
	private String description;
	private String lastWriteTime;
	private String dtsDomain;
	private String lastCheckTime;
	private String lastCheckMessage;
	private String importTime;

	/**
	 * @author LiuTao @date 2018年4月17日 下午3:45:00
	 * @Title: getEntryLocation
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getEntryLocation() {
		return entryLocation;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午3:45:13
	 * @Title: setEntryLocation
	 * @Description: TODO(Describe)
	 * @param entryLocation
	 */
	public void setEntryLocation(String entryLocation) {
		this.entryLocation = entryLocation;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午3:45:19
	 * @Title: getDtsRef
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getDtsRef() {
		return dtsRef;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午3:45:28
	 * @Title: setDtsRef
	 * @Description: TODO(Describe)
	 * @param dtsRef
	 */
	public void setDtsRef(String dtsRef) {
		this.dtsRef = dtsRef;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午3:45:31
	 * @Title: getDtsId
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getDtsId() {
		return dtsId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午3:45:33
	 * @Title: setDtsId
	 * @Description: TODO(Describe)
	 * @param dtsId
	 */
	public void setDtsId(String dtsId) {
		this.dtsId = dtsId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午3:45:36
	 * @Title: getDescription
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午3:45:38
	 * @Title: setDescription
	 * @Description: TODO(Describe)
	 * @param description
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午3:45:41
	 * @Title: getLastWriteTime
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getLastWriteTime() {
		return lastWriteTime;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午3:45:44
	 * @Title: setLastWriteTime
	 * @Description: TODO(Describe)
	 * @param lastWriteTime
	 */
	public void setLastWriteTime(String lastWriteTime) {
		this.lastWriteTime = lastWriteTime;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午3:45:46
	 * @Title: getDtsDomain
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getDtsDomain() {
		return dtsDomain;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午3:45:48
	 * @Title: setDtsDomain
	 * @Description: TODO(Describe)
	 * @param dtsDomain
	 */
	public void setDtsDomain(String dtsDomain) {
		this.dtsDomain = dtsDomain;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午3:45:51
	 * @Title: getLastCheckTime
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getLastCheckTime() {
		return lastCheckTime;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午3:45:53
	 * @Title: setLastCheckTime
	 * @Description: TODO(Describe)
	 * @param lastCheckTime
	 */
	public void setLastCheckTime(String lastCheckTime) {
		this.lastCheckTime = lastCheckTime;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午3:45:55
	 * @Title: getLastCheckMessage
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getLastCheckMessage() {
		return lastCheckMessage;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午3:45:58
	 * @Title: setLastCheckMessage
	 * @Description: TODO(Describe)
	 * @param lastCheckMessage
	 */
	public void setLastCheckMessage(String lastCheckMessage) {
		this.lastCheckMessage = lastCheckMessage;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午3:46:00
	 * @Title: getImportTime
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getImportTime() {
		return importTime;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午3:46:02
	 * @Title: setImportTime
	 * @Description: TODO(Describe)
	 * @param importTime
	 */
	public void setImportTime(String importTime) {
		this.importTime = importTime;
	}

}
