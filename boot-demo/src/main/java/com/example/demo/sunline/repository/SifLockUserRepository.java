package com.example.demo.sunline.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.sunline.domain.SifLockUser;

public interface SifLockUserRepository extends
		JpaRepository<SifLockUser,String>, JpaSpecificationExecutor<SifLockUser> {
	
	@Query(value = "from SifLockUser a where a.userid = ?1")
	SifLockUser getSifLockUser (String userid);
}
