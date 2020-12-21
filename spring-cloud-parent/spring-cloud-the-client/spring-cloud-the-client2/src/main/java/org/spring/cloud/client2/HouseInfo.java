package org.spring.cloud.client2;

public class HouseInfo {
	private long number;
	private String localtion;
	private String address;
	private String name;
	
	public HouseInfo() {
		
	}
	/**
	 * <p>Title: </p> 
	 * <p>Description: </p> 
	 * @param number
	 * @param localtion
	 * @param address
	 * @param name
	 */
	public HouseInfo(long number, String localtion, String address, String name) {
		super();
		this.number = number;
		this.localtion = localtion;
		this.address = address;
		this.name = name;
	}
	
	public long getNumber() {
		return number;
	}
	public void setNumber(long number) {
		this.number = number;
	}
	public String getLocaltion() {
		return localtion;
	}
	public void setLocaltion(String localtion) {
		this.localtion = localtion;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
