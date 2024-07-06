package com.lp3.eventos.modelo;

//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Evento")
@Getter
@Setter
public class Evento {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "valor", nullable = false, columnDefinition = "DECIMAL(10, 2)")
    private float valor;

    @Column(name = "data", nullable = false)
    private String data;

    @Column(name = "descricao", nullable = false)
    private String descricao;

    
}
