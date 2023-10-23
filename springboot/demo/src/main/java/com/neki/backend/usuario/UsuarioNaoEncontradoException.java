package com.neki.backend.usuario;

public class UsuarioNaoEncontradoException extends RuntimeException {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public UsuarioNaoEncontradoException(Long usuarioId) {
        super("Usuário com ID " + usuarioId + " não encontrado");
    }
}