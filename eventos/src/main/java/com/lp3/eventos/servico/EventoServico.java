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

@Service // Para que o spring entenda que é camada de servico
public class EventoServico {
    
    // |=======| AUTOWIRED / ATRIBUTOS |=======|
    @Autowired
    private EventoRepositorio eventoRepositorio;

    @Autowired
    private RespostaModelo respostaModelo;

    // |=======| CADASTRAR EVENTOS |=======|
    public ResponseEntity<?> cadastrarEvento(@RequestBody Evento evento){
       if(evento.getNome().equals(" ") || evento.getDescricao().equals(" ") || evento.getData().equals("") || evento.getUsuario().getId() == null){
            respostaModelo.setMensagem("Preencha todos os campos");
            return new ResponseEntity<RespostaModelo>(respostaModelo, HttpStatus.BAD_REQUEST);
        }else{
            System.out.println("dadadadada");
            return new ResponseEntity<Evento>(eventoRepositorio.save(evento), HttpStatus.CREATED);
        }
    }

    // |=======| EDITAR EVENTOS |=======|
    public ResponseEntity<?> editar(@RequestBody Evento evento){
        if(evento.getNome().equals(" ") || evento.getDescricao().equals(" ") || evento.getData().equals("") || evento.getUsuario().getId() == null){
            respostaModelo.setMensagem("Preencha todos os campos");
            return new ResponseEntity<RespostaModelo>(respostaModelo, HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<Evento>(eventoRepositorio.save(evento), HttpStatus.OK);
        }
    }

    // |=======| REMOVER EVENTOS |=======|
    public ResponseEntity<?> deletar(Long id){
        eventoRepositorio.deleteById(id);

        respostaModelo.setMensagem("Deletado com sucesso!");
        return new ResponseEntity<RespostaModelo>(respostaModelo, HttpStatus.BAD_REQUEST);
    }

    // |=======| CONSULTAR EVENTOS |=======|
    // SÓ SE TIVER BUSCA

    // |=======| LISTAR EVENTOS |=======|
    public Iterable<Evento> listar(){
        return eventoRepositorio.findAll();
    }
}
