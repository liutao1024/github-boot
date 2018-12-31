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

import com.example.demo.sunline.dao.SifSysRoleUserDao;
import com.example.demo.sunline.domain.SifSysRoleUser;
import com.example.demo.sunline.domain.SifSysRoleUserPk;
import com.example.demo.sunline.repository.SifSysRoleUserRepository;

@Service("SifSysRoleUserDao")
public class SifSysRoleUserDaoImpl implements SifSysRoleUserDao {
	@Autowired
	SifSysRoleUserRepository sifSysRoleUserRepository;

	@Override
	public List<SifSysRoleUser> findAll() {
		return sifSysRoleUserRepository.findAll();
	}

	@Override
	public List<SifSysRoleUser> findAll(Sort sort) {
		return sifSysRoleUserRepository.findAll(sort);
	}

	@Override
	public List<SifSysRoleUser> findAll(Iterable<SifSysRoleUserPk> ids) {
		return sifSysRoleUserRepository.findAllById(ids);
	}

	@Override
	public <S extends SifSysRoleUser> List<S> save(Iterable<S> entities) {
		return sifSysRoleUserRepository.saveAll(entities);
	}

	@Override
	public void flush() {
		sifSysRoleUserRepository.flush();
	}

	@Override
	public <S extends SifSysRoleUser> S saveAndFlush(S entity) {
		return sifSysRoleUserRepository.saveAndFlush(entity);
	}

	@Override
	public void deleteInBatch(Iterable<SifSysRoleUser> entities) {
		sifSysRoleUserRepository.deleteInBatch(entities);
	}

	@Override
	public void deleteAllInBatch() {
		sifSysRoleUserRepository.deleteAllInBatch();
	}

	@Override
	public SifSysRoleUser getOne(SifSysRoleUserPk id) {
		return sifSysRoleUserRepository.getOne(id);
	}

	@Override
	public Page<SifSysRoleUser> findAll(Pageable pageable) {
		return sifSysRoleUserRepository.findAll(pageable);
	}

	@Override
	public <S extends SifSysRoleUser> S save(S entity) {
		return sifSysRoleUserRepository.save(entity);
	}

//	@Override
//	public SifSysRoleUser findOne(SifSysRoleUserPk id) {
//		return sifSysRoleUserRepository.findOne(id);
//	}

	@Override
	public boolean exists(SifSysRoleUserPk id) {
		return sifSysRoleUserRepository.existsById(id);
	}

	@Override
	public long count() {
		return sifSysRoleUserRepository.count();
	}

	@Override
	public void delete(SifSysRoleUserPk id) {
		sifSysRoleUserRepository.deleteById(id);
	}

	@Override
	public void delete(SifSysRoleUser entity) {
		sifSysRoleUserRepository.delete(entity);
	}

	@Override
	public void delete(Iterable<? extends SifSysRoleUser> entities) {
		sifSysRoleUserRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		sifSysRoleUserRepository.deleteAll();
	}

//	@Override
//	public SifSysRoleUser findOne(Specification<SifSysRoleUser> spec) {
//		return sifSysRoleUserRepository.findOne(spec);
//	}

	@Override
	public List<SifSysRoleUser> findAll(Specification<SifSysRoleUser> spec) {
		return sifSysRoleUserRepository.findAll(spec);
	}

	@Override
	public Page<SifSysRoleUser> findAll(Specification<SifSysRoleUser> spec,
			Pageable pageable) {
		return sifSysRoleUserRepository.findAll(spec, pageable);
	}

	@Override
	public List<SifSysRoleUser> findAll(Specification<SifSysRoleUser> spec,
			Sort sort) {
		return sifSysRoleUserRepository.findAll(spec, sort);
	}

	@Override
	public long count(Specification<SifSysRoleUser> spec) {
		return sifSysRoleUserRepository.count(spec);
	}

	@Override
	public List<String> getUserListByRegisterCdAndAuthTypeAndRoleCd(
			String registerCd, String authType, String roleCd) {
		return sifSysRoleUserRepository.getUserListByRegisterCdAndAuthTypeAndRoleCd(registerCd, authType, roleCd);
	}
	
	@Override
	public Specification<SifSysRoleUser> getSpecification(final SifSysRoleUser tmp){ 
		return new Specification<SifSysRoleUser>() {
	        /**@Fields serialVersionUID : TODO(Describe) 
	         * 20180501
			 */
			private static final long serialVersionUID = 1L;

			@Override
	        public Predicate toPredicate(Root<SifSysRoleUser> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
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
	            if (tmp.getUserCd() != null) {
	                expressions.add(cb.equal(root.<String>get("userCd"), tmp.getUserCd()));
	            }
	            
	            return predicate;
	        }
	    };
	}

	@Override
	public List<SifSysRoleUser> queryEntitiesByTemplate(SifSysRoleUser tmp) {
		return sifSysRoleUserRepository.findAll(getSpecification(tmp));
	}
	
	@Override
	public List<SifSysRoleUser> queryEntitiesByTemplate(SifSysRoleUser tmp, Sort sort) {
		return sifSysRoleUserRepository.findAll(getSpecification(tmp),sort);
	}

	@Override
	public Page<SifSysRoleUser> queryEntitiesByTemplate(final SifSysRoleUser tmp,
			Pageable pageable) {
		Page<SifSysRoleUser> page = sifSysRoleUserRepository.findAll(getSpecification(tmp),pageable);
	    return page;
	}

	

}
