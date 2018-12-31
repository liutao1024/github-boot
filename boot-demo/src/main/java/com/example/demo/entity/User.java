package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name="user", schema = "")
@DynamicInsert(true)
@DynamicUpdate(true)
public class User {
	private String id;
	private String name;
	private String password;
	public String getId() {
		return id;
	}
	@Id
	@Column(name = "id",length = 225)
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	@Column(name = "name",length = 225)
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	@Column(name = "password",length = 225)
	public void setPassword(String password) {
		this.password = password;
	}
	
}
