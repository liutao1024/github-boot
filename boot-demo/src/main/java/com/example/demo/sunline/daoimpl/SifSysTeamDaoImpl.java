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

import com.example.demo.sunline.dao.SifSysTeamDao;
import com.example.demo.sunline.domain.SifSysTeam;
import com.example.demo.sunline.domain.SifSysTeamPk;
import com.example.demo.sunline.repository.SifSysTeamRepository;

@Service("SifSysTeamDao")
public class SifSysTeamDaoImpl implements SifSysTeamDao {

	@Autowired
	private SifSysTeamRepository sifSysTeamRepository;
	
	@Override
	public Page<SifSysTeam> findAll(Pageable pageable) {
		return sifSysTeamRepository.findAll(pageable);
	}

	@Override
	public <S extends SifSysTeam> S save(S entity) {
		return sifSysTeamRepository.save(entity);
	}

//	@Override
//	public SifSysTeam findOne(SifSysTeamPk id) {
//		return sifSysTeamRepository.findOne(id);
//	}

	@Override
	public boolean exists(SifSysTeamPk id) {
		return sifSysTeamRepository.existsById(id);
	}

	@Override
	public long count() {
		return sifSysTeamRepository.count();
	}

	@Override
	public void delete(SifSysTeamPk id) {
		sifSysTeamRepository.deleteById(id);
	}

	@Override
	public void delete(SifSysTeam entity) {
		sifSysTeamRepository.delete(entity);
	}

	@Override
	public void delete(Iterable<? extends SifSysTeam> entities) {
		sifSysTeamRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		sifSysTeamRepository.deleteAll();
	}

	@Override
	public List<SifSysTeam> findAll() {
		return sifSysTeamRepository.findAll();
	}

	@Override
	public List<SifSysTeam> findAll(Sort sort) {
		return sifSysTeamRepository.findAll(sort);
	}

	@Override
	public List<SifSysTeam> findAll(Iterable<SifSysTeamPk> ids) {
		return sifSysTeamRepository.findAllById(ids);
	}

	@Override
	public <S extends SifSysTeam> List<S> save(Iterable<S> entities) {
		return sifSysTeamRepository.saveAll(entities);
	}

	@Override
	public void flush() {
		sifSysTeamRepository.flush();
	}

	@Override
	public <S extends SifSysTeam> S saveAndFlush(S entity) {
		return sifSysTeamRepository.saveAndFlush(entity);
	}

	@Override
	public void deleteInBatch(Iterable<SifSysTeam> entities) {
		sifSysTeamRepository.deleteInBatch(entities);
	}

	@Override
	public void deleteAllInBatch() {
		sifSysTeamRepository.deleteAllInBatch();
	}

	@Override
	public SifSysTeam getOne(SifSysTeamPk id) {
		return sifSysTeamRepository.getOne(id);
	}
	
	public Specification<SifSysTeam> getsSpecification(final SifSysTeam tmp){
		return new Specification<SifSysTeam>() {
	        /**@Fields serialVersionUID : TODO(Describe)
	         * 20180501 
			 */
			private static final long serialVersionUID = 1L;

			@Override
	        public Predicate toPredicate(Root<SifSysTeam> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
	            Predicate predicate = cb.conjunction();
	            List<Expression<Boolean>> expressions = predicate.getExpressions();
	            if (tmp.getRegisterCd() != null) {
	                expressions.add(cb.equal(root.<String>get("registerCd"), tmp.getRegisterCd()));
	            }
	            if (tmp.getTeamCd() != null) {
	                expressions.add(cb.equal(root.<String>get("teamCd"), tmp.getTeamCd()));
	            }
	            if (tmp.getTeamName() != null) {
	                expressions.add(cb.like(root.<String>get("teamName"), "%" + tmp.getTeamName() + "%"));
	            }
	            if (tmp.getBranchCd() != null) {
	                expressions.add(cb.equal(root.<String>get("branchCd"), tmp.getBranchCd()));
	            }
	            return predicate;
	        }
	    };
	}
	
	@Override
	public List<SifSysTeam> queryByTemplate(final SifSysTeam tmp) {
		return sifSysTeamRepository.findAll(getsSpecification(tmp));
	}
	
	@Override
	public List<SifSysTeam> queryByTemplate(final SifSysTeam tmp ,Sort sort) {
		return sifSysTeamRepository.findAll(getsSpecification(tmp), sort);
	}

	@Override
	public Page<SifSysTeam> queryByTemplate(final SifSysTeam tmp,
			Pageable pageable) {
		return sifSysTeamRepository.findAll(getsSpecification(tmp),pageable);
	}

}
