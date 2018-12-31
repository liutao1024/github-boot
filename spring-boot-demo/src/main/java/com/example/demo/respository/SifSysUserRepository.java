package com.example.demo.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;



public interface SifSysUserRepository extends JpaRepository<String, String>,JpaSpecificationExecutor<String> {
	
}
