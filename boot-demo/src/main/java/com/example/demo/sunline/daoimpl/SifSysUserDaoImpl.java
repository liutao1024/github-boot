package com.example.demo.sunline.daoimpl;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Expression;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.example.demo.sunline.dao.SifSysUserDao;
import com.example.demo.sunline.domain.SifSysUser;
import com.example.demo.sunline.domain.SifSysUserPk;
import com.example.demo.sunline.repository.SifSysUserRepository;

@Service("SifSysUserDao")
public class SifSysUserDaoImpl implements SifSysUserDao {

	@Autowired
	private SifSysUserRepository sifSysUserRepository;
	
	@Override
	public Page<SifSysUser> findAll(Pageable pageable) {
		return sifSysUserRepository.findAll(pageable);
	}

	@Override
	public <S extends SifSysUser> S save(S entity) {
		return sifSysUserRepository.save(entity);
	}

//	@Override
//	public SifSysUser findOne(SifSysUserPk id) {
//		return sifSysUserRepository.findOne(id);
//	}

	@Override
	public boolean exists(SifSysUserPk id) {
		return sifSysUserRepository.existsById(id);
	}

	@Override
	public long count() {
		return sifSysUserRepository.count();
	}

	@Override
	public void delete(SifSysUserPk id) {
		sifSysUserRepository.deleteById(id);
	}

	@Override
	public void delete(SifSysUser entity) {
		sifSysUserRepository.delete(entity);
	}

	@Override
	public void delete(Iterable<? extends SifSysUser> entities) {
		sifSysUserRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		sifSysUserRepository.deleteAll();
	}

	@Override
	public List<SifSysUser> findAll() {
		return sifSysUserRepository.findAll();
	}

	@Override
	public List<SifSysUser> findAll(Sort sort) {
		return sifSysUserRepository.findAll(sort);
	}

	@Override
	public List<SifSysUser> findAll(Iterable<SifSysUserPk> ids) {
		return sifSysUserRepository.findAllById(ids);
	}

	@Override
	public <S extends SifSysUser> List<S> save(Iterable<S> entities) {
		return sifSysUserRepository.saveAll(entities);
	}

	@Override
	public void flush() {
		sifSysUserRepository.flush();
	}

	@Override
	public <S extends SifSysUser> S saveAndFlush(S entity) {
		return sifSysUserRepository.saveAndFlush(entity);
	}

	@Override
	public void deleteInBatch(Iterable<SifSysUser> entities) {
		sifSysUserRepository.deleteInBatch(entities);
	}

	@Override
	public void deleteAllInBatch() {
		sifSysUserRepository.deleteAllInBatch();
	}

	@Override
	public SifSysUser getOne(SifSysUserPk id) {
		return sifSysUserRepository.getOne(id);
	}
	
	public Specification<SifSysUser> getsSpecification(final SifSysUser tmp){
		return new Specification<SifSysUser>() {
	        /**@Fields serialVersionUID : TODO(Describe)
	         * 20180501 
			 */
			private static final long serialVersionUID = 1L;

			@Override
	        public Predicate toPredicate(Root<SifSysUser> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
	            Predicate predicate = cb.conjunction();
	            List<Expression<Boolean>> expressions = predicate.getExpressions();
	            if (tmp.getRegisterCd() != null) {
	                expressions.add(cb.equal(root.<String>get("registerCd"), tmp.getRegisterCd()));
	            }
	            if (tmp.getUserCd() != null) {
	                expressions.add(cb.equal(root.<String>get("userCd"), tmp.getUserCd()));
	            }
	            if (tmp.getUserName() != null) {
	                expressions.add(cb.like(root.<String>get("userName"), "%" + tmp.getUserName() + "%"));
	            }
	            if (tmp.getBranchCd() != null) {
	                expressions.add(cb.equal(root.<String>get("branchCd"), tmp.getBranchCd()));
	            }
	            if (tmp.getUserPassword() != null) {
	                expressions.add(cb.equal(root.<String>get("userPassword"), tmp.getUserPassword()));
	            }
	            if (tmp.getUserCertno() != null) {
	                expressions.add(cb.equal(root.<String>get("userCertno"), tmp.getUserCertno()));
	            }
	            if (tmp.getUserTelno() != null) {
	                expressions.add(cb.equal(root.<String>get("userTelno"), tmp.getUserTelno()));
	            }
	            if (tmp.getUserEmail() != null) {
	                expressions.add(cb.equal(root.<String>get("userEmail"), tmp.getUserEmail()));
	            }
	            if (tmp.getStatus() != null) {
	                expressions.add(cb.equal(root.<String>get("status"), tmp.getStatus()));
	            }
	            return predicate;
	        }
	    };
	}
	
	@Override
	public List<SifSysUser> queryByTemplate(final SifSysUser tmp) {
		return sifSysUserRepository.findAll(getsSpecification(tmp));
	}
	
	@Override
	public List<SifSysUser> queryByTemplate(final SifSysUser tmp, Sort sort) {
		return sifSysUserRepository.findAll(getsSpecification(tmp), sort);
	}

	@Override
	public Page<SifSysUser> queryByTemplate(final SifSysUser tmp,
			Pageable pageable) {
		return sifSysUserRepository.findAll(getsSpecification(tmp),pageable);
	}

}
