package com.example.demo.sunline.daoimpl;

import java.util.Date;
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

import com.example.demo.sunline.dao.SifSysParaDao;
import com.example.demo.sunline.domain.SifSysPara;
import com.example.demo.sunline.repository.SifSysParaRepository;

@Service("SifSysParaDao")
public class SifSysParaDaoImpl implements SifSysParaDao {
	
	@Autowired
	SifSysParaRepository sifSysParaRepository;

	@Override
	public Page<SifSysPara> findAll(Pageable pageable) {
		return sifSysParaRepository.findAll(pageable);
	}

	@Override
	public <S extends SifSysPara> S save(S entity) {
		return sifSysParaRepository.save(entity);
	}

//	@Override
//	public SifSysPara findOne(String id) {
//		return sifSysParaRepository.findOne(id);
//	}

	@Override
	public boolean exists(String id) {
		return sifSysParaRepository.existsById(id);
	}

	@Override
	public long count() {
		return sifSysParaRepository.count();
	}

	@Override
	public void delete(String id) {
		sifSysParaRepository.deleteById(id);
	}

	@Override
	public void delete(SifSysPara entity) {
		sifSysParaRepository.delete(entity);
	}

	@Override
	public void delete(Iterable<? extends SifSysPara> entities) {
		sifSysParaRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		sifSysParaRepository.deleteAll();
	}

	@Override
	public List<SifSysPara> findAll() {
		return sifSysParaRepository.findAll();
	}

	@Override
	public List<SifSysPara> findAll(Sort sort) {
		return sifSysParaRepository.findAll(sort);
	}

	@Override
	public List<SifSysPara> findAll(Iterable<String> ids) {
		return sifSysParaRepository.findAllById(ids);
	}

	@Override
	public <S extends SifSysPara> List<S> save(Iterable<S> entities) {
		return sifSysParaRepository.saveAll(entities);
	}

	@Override
	public void flush() {
		sifSysParaRepository.flush();
	}

	@Override
	public <S extends SifSysPara> S saveAndFlush(S entity) {
		return sifSysParaRepository.saveAndFlush(entity);
	}

	@Override
	public void deleteInBatch(Iterable<SifSysPara> entities) {
		sifSysParaRepository.deleteInBatch(entities);;
	}

	@Override
	public void deleteAllInBatch() {
		sifSysParaRepository.deleteAllInBatch();
	}

	@Override
	public SifSysPara getOne(String id) {
		return sifSysParaRepository.getOne(id);
	}

	@Override
	public SifSysPara findByRegisterCd(String registerCd) {
		return sifSysParaRepository.findByRegisterCd(registerCd);
	}
	
	@Override
	public Specification<SifSysPara> getSpecification(final SifSysPara tmp){
		return new Specification<SifSysPara>() {
	        /**@Fields serialVersionUID : TODO(Describe) 
	         * 20180501
			 */
			private static final long serialVersionUID = 1L;

			@Override
	        public Predicate toPredicate(Root<SifSysPara> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
	            Predicate predicate = cb.conjunction();
	            List<Expression<Boolean>> expressions = predicate.getExpressions();
	            if (tmp.getRegisterCd() != null) {
	                expressions.add(cb.equal(root.<String>get("registerCd"), tmp.getRegisterCd()));
	            }
	            if (tmp.getSysDt() != null) {
	                expressions.add(cb.equal(root.<String>get("sysDt"), tmp.getSysDt()));
	            }
	            if (tmp.getLastSysDt() != null) {
	                expressions.add(cb.equal(root.<String>get("lastSysDt"),tmp.getLastSysDt()));
	            }
	            if (tmp.getPasswordError() != null) {
	                expressions.add(cb.equal(root.<String>get("passwordError"), tmp.getPasswordError()));
	            }
	            if (tmp.getFreezenPassword() != null) {
	                expressions.add(cb.equal(root.<String>get("freezenPassword"), tmp.getFreezenPassword()));
	            }
	            if (tmp.getYearDays() != null) {
	                expressions.add(cb.equal(root.<String>get("yearDays"), tmp.getYearDays()));
	            }
	            if (tmp.getMonthDays() != null) {
	                expressions.add(cb.equal(root.<String>get("monthDays"), tmp.getMonthDays()));
	            }
	            if (tmp.getOperAuthDefault() != null) {
	                expressions.add(cb.equal(root.<String>get("operAuthDefault"), tmp.getOperAuthDefault()));
	            }
	            if (tmp.getQueryAuthDefault() != null) {
	                expressions.add(cb.equal(root.<String>get("queryAuthDefault"), tmp.getQueryAuthDefault()));
	            }
	            return predicate;
	        }
	    };
	}

	@Override
	public List<SifSysPara> queryEntitiesByTemplate(SifSysPara tmp) {
		return sifSysParaRepository.findAll(getSpecification(tmp));
	}
	
	@Override
	public List<SifSysPara> queryEntitiesByTemplate(SifSysPara tmp, Sort sort) {
		return sifSysParaRepository.findAll(getSpecification(tmp),sort);
	}

	@Override
	public Page<SifSysPara> queryEntitiesByTemplate(final SifSysPara tmp,
			Pageable pageable) {
		Page<SifSysPara> page = sifSysParaRepository.findAll(getSpecification(tmp),pageable);
	    return page;
	}

	@Override
	public int switchSysDate(String registerCd, Date lastSysDt, Date sysDt) {
		return sifSysParaRepository.switchSysDate(registerCd, lastSysDt, sysDt);
	}

	

}
