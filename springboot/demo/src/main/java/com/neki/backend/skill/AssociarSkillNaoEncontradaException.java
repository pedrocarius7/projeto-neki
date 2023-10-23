package com.neki.backend.skill;

public class AssociarSkillNaoEncontradaException extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public AssociarSkillNaoEncontradaException(Long skillId) {
        super("Associar Skill " + skillId + " não encontrada");
    }

}
