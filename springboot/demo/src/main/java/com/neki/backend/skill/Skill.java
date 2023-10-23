package com.neki.backend.skill;



import java.util.HashSet;
import java.util.Set;

import com.neki.backend.usuario.Usuario;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity
public class Skill {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nome;
    
    public int level;
    
    @ManyToMany(mappedBy = "skills")
    private Set<Usuario> usuarios = new HashSet<>();

    public void addUsuario(Usuario usuario) {
        this.usuarios.add(usuario);
        usuario.getSkills().add(this);
    }
    
    
    //GETTERS E SETTERS
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Set<Usuario> getUsuarios() {
		return usuarios;
	}

	public void setUsuarios(Set<Usuario> usuarios) {
		this.usuarios = usuarios;
	}


	public int getLevel() {
		return this.level;
	}


	public void setLevel(int level) {
		this.level = level;
	}

}
