package com.neki.backend.usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioSkillRepository extends JpaRepository<UsuarioSkill, Long>{

}
