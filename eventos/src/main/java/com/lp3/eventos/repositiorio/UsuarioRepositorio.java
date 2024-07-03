package com.lp3.eventos.repositiorio;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lp3.eventos.modelo.Usuario;


// Repositório: Responsavel por comuniccar com banco de dados
@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Long> {
    
   Optional<Usuario> findByEmail(String email);
}
