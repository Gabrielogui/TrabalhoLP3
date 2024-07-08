package com.lp3.eventos.controle;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lp3.eventos.modelo.Ingresso;
import com.lp3.eventos.modelo.Usuario;
//import com.lp3.eventos.repositiorio.IngressoRepositorio;
import com.lp3.eventos.servico.IngressoServico;
import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
public class IngressoController {
    // |=======| AUTOWIRED / ATRIBUTOS |=======|

    @Autowired
    private IngressoServico ingressoServico;

    //@Autowired
    //private IngressoRepositorio ingressoRepositorio;

    // |=======| COMPRAR INGRESSO |=======|
    @PostMapping("/compraIngresso")
    public ResponseEntity<?> ComprarIngresso(@RequestBody Ingresso ingresso){
        return ingressoServico.comprarIngresso(ingresso);
    }

    // |=======| VIZUALIZAR INGRESSOS |=======|
    @GetMapping("/visualizarIngresso")
    public Iterable<Ingresso> visualizarIngressos(@RequestBody Usuario usuario){
        return ingressoServico.visualizarIngresso(usuario);
    }

    // |=======| REEMBOLSAR INGRESSOS |=======|
    @DeleteMapping("/reembolsarIngresso/{id}")
    public ResponseEntity<?> reembolsarIngresso(@PathVariable Long id){
        return null;
    }

    @GetMapping("/usuario/{usuarioId}")
    public List<Ingresso> getIngressosByUsuarioId(@PathVariable Long usuarioId) {
        return ingressoServico.findByUsuarioId(usuarioId);
    }
}   

