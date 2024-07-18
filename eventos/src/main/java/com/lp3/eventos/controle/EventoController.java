package com.lp3.eventos.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lp3.eventos.modelo.Evento;
import com.lp3.eventos.repositiorio.EventoRepositorio;
import com.lp3.eventos.servico.EventoServico;

import java.util.Optional;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
public class EventoController {
    
    // |=======| AUTOWIRED / ATRIBUTOS |=======|
    //@Autowired
    //private EventoRepositorio eventoRepositorio;

    @Autowired
    private EventoServico eventoServico;

    // |=======| CADASTRAR EVENTOS |=======|
    @PostMapping("/cadastrarEvento")
    public ResponseEntity<?> cadastrarEvento(@RequestBody Evento evento) {
        try {
            eventoServico.cadastrarEvento(evento);
            return ResponseEntity.ok(evento);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    } 
    
   /*  @PostMapping("/cadastrarEvento")
    public ResponseEntity<?> cadastrarEvento(@RequestBody Evento evento) {
        // Verifique se o evento já existe antes de salvar
        Optional<Evento> eventoExistente = EventoRepositorio.findByNomeAndData(evento.getNome(), evento.getData());
        if (eventoExistente.isPresent()) {
            return ResponseEntity.badRequest().body("Evento já cadastrado.");
        }

        // Salvando o evento
        Evento novoEvento = ResponseEntity.save(evento);
        return ResponseEntity.ok(novoEvento);
    } */



    // |=======| EDITAR EVENTOS |=======|
    @PutMapping("/editarEvento")
    public ResponseEntity<?> editar(@RequestBody Evento evento){
        return eventoServico.editar(evento);
    }

    // |=======| DELETAR EVENTOS |=======|
    @DeleteMapping("/deletarEvento/{id}")
    public ResponseEntity<?> deletar(@PathVariable Long id){
        return eventoServico.deletar(id);
    }

    // |=======| CONSULTAR EVENTOS |=======|
    @GetMapping("/consultarEvento")
    public Evento consultar(@RequestBody Evento evento){ // Só se houver busca
        return null;
    }

    // |=======| LISTAR EVENTOS |=======|
    @GetMapping("/listarEventos")
    public Iterable<Evento> listar(){
        return eventoServico.listar();
    }
}
