package com.neki.backend.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;

@RestController
public class CadastroController {

    @Autowired
    private CadastroService cadastroService;

    @ApiOperation(value = "Adição de cadastro do usuário.")
    @PostMapping("/cadastro")
    public Usuario cadastrarUsuario(@RequestBody CadastroRequest request) {
        return cadastroService.cadastrarUsuario(request);
    }
}
