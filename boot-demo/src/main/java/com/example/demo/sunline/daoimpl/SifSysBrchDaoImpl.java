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

import com.example.demo.sunline.dao.SifSysBrchDao;
import com.example.demo.sunline.domain.SifSysBrch;
import com.example.demo.sunline.domain.SifSysBrchPk;
import com.example.demo.sunline.repository.SifSysBrchRepository;

@Service("SifSysBrchDao")
public class SifSysBrchDaoImpl implements SifSysBrchDao {

	@Autowired
	private SifSysBrchRepository sifSysBrchRepository;
	
	@Override
	public Page<SifSysBrch> findAll(Pageable pageable) {
		return sifSysBrchRepository.findAll(pageable);
	}

	@Override
	public <S extends SifSysBrch> S save(S entity) {
		return sifSysBrchRepository.save(entity);
	}

//	@Override
//	public SifSysBrch findOne(SifSysBrchPk id) {
//		return sifSysBrchRepository.findOne(id);
//	}

	@Override
	public boolean exists(SifSysBrchPk id) {
		return sifSysBrchRepository.existsById(id);
	}

	@Override
	public long count() {
		return sifSysBrchRepository.count();
	}

	@Override
	public void delete(SifSysBrchPk id) {
		sifSysBrchRepository.deleteById(id);
	}

	@Override
	public void delete(SifSysBrch entity) {
		sifSysBrchRepository.delete(entity);
	}

	@Override
	public void delete(Iterable<? extends SifSysBrch> entities) {
		sifSysBrchRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		sifSysBrchRepository.deleteAll();
	}

	@Override
	public List<SifSysBrch> findAll() {
		return sifSysBrchRepository.findAll();
	}

	@Override
	public List<SifSysBrch> findAll(Sort sort) {
		return sifSysBrchRepository.findAll(sort);
	}

	@Override
	public List<SifSysBrch> findAll(Iterable<SifSysBrchPk> ids) {
		return sifSysBrchRepository.findAllById(ids);
	}

	@Override
	public <S extends SifSysBrch> List<S> save(Iterable<S> entities) {
		return sifSysBrchRepository.saveAll(entities);
	}

	@Override
	public void flush() {
		sifSysBrchRepository.flush();
	}

	@Override
	public <S extends SifSysBrch> S saveAndFlush(S entity) {
		return sifSysBrchRepository.saveAndFlush(entity);
	}

	@Override
	public void deleteInBatch(Iterable<SifSysBrch> entities) {
		sifSysBrchRepository.deleteInBatch(entities);
	}

	@Override
	public void deleteAllInBatch() {
		sifSysBrchRepository.deleteAllInBatch();
	}

	@Override
	public SifSysBrch getOne(SifSysBrchPk id) {
		return sifSysBrchRepository.getOne(id);
	}
	
	public Specification<SifSysBrch> getSpecification(final SifSysBrch tmp){
		return new Specification<SifSysBrch>() {
	        /**@Fields serialVersionUID : TODO(Describe) 
	         * 20180501
			 */
			private static final long serialVersionUID = 1L;

			@Override
	        public Predicate toPredicate(Root<SifSysBrch> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
	            Predicate predicate = cb.conjunction();
	            List<Expression<Boolean>> expressions = predicate.getExpressions();
	            if (tmp.getRegisterCd() != null) {
	                expressions.add(cb.equal(root.<String>get("registerCd"), tmp.getRegisterCd()));
	            }
	            if (tmp.getBranchCd() != null) {
	                expressions.add(cb.equal(root.<String>get("branchCd"), tmp.getBranchCd()));
	            }
	            if (tmp.getBranchName() != null) {
	                expressions.add(cb.like(root.<String>get("busiName"), "%" + tmp.getBranchName() + "%"));
	            }
	            if (tmp.getParentBranchCd() != null) {
	                expressions.add(cb.equal(root.<String>get("parentBranchCd"), tmp.getParentBranchCd()));
	            }
	            if (tmp.getRank() != null) {
	                expressions.add(cb.equal(root.<String>get("rank"), tmp.getRank()));
	            }
	            if (tmp.getStatus() != null) {
	                expressions.add(cb.equal(root.<String>get("status"), tmp.getStatus()));
	            }
	            if (tmp.getSortno() != null) {
	                expressions.add(cb.equal(root.<String>get("sortno"), tmp.getSortno()));
	            }
	            if (tmp.getBranchAddr() != null) {
	                expressions.add(cb.equal(root.<String>get("branchAddr"), tmp.getBranchAddr()));
	            }
	            if (tmp.getBranchZipcode() != null) {
	                expressions.add(cb.equal(root.<String>get("branchZipCode"), tmp.getBranchZipcode()));
	            }
	            if (tmp.getBranchType() != null) {
	                expressions.add(cb.equal(root.<String>get("branchType"), tmp.getBranchType()));
	            }
	            return predicate;
	        }
	    };
	}
	
	@Override
	public List<SifSysBrch> queryByTemplate(final SifSysBrch tmp) {
		return sifSysBrchRepository.findAll(getSpecification(tmp));
	}
	
	@Override
	public List<SifSysBrch> queryByTemplate(final SifSysBrch tmp, Sort sort) {
		return sifSysBrchRepository.findAll(getSpecification(tmp),sort);
	}

	@Override
	public Page<SifSysBrch> queryByTemplate(final SifSysBrch tmp,
			Pageable pageable) {
		return sifSysBrchRepository.findAll(getSpecification(tmp),pageable);
	}

	@Override
	public List<SifSysBrch> queryParentBranchIsNull(String registerCd) {
		return sifSysBrchRepository.findByParentBranchIsNull(registerCd);
	}

	@Override
	public List<SifSysBrch> queryChildBrchs(String registerCd,
			String parentBranchCd) {
		return sifSysBrchRepository.findByRegisterCdAndParentBranchCd(registerCd, parentBranchCd);
	}

	@Override
	public int countChildBrchs(String registerCd, String branchCd) {
		return sifSysBrchRepository.countByRegisterCdAndParentBranchCd(registerCd, branchCd);
	}

}
