package com.neki.backend.skill;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neki.backend.usuario.Usuario;
import com.neki.backend.usuario.UsuarioNaoEncontradoException;
import com.neki.backend.usuario.UsuarioRepository;
import com.neki.backend.usuario.UsuarioSkill;

@Service
public class AssociarSkillService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private SkillRepository skillRepository;

    public void associarSkill(Long usuarioId, Long skillId, int level) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new UsuarioNaoEncontradoException(usuarioId));

        Skill skill = skillRepository.findById(skillId)
                .orElseThrow(() -> new SkillNaoEncontradaException(skillId));

        usuario.getSkills().add(skill);
        skill.getUsuarios().add(usuario);

        UsuarioSkill usuarioSkill = new UsuarioSkill(usuario, skill, level);

        usuario.addSkill(skill);
        skill.addUsuario(usuario);

        usuarioRepository.save(usuario);
        skillRepository.save(skill);
    }
}
