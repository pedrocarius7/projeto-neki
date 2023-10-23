package com.neki.backend.skill;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssociarSkillRepository extends JpaRepository<AssociarSkill, Long>{

}
