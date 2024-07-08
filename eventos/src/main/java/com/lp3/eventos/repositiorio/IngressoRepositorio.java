package com.lp3.eventos.repositiorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lp3.eventos.modelo.Ingresso;
import com.lp3.eventos.modelo.Usuario;

import java.util.List;


@Repository
public interface IngressoRepositorio extends JpaRepository<Ingresso, Long>{

    List<Ingresso> findByUsuario(Usuario usuario);
    List<Ingresso> findByUsuarioId(Long usuarioId);
}
