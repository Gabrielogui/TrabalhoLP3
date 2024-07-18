package com.lp3.eventos.servico;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.lp3.eventos.modelo.Evento;
import com.lp3.eventos.modelo.Ingresso;
import com.lp3.eventos.modelo.RespostaModelo;
import com.lp3.eventos.modelo.Usuario;
import com.lp3.eventos.repositiorio.EventoRepositorio;
import com.lp3.eventos.repositiorio.IngressoRepositorio;
import com.lp3.eventos.repositiorio.UsuarioRepositorio;

@Service
public class IngressoServico {

    // |=======| AUTOWIRED / ATRIBUTOS |=======|
    // ======= INGRESSO REPOSITÓRIO =======
    @Autowired
    private IngressoRepositorio ingressoRepositorio;

    // ======= RESPOSTA MODELO =======
    @Autowired
    private RespostaModelo respostaModelo;

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    @Autowired
    private EventoRepositorio eventoRepositorio;

    // |=======| COMPRA DE INGRESSO |=======|
    public ResponseEntity<?> comprarIngresso(@RequestBody Ingresso ingresso){
        return new ResponseEntity<Ingresso>(ingressoRepositorio.save(ingresso), HttpStatus.CREATED);
    }

    // |=======| VISUALIZAR INGRESSOS |=======|
    public Iterable<Ingresso> visualizarIngresso(@RequestBody Usuario usuario){
        return ingressoRepositorio.findByUsuario(usuario);
    }

    // |=======| LISTAR INGREESSOS |=======|
    public Iterable<Ingresso> listarIngressos(){
        return ingressoRepositorio.findAll();
    }

    // |=======| REEMBOLSAR INGRESSOS |=======|
    public ResponseEntity<?> reembolsarIngresso(@PathVariable Long id){
        ingressoRepositorio.deleteById(id);

        respostaModelo.setMensagem("Seu ingresso foi reembolsado com sucesso!");
        return new ResponseEntity<RespostaModelo>(respostaModelo, HttpStatus.BAD_REQUEST);
    }
}
