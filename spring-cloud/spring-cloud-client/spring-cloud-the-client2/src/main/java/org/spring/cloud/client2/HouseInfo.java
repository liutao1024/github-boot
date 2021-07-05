package org.spring.cloud.client2;

public class HouseInfo {
	private long number;
	private String location;
	private String address;
	private String name;
	
	public HouseInfo() {
		
	}
	/**
	 * <p>Title: </p> 
	 * <p>Description: </p> 
	 * @param number
	 * @param location
	 * @param address
	 * @param name
	 */
	public HouseInfo(long number, String location, String address, String name) {
		super();
		this.number = number;
		this.location = location;
		this.address = address;
		this.name = name;
	}
	
	public long getNumber() {
		return number;
	}
	public void setNumber(long number) {
		this.number = number;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
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
