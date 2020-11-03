package com.example.demo.model;

import javax.persistence.*;

@Entity
public class XdmFileModel {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private String fileId;
	private String location;
	private String description;
	private String version;
	private String readonly;
	private String sourceContent;
	private String lastWirteTime;
	private String lastBuildTime;
	private String lastBuildContent;

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:00:42
	 * @Title: getFileId
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getFileId() {
		return fileId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:01:47
	 * @Title: setFileId
	 * @Description: TODO(Describe)
	 * @param fileId
	 */
	public void setFileId(String fileId) {
		this.fileId = fileId;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:01:55
	 * @Title: getLocation
	 * @Description: TODO(Describe)
	 * @return
	 */

	public String getLocation() {
		return location;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:01:59
	 * @Title: setLocation
	 * @Description: TODO(Describe)
	 * @param location
	 */

	public void setLocation(String location) {
		this.location = location;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:02:01
	 * @Title: getDescription
	 * @Description: TODO(Describe)
	 * @return
	 */

	public String getDescription() {
		return description;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:02:04
	 * @Title: setDescription
	 * @Description: TODO(Describe)
	 * @param description
	 */

	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:02:12
	 * @Title: getVersion
	 * @Description: TODO(Describe)
	 * @return
	 */

	public String getVersion() {
		return version;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:02:15
	 * @Title: setVersion
	 * @Description: TODO(Describe)
	 * @param version
	 */

	public void setVersion(String version) {
		this.version = version;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:02:18
	 * @Title: getReadonly
	 * @Description: TODO(Describe)
	 * @return
	 */

	public String getReadonly() {
		return readonly;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:02:22
	 * @Title: setReadonly
	 * @Description: TODO(Describe)
	 * @param readonly
	 */

	public void setReadonly(String readonly) {
		this.readonly = readonly;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:02:29
	 * @Title: getSourceContent
	 * @Description: TODO(Describe)
	 * @return
	 */

	public String getSourceContent() {
		return sourceContent;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:02:34
	 * @Title: setSourceContent
	 * @Description: TODO(Describe)
	 * @param sourceContent
	 */
	public void setSourceContent(String sourceContent) {
		this.sourceContent = sourceContent;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:02:38
	 * @Title: getLastWirteTime
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getLastWirteTime() {
		return lastWirteTime;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:02:48
	 * @Title: setLastWirteTime
	 * @Description: TODO(Describe)
	 * @param lastWirteTime
	 */
	public void setLastWirteTime(String lastWirteTime) {
		this.lastWirteTime = lastWirteTime;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:02:51
	 * @Title: getLastBuildTime
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getLastBuildTime() {
		return lastBuildTime;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:02:53
	 * @Title: setLastBuildTime
	 * @Description: TODO(Describe)
	 * @param lastBuildTime
	 */
	public void setLastBuildTime(String lastBuildTime) {
		this.lastBuildTime = lastBuildTime;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:02:57
	 * @Title: getLastBuildContent
	 * @Description: TODO(Describe)
	 * @return
	 */
	public String getLastBuildContent() {
		return lastBuildContent;
	}

	/**
	 * @author LiuTao @date 2018年4月17日 下午4:02:59
	 * @Title: setLastBuildContent
	 * @Description: TODO(Describe)
	 * @param lastBuildContent
	 */
	public void setLastBuildContent(String lastBuildContent) {
		this.lastBuildContent = lastBuildContent;
	}
}
