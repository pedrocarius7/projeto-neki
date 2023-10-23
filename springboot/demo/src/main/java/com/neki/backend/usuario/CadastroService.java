package com.neki.backend.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CadastroService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public Usuario cadastrarUsuario(CadastroRequest request) {
        if (usuarioRepository.findByLogin(request.getLogin()) != null) {
            throw new RuntimeException("Login já em uso.");
        }

        Usuario usuario = new Usuario();
        usuario.setLogin(request.getLogin());

        String senhaCriptografada = passwordEncoder.encode(request.getSenha());
        usuario.setSenha(senhaCriptografada);

        return usuarioRepository.save(usuario);
    }
}
