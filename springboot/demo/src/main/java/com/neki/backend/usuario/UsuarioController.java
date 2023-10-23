package com.neki.backend.usuario;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.neki.backend.skill.ListarSkillsService;
import com.neki.backend.skill.SkillDTO;

import io.swagger.annotations.ApiOperation;

@RestController
public class UsuarioController {
    private final ListarSkillsService listarSkillsService;

    @Autowired
    public UsuarioController(ListarSkillsService listarSkillsService) {
        this.listarSkillsService = listarSkillsService;
    }
    
    @ApiOperation(value = "Obter lista de skills do usuário.")
    @GetMapping("/{usuarioId}/skills")
    public List<SkillDTO> listarSkillsDoUsuario(@PathVariable Long usuarioId) {
        return listarSkillsService.listarSkillsDoUsuario(usuarioId);
    }
}
