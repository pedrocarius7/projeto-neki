package com.neki.backend.skill;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neki.backend.usuario.Usuario;
import com.neki.backend.usuario.UsuarioNaoEncontradoException;
import com.neki.backend.usuario.UsuarioRepository;

@Service
public class ListarSkillsService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<SkillDTO> listarSkillsDoUsuario(Long usuarioId) {
    	
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new UsuarioNaoEncontradoException(usuarioId));

        List<SkillDTO> skillsDoUsuario = usuario.getSkills().stream()
                .map(skill -> new SkillDTO(skill.getNome(), skill.getLevel()))
                .collect(Collectors.toList());

        return skillsDoUsuario;
    }
}