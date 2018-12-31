package com.example.demo.sunline.daoimpl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
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

import com.example.demo.sunline.dao.SifSysBrchQryDao;
import com.example.demo.sunline.domain.SifSysBrchQry;
import com.example.demo.sunline.domain.SifSysBrchQryPk;
import com.example.demo.sunline.repository.SifSysBrchQryRepository;

@Service("SifSysBrchQryDao")
public class SifSysBrchQryDaoImpl implements SifSysBrchQryDao {

	@Autowired
	private SifSysBrchQryRepository sifSysBrchQryRepository;
	@PersistenceContext
	private EntityManager em;
	
	@Override
	public Page<SifSysBrchQry> findAll(Pageable pageable) {
		return sifSysBrchQryRepository.findAll(pageable);
	}

	@Override
	public <S extends SifSysBrchQry> S save(S entity) {
		return sifSysBrchQryRepository.save(entity);
	}

//	@Override
//	public SifSysBrchQry findOne(SifSysBrchQryPk id) {
//		return sifSysBrchQryRepository.findOne(id);
//	}

	@Override
	public boolean exists(SifSysBrchQryPk id) {
		return sifSysBrchQryRepository.existsById(id);
	}

	@Override
	public long count() {
		return sifSysBrchQryRepository.count();
	}

	@Override
	public void delete(SifSysBrchQryPk id) {
		sifSysBrchQryRepository.deleteById(id);
	}

	@Override
	public void delete(SifSysBrchQry entity) {
		sifSysBrchQryRepository.delete(entity);
	}

	@Override
	public void delete(Iterable<? extends SifSysBrchQry> entities) {
		sifSysBrchQryRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		sifSysBrchQryRepository.deleteAll();
	}

	@Override
	public List<SifSysBrchQry> findAll() {
		return sifSysBrchQryRepository.findAll();
	}

	@Override
	public List<SifSysBrchQry> findAll(Sort sort) {
		return sifSysBrchQryRepository.findAll(sort);
	}

	@Override
	public List<SifSysBrchQry> findAll(Iterable<SifSysBrchQryPk> ids) {
		return sifSysBrchQryRepository.findAllById(ids);
	}

	@Override
	public <S extends SifSysBrchQry> List<S> save(Iterable<S> entities) {
		return sifSysBrchQryRepository.saveAll(entities);
	}

	@Override
	public void flush() {
		sifSysBrchQryRepository.flush();
	}

	@Override
	public <S extends SifSysBrchQry> S saveAndFlush(S entity) {
		return sifSysBrchQryRepository.saveAndFlush(entity);
	}

	@Override
	public void deleteInBatch(Iterable<SifSysBrchQry> entities) {
		sifSysBrchQryRepository.deleteInBatch(entities);
	}

	@Override
	public void deleteAllInBatch() {
		sifSysBrchQryRepository.deleteAllInBatch();
	}

	@Override
	public SifSysBrchQry getOne(SifSysBrchQryPk id) {
		return sifSysBrchQryRepository.getOne(id);
	}
	
	public Specification<SifSysBrchQry> getSpeifiSpecification(final SifSysBrchQry tmp){
		return new Specification<SifSysBrchQry>() {
	        /**@Fields serialVersionUID : TODO(Describe) 
	         * 20180501
			 */
			private static final long serialVersionUID = 1L;

			@Override
	        public Predicate toPredicate(Root<SifSysBrchQry> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
	            Predicate predicate = cb.conjunction();
	            List<Expression<Boolean>> expressions = predicate.getExpressions();
	            if (tmp.getRegisterCd() != null) {
	                expressions.add(cb.equal(root.<String>get("registerCd"), tmp.getRegisterCd()));
	            }
	            if (tmp.getBranchCd() != null) {
	                expressions.add(cb.equal(root.<String>get("branchCd"), tmp.getBranchCd()));
	            }
	            if (tmp.getQueryBranchCd() != null) {
	                expressions.add(cb.equal(root.<String>get("queryBranchCd"), tmp.getQueryBranchCd()));
	            }
	            return predicate;
	        }
	    };
	}

	@Override
	public List<SifSysBrchQry> queryByTemplate(final SifSysBrchQry tmp) {
		return sifSysBrchQryRepository.findAll(getSpeifiSpecification(tmp));
	}

	@Override
	public List<SifSysBrchQry> queryByTemplate(final SifSysBrchQry tmp, Sort sort) {
		return sifSysBrchQryRepository.findAll(getSpeifiSpecification(tmp),sort);
	}

	@Override
	public Page<SifSysBrchQry> queryByTemplate(final SifSysBrchQry tmp,
			Pageable pageable) {
		return sifSysBrchQryRepository.findAll(getSpeifiSpecification(tmp),pageable);
	}

	@Override
	public List<SifSysBrchQry> queryQryBrchs(String registerCd, String branchCd) {
		return sifSysBrchQryRepository.findByRegisterCdAndBranchCd(registerCd, branchCd);
	}

}
