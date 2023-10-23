package com.neki.backend.skill;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.neki.backend.usuario.Usuario;
import com.neki.backend.usuario.UsuarioRepository;
import com.neki.backend.usuario.UsuarioSkill;
import com.neki.backend.usuario.UsuarioSkillRepository;

@Service
public class ExcluirSkillService {

    @Autowired
    private UsuarioRepository usuarioRepository;
    
    @Autowired
    private UsuarioSkillRepository usuarioSkillRepository;

    @Autowired
    private SkillRepository skillRepository;
    

    public void excluirAssociacaoSkill(Long associacaoSkillId) {
    	UsuarioSkill associarSkill = usuarioSkillRepository.findById(associacaoSkillId)
                .orElseThrow(() -> new AssociarSkillNaoEncontradaException(associacaoSkillId));

        Usuario usuario = associarSkill.getUsuario();
        Skill skill = associarSkill.getSkill();
        usuario.getSkills().remove(skill);
        skill.getUsuarios().remove(usuario);

        usuarioSkillRepository.delete(associarSkill);

        usuarioRepository.save(usuario);
        skillRepository.save(skill);
    }
}
