package com.neki.backend.usuario;

public class UsuarioSkillNaoEncontradaException extends RuntimeException{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public UsuarioSkillNaoEncontradaException(Long usuarioId) {
        super("Skill de usuário não encontrada");
    }

}
