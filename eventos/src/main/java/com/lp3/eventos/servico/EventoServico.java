package com.lp3.eventos.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.lp3.eventos.modelo.Evento;
import com.lp3.eventos.modelo.RespostaModelo;
import com.lp3.eventos.repositiorio.EventoRepositorio;

import java.util.Optional;

@Service
public class EventoServico {

    @Autowired
    private EventoRepositorio eventoRepositorio;

    @Autowired
    private RespostaModelo respostaModelo;

    public ResponseEntity<?> cadastrarEvento(@RequestBody Evento evento) {
        if(evento.getNome().isEmpty() || evento.getDescricao().isEmpty()) {
            respostaModelo.setMensagem("Preencha todos os campos");
            return new ResponseEntity<RespostaModelo>(respostaModelo, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<Evento>(eventoRepositorio.save(evento), HttpStatus.CREATED);
        }
    }

    public ResponseEntity<?> deletarEvento(Long id) {
        eventoRepositorio.deleteById(id);
        respostaModelo.setMensagem("Deletado com sucesso!");
        return new ResponseEntity<RespostaModelo>(respostaModelo, HttpStatus.OK);
    }

    public Iterable<Evento> listar() {
        return eventoRepositorio.findAll();
    }

    public ResponseEntity<?> atualizarEvento(@RequestBody Evento evento){
        return new ResponseEntity<Evento>(eventoRepositorio.save(evento), HttpStatus.OK);
    }
/* 
    public Evento atualizarEvento(Long id, Evento eventoAtualizado) {
        Optional<Evento> eventoExistente = eventoRepositorio.findById(id);
        if (eventoExistente.isPresent()) {
            Evento evento = eventoExistente.get();
            evento.setNome(eventoAtualizado.getNome());
            evento.setValor(eventoAtualizado.getValor());
            evento.setData(eventoAtualizado.getData());
            evento.setDescricao(eventoAtualizado.getDescricao());
            evento.setImagem(eventoAtualizado.getImagem());
            return eventoRepositorio.save(evento);
        }
        throw new RuntimeException("Evento não encontrado");
    }*/
}




