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

import com.example.demo.sunline.dao.SifSysUserQryDao;
import com.example.demo.sunline.domain.SifSysUserQry;
import com.example.demo.sunline.domain.SifSysUserQryPk;
import com.example.demo.sunline.repository.SifSysUserQryRepository;

@Service("SifSysUserQryDao")
public class SifSysUserQryDaoImpl implements SifSysUserQryDao {

	@Autowired
	private SifSysUserQryRepository sifSysUserQryRepository;
	
	@Override
	public Page<SifSysUserQry> findAll(Pageable pageable) {
		return sifSysUserQryRepository.findAll(pageable);
	}

	@Override
	public <S extends SifSysUserQry> S save(S entity) {
		return sifSysUserQryRepository.save(entity);
	}

//	@Override
//	public SifSysUserQry findOne(SifSysUserQryPk id) {
//		return sifSysUserQryRepository.findOne(id);
//	}

	@Override
	public boolean exists(SifSysUserQryPk id) {
		return sifSysUserQryRepository.existsById(id);
	}

	@Override
	public long count() {
		return sifSysUserQryRepository.count();
	}

	@Override
	public void delete(SifSysUserQryPk id) {
		sifSysUserQryRepository.deleteById(id);
	}

	@Override
	public void delete(SifSysUserQry entity) {
		sifSysUserQryRepository.delete(entity);
	}

	@Override
	public void delete(Iterable<? extends SifSysUserQry> entities) {
		sifSysUserQryRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		sifSysUserQryRepository.deleteAll();
	}

	@Override
	public List<SifSysUserQry> findAll() {
		return sifSysUserQryRepository.findAll();
	}

	@Override
	public List<SifSysUserQry> findAll(Sort sort) {
		return sifSysUserQryRepository.findAll(sort);
	}

	@Override
	public List<SifSysUserQry> findAll(Iterable<SifSysUserQryPk> ids) {
		return sifSysUserQryRepository.findAllById(ids);
	}

	@Override
	public <S extends SifSysUserQry> List<S> save(Iterable<S> entities) {
		return sifSysUserQryRepository.saveAll(entities);
	}

	@Override
	public void flush() {
		sifSysUserQryRepository.flush();
	}

	@Override
	public <S extends SifSysUserQry> S saveAndFlush(S entity) {
		return sifSysUserQryRepository.saveAndFlush(entity);
	}

	@Override
	public void deleteInBatch(Iterable<SifSysUserQry> entities) {
		sifSysUserQryRepository.deleteInBatch(entities);
	}

	@Override
	public void deleteAllInBatch() {
		sifSysUserQryRepository.deleteAllInBatch();
	}

	@Override
	public SifSysUserQry getOne(SifSysUserQryPk id) {
		return sifSysUserQryRepository.getOne(id);
	}
	
	public Specification<SifSysUserQry> getsSpecification(final SifSysUserQry tmp){
		return new Specification<SifSysUserQry>() {
	        /**@Fields serialVersionUID : TODO(Describe) 
	         * 20180501
			 */
			private static final long serialVersionUID = 1L;

			@Override
	        public Predicate toPredicate(Root<SifSysUserQry> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
	            Predicate predicate = cb.conjunction();
	            List<Expression<Boolean>> expressions = predicate.getExpressions();
	            if (tmp.getRegisterCd() != null) {
	                expressions.add(cb.equal(root.<String>get("registerCd"), tmp.getRegisterCd()));
	            }
	            if (tmp.getUserCd() != null) {
	                expressions.add(cb.equal(root.<String>get("userCd"), tmp.getUserCd()));
	            }
	            if (tmp.getQueryUserCd() != null) {
	                expressions.add(cb.equal(root.<String>get("queryUserCd"), tmp.getQueryUserCd()));
	            }
	            return predicate;
	        }
	    };
	}
	
	@Override
	public List<SifSysUserQry> queryByTemplate(final SifSysUserQry tmp) {
		return sifSysUserQryRepository.findAll(getsSpecification(tmp));
	}
	
	@Override
	public List<SifSysUserQry> queryByTemplate(final SifSysUserQry tmp, Sort sort) {
		return sifSysUserQryRepository.findAll(getsSpecification(tmp), sort);
	}

	@Override
	public Page<SifSysUserQry> queryByTemplate(final SifSysUserQry tmp,
			Pageable pageable) {
		return sifSysUserQryRepository.findAll(getsSpecification(tmp),pageable);
	}

	@Override
	public List<SifSysUserQry> queryQryUsers(String registerCd, String userCd) {
		return sifSysUserQryRepository.findByRegisterCdAndUserCd(registerCd, userCd);
	}

}
