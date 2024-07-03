package com.lp3.eventos.repositiorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lp3.eventos.modelo.Evento;

@Repository
public interface EventoRepositorio extends JpaRepository<Evento, Long>{
    
}
