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

import com.example.demo.sunline.dao.SifSysRoleDao;
import com.example.demo.sunline.domain.Role;
import com.example.demo.sunline.domain.SifSysRole;
import com.example.demo.sunline.domain.SifSysRolePk;
import com.example.demo.sunline.repository.SifSysRoleRepository;

@Service("SifSysRoleDao")
public class SifSysRoleDaoImpl implements SifSysRoleDao {
    @Autowired
    SifSysRoleRepository sifSysRoleRepository;
	
	public List<SifSysRole> findAll() {
        return sifSysRoleRepository.findAll();
	}

	
	public List<SifSysRole> findAll(Sort sort) {
		return sifSysRoleRepository.findAll(sort);
	}

	
	public List<SifSysRole> findAll(Iterable<SifSysRolePk> ids) {
		return sifSysRoleRepository.findAllById(ids);
	}

	
	public <S extends SifSysRole> List<S> save(Iterable<S> entities) {
		return sifSysRoleRepository.saveAll(entities);
	}

	
	public void flush() {
		sifSysRoleRepository.flush();
	}

	
	public <S extends SifSysRole> S saveAndFlush(S entity) {
		return sifSysRoleRepository.saveAndFlush(entity);
	}

	
	public void deleteInBatch(Iterable<SifSysRole> entities) {
		sifSysRoleRepository.deleteInBatch(entities);
	}

	
	public void deleteAllInBatch() {
		sifSysRoleRepository.deleteAllInBatch();
	}

	
	public SifSysRole getOne(SifSysRolePk id) {
		return sifSysRoleRepository.getOne(id);
	}

	
	public Page<SifSysRole> findAll(Pageable pageable) {
		return sifSysRoleRepository.findAll(pageable);
	}

	
	public <S extends SifSysRole> S save(S entity) {
		return sifSysRoleRepository.save(entity);
	}

	
//	public SifSysRole findOne(SifSysRolePk id) {
//		return sifSysRoleRepository.findOne(id);
//	}

	
	public boolean exists(SifSysRolePk id) {
		return sifSysRoleRepository.existsById(id);
	}

	
	public long count() {
		return sifSysRoleRepository.count();
	}

	
	public void delete(SifSysRolePk id) {
		sifSysRoleRepository.deleteById(id);
	}

	
	public void delete(SifSysRole entity) {
		sifSysRoleRepository.delete(entity);
	}

	
	public void delete(Iterable<? extends SifSysRole> entities) {
		sifSysRoleRepository.deleteAll(entities);
	}

	
	public void deleteAll() {
		sifSysRoleRepository.deleteAll();
	}

	
//	public SifSysRole findOne(Specification<SifSysRole> spec) {
//		return sifSysRoleRepository.findOne(spec);
//	}

	
	public List<SifSysRole> findAll(Specification<SifSysRole> spec) {
		return sifSysRoleRepository.findAll(spec);
	}

	
	public Page<SifSysRole> findAll(Specification<SifSysRole> spec,
			Pageable pageable) {
		return sifSysRoleRepository.findAll(spec, pageable);
	}

	
	public List<SifSysRole> findAll(Specification<SifSysRole> spec, Sort sort) {
		return sifSysRoleRepository.findAll(spec, sort);
	}

	
	public long count(Specification<SifSysRole> spec) {
		return sifSysRoleRepository.count(spec);
	}

	@Override
	public Specification<SifSysRole> getSpecification(final Role tmp){
		return new Specification<SifSysRole>() {
	        /**@Fields serialVersionUID : TODO(Describe) 
	         * 20180501
			 */
			private static final long serialVersionUID = 1L;

			@Override
	        public Predicate toPredicate(Root<SifSysRole> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
	            Predicate predicate = cb.conjunction();
	            List<Expression<Boolean>> expressions = predicate.getExpressions();
	            if (tmp.getRegisterCd() != null) {
	                expressions.add(cb.equal(root.<String>get("registerCd"), tmp.getRegisterCd()));
	            }
	            if (tmp.getAuthType() != null) {
	                expressions.add(cb.equal(root.<String>get("authType"), tmp.getAuthType()));
	            }
	            if (tmp.getRoleCd() != null) {
	                expressions.add(cb.equal(root.<String>get("roleCd"),tmp.getRoleCd()));
	            }
	            if (tmp.getRoleName() != null) {
	                expressions.add(cb.like(root.<String>get("roleName"), '%' + tmp.getRoleName() + '%'));
	            }
	            if (tmp.getQueryAuth() != null) {
	                expressions.add(cb.equal(root.<String>get("queryAuth"), tmp.getQueryAuth()));
	            }
	            
	            return predicate;
	        }
	    };
	}

	@Override
	public List<SifSysRole> queryEntitiesByTemplate(Role tmp) {
		return sifSysRoleRepository.findAll(getSpecification(tmp));
	}

	@Override
	public List<SifSysRole> queryEntitiesByTemplate(Role tmp, Sort sort) {
		return sifSysRoleRepository.findAll(getSpecification(tmp),sort);
	}

	@Override
	public Page<SifSysRole> queryEntitiesByTemplate(final Role tmp,
			Pageable pageable) {
		Page<SifSysRole> page = sifSysRoleRepository.findAll(getSpecification(tmp),pageable);
	    return page;
	}

}
