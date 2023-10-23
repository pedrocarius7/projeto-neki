package com.neki.backend.skill;

public class SkillNaoEncontradaException extends RuntimeException {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public SkillNaoEncontradaException(Long skillId) {
        super("Skill com ID " + skillId + " não encontrada");
    }
}