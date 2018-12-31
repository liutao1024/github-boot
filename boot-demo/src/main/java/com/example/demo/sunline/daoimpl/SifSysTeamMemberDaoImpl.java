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

import com.example.demo.sunline.dao.SifSysTeamMemberDao;
import com.example.demo.sunline.domain.SifSysTeamMember;
import com.example.demo.sunline.domain.SifSysTeamMemberPk;
import com.example.demo.sunline.repository.SifSysTeamMemberRepository;

@Service("SifSysTeamMemberDao")
public class SifSysTeamMemberDaoImpl implements SifSysTeamMemberDao {

	@Autowired
	private SifSysTeamMemberRepository sifSysTeamMemberRepository;
	
	@Override
	public Page<SifSysTeamMember> findAll(Pageable pageable) {
		return sifSysTeamMemberRepository.findAll(pageable);
	}

	@Override
	public <S extends SifSysTeamMember> S save(S entity) {
		return sifSysTeamMemberRepository.save(entity);
	}

//	@Override
//	public SifSysTeamMember findOne(SifSysTeamMemberPk id) {
//		return sifSysTeamMemberRepository.findOne(id);
//	}

	@Override
	public boolean exists(SifSysTeamMemberPk id) {
		return sifSysTeamMemberRepository.existsById(id);
	}

	@Override
	public long count() {
		return sifSysTeamMemberRepository.count();
	}

	@Override
	public void delete(SifSysTeamMemberPk id) {
		sifSysTeamMemberRepository.deleteById(id);
	}

	@Override
	public void delete(SifSysTeamMember entity) {
		sifSysTeamMemberRepository.delete(entity);
	}

	@Override
	public void delete(Iterable<? extends SifSysTeamMember> entities) {
		sifSysTeamMemberRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		sifSysTeamMemberRepository.deleteAll();
	}

	@Override
	public List<SifSysTeamMember> findAll() {
		return sifSysTeamMemberRepository.findAll();
	}

	@Override
	public List<SifSysTeamMember> findAll(Sort sort) {
		return sifSysTeamMemberRepository.findAll(sort);
	}

	@Override
	public List<SifSysTeamMember> findAll(Iterable<SifSysTeamMemberPk> ids) {
		return sifSysTeamMemberRepository.findAllById(ids);
	}

	@Override
	public <S extends SifSysTeamMember> List<S> save(Iterable<S> entities) {
		return sifSysTeamMemberRepository.saveAll(entities);
	}

	@Override
	public void flush() {
		sifSysTeamMemberRepository.flush();
	}

	@Override
	public <S extends SifSysTeamMember> S saveAndFlush(S entity) {
		return sifSysTeamMemberRepository.saveAndFlush(entity);
	}

	@Override
	public void deleteInBatch(Iterable<SifSysTeamMember> entities) {
		sifSysTeamMemberRepository.deleteInBatch(entities);
	}

	@Override
	public void deleteAllInBatch() {
		sifSysTeamMemberRepository.deleteAllInBatch();
	}

	@Override
	public SifSysTeamMember getOne(SifSysTeamMemberPk id) {
		return sifSysTeamMemberRepository.getOne(id);
	}
	
	public Specification<SifSysTeamMember> getSpecification(final SifSysTeamMember tmp){
		return new Specification<SifSysTeamMember>() {
	        /**@Fields serialVersionUID : TODO(Describe) 
	         * 20180501
			 */
			private static final long serialVersionUID = 1L;

			@Override
	        public Predicate toPredicate(Root<SifSysTeamMember> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
	            Predicate predicate = cb.conjunction();
	            List<Expression<Boolean>> expressions = predicate.getExpressions();
	            if (tmp.getRegisterCd() != null) {
	                expressions.add(cb.equal(root.<String>get("registerCd"), tmp.getRegisterCd()));
	            }
	            if (tmp.getTeamCd() != null) {
	                expressions.add(cb.equal(root.<String>get("teamCd"), tmp.getTeamCd()));
	            }
	            if (tmp.getUserCd() != null) {
	                expressions.add(cb.equal(root.<String>get("userCd"), tmp.getUserCd()));
	            }
	            return predicate;
	        }
	    };
	}
	
	@Override
	public List<SifSysTeamMember> queryByTemplate(final SifSysTeamMember tmp) {
		return sifSysTeamMemberRepository.findAll(getSpecification(tmp));
	}

	@Override
	public List<SifSysTeamMember> queryByTemplate(final SifSysTeamMember tmp, Sort sort) {
		return sifSysTeamMemberRepository.findAll(getSpecification(tmp), sort);
	}
	
	@Override
	public Page<SifSysTeamMember> queryByTemplate(final SifSysTeamMember tmp,
			Pageable pageable) {
		return sifSysTeamMemberRepository.findAll(getSpecification(tmp),pageable);
	}

	@Override
	public List<SifSysTeamMember> findByRegisterCdAndTeamCd(String registerCd,
			String teamCd) {
		return sifSysTeamMemberRepository.findByRegisterCdAndTeamCd(registerCd, teamCd);
	}

}
