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

import com.example.demo.sunline.dao.SifSysBusinessDao;
import com.example.demo.sunline.domain.SifSysBusiness;
import com.example.demo.sunline.domain.SifSysBusinessPk;
import com.example.demo.sunline.repository.SifSysBusinessRepository;

@Service("SifSysBusinessDao")
public class SifSysBusinessDaoImpl implements SifSysBusinessDao {

	@Autowired
	private SifSysBusinessRepository sifSysBusinessRepository;
	
	@Override
	public Page<SifSysBusiness> findAll(Pageable pageable) {
		return sifSysBusinessRepository.findAll(pageable);
	}

	@Override
	public <S extends SifSysBusiness> S save(S entity) {
		return sifSysBusinessRepository.save(entity);
	}

//	@Override
//	public SifSysBusiness findOne(SifSysBusinessPk id) {
//		return sifSysBusinessRepository.findOne(id);
//	}

	@Override
	public boolean exists(SifSysBusinessPk id) {
		return sifSysBusinessRepository.existsById(id);
	}

	@Override
	public long count() {
		return sifSysBusinessRepository.count();
	}

	@Override
	public void delete(SifSysBusinessPk id) {
		sifSysBusinessRepository.deleteById(id);
	}

	@Override
	public void delete(SifSysBusiness entity) {
		sifSysBusinessRepository.delete(entity);
	}

	@Override
	public void delete(Iterable<? extends SifSysBusiness> entities) {
		sifSysBusinessRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		sifSysBusinessRepository.deleteAll();
	}

	@Override
	public List<SifSysBusiness> findAll() {
		return sifSysBusinessRepository.findAll();
	}

	@Override
	public List<SifSysBusiness> findAll(Sort sort) {
		return sifSysBusinessRepository.findAll(sort);
	}

	@Override
	public List<SifSysBusiness> findAll(Iterable<SifSysBusinessPk> ids) {
		return sifSysBusinessRepository.findAllById(ids);
	}

	@Override
	public <S extends SifSysBusiness> List<S> save(Iterable<S> entities) {
		return sifSysBusinessRepository.saveAll(entities);
	}

	@Override
	public void flush() {
		sifSysBusinessRepository.flush();
	}

	@Override
	public <S extends SifSysBusiness> S saveAndFlush(S entity) {
		return sifSysBusinessRepository.saveAndFlush(entity);
	}

	@Override
	public void deleteInBatch(Iterable<SifSysBusiness> entities) {
		sifSysBusinessRepository.deleteInBatch(entities);
	}

	@Override
	public void deleteAllInBatch() {
		sifSysBusinessRepository.deleteAllInBatch();
	}

	@Override
	public SifSysBusiness getOne(SifSysBusinessPk id) {
		return sifSysBusinessRepository.getOne(id);
	}
	
	public Specification<SifSysBusiness> getSpecification(final SifSysBusiness tmp){
		return new Specification<SifSysBusiness>() {
	        /**@Fields serialVersionUID : TODO(Describe) 
	         * 20180501
			 */
			private static final long serialVersionUID = 1L;

			@Override
	        public Predicate toPredicate(Root<SifSysBusiness> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
	            Predicate predicate = cb.conjunction();
	            List<Expression<Boolean>> expressions = predicate.getExpressions();
	            if (tmp.getRegisterCd() != null) {
	                expressions.add(cb.equal(root.<String>get("registerCd"), tmp.getRegisterCd()));
	            }
	            if (tmp.getBusiCd() != null) {
	                expressions.add(cb.equal(root.<String>get("busiCd"), tmp.getBusiCd()));
	            }
	            if (tmp.getBusiName() != null) {
	                expressions.add(cb.like(root.<String>get("busiName"), "%" + tmp.getBusiName() + "%"));
	            }
	            if (tmp.getHaltFlag() != null) {
	                expressions.add(cb.equal(root.<String>get("haltFlag"), tmp.getHaltFlag()));
	            }
	            if (tmp.getAccountRule() != null) {
	                expressions.add(cb.equal(root.<String>get("accountRule"), tmp.getAccountRule()));
	            }
	            if (tmp.getProdRule() != null) {
	                expressions.add(cb.equal(root.<String>get("prodRule"), tmp.getProdRule()));
	            }
	            return predicate;
	        }
	    };
	}
	
	@Override
	public List<SifSysBusiness> queryByTemplate(final SifSysBusiness tmp) {
		return sifSysBusinessRepository.findAll(getSpecification(tmp));
	}

	@Override
	public List<SifSysBusiness> queryByTemplate(final SifSysBusiness tmp, Sort sort) {
		return sifSysBusinessRepository.findAll(getSpecification(tmp),sort);
	}

	@Override
	public Page<SifSysBusiness> queryByTemplate(final SifSysBusiness tmp,
			Pageable pageable) {
		return sifSysBusinessRepository.findAll(getSpecification(tmp),pageable);
	}

}
