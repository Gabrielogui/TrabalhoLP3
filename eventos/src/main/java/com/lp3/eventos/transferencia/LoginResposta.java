package com.lp3.eventos.transferencia;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResposta {
    private String nome;

    public LoginResposta(String nome) {
        this.nome = nome;
    }
}
