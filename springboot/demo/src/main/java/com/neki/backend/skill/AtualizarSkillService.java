package com.neki.backend.skill;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neki.backend.usuario.UsuarioSkill;
import com.neki.backend.usuario.UsuarioSkillNaoEncontradaException;
import com.neki.backend.usuario.UsuarioSkillRepository;

@Service
public class AtualizarSkillService {

    @Autowired
    private UsuarioSkillRepository usuarioSkillRepository;

    public void atualizarSkill(Long usuarioSkillId, int novoLevel) {
        UsuarioSkill usuarioSkill = usuarioSkillRepository.findById(usuarioSkillId)
                .orElseThrow(() -> new UsuarioSkillNaoEncontradaException(usuarioSkillId));

        usuarioSkill.setLevel(novoLevel);

        usuarioSkillRepository.save(usuarioSkill);
    }
}

