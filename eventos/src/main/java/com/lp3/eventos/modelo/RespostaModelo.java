package com.lp3.eventos.modelo;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component // |SPRING vai instanciar a  classe
@Getter
@Setter
public class RespostaModelo {
    
    private String mensagem;
}
