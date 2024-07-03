package com.lp3.eventos.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Ingresso")
public class Ingresso {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "evento", nullable = false)
    private Evento evento;

    @Column(name = "usuario", nullable = false)
    private Usuario usuario;
}
