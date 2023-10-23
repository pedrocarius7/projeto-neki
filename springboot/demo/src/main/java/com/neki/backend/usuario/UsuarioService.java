package com.neki.backend.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public void salvarUsuario(Usuario usuario) {
        usuario.setSenha(bCryptPasswordEncoder.encode(usuario.getSenha()));
        usuarioRepository.save(usuario);
    }

    public boolean autenticarUsuario(String email, String senha) {
        Usuario usuario = usuarioRepository.findByEmail(email);
        return usuario != null && bCryptPasswordEncoder.matches(senha, usuario.getSenha());
    }

}
