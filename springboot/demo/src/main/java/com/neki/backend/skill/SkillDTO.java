package com.neki.backend.skill;

public class SkillDTO {
	
    private String nome;
    private int level;

    public SkillDTO(String nome, int level) {
        this.nome = nome;
        this.level = level;
    }

    public String getNome() {
        return nome;
    }

    public int getLevel() {
        return level;
    }
}