package com.lp3.eventos.controle;

//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
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

//import com.lp3.eventos.modelo.RespostaModelo;
import com.lp3.eventos.modelo.Usuario;
import com.lp3.eventos.repositiorio.UsuarioRepositorio;
import com.lp3.eventos.servico.UsuarioServico;
import com.lp3.eventos.transferencia.LoginRequisicao;
//import com.lp3.eventos.transferencia.LoginResposta;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000") // Para que qualquer porta tenha acesso, basta botar '*'
public class UsuarioController {

    @Autowired
    private UsuarioRepositorio ur;

    @GetMapping("/usuarios")
    public Iterable<Usuario> listarUsuarios() {
        return ur.findAll();
    }
    
    @PostMapping("/usuarios")
    public ResponseEntity<Usuario> criarUsuario(@RequestBody Usuario usuario) { // Pega um json do front
        Usuario us = ur.save(usuario);
        return ResponseEntity.ok(us);
    }

    @Autowired
    private UsuarioServico usr;
    
    // ======= CADASTRAR USUÁRIO =======
    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody Usuario usuario){
        return usr.cadastrarAlterar(usuario, "cadastrar");
    }

    // ======= ALTERAR USUÁRIO =======
    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody Usuario usuario){
        return usr.cadastrarAlterar(usuario, "alterar");
    }
     /* 
    public ResponseEntity<?> alterar(@RequestBody Usuario usuario){
        return usr.alterar(usuario);
    }*/


    // ======= REMOVER USUÁRIO =======
    @DeleteMapping("/remover/{id}")
    public ResponseEntity<?> remover(@PathVariable long id){ // Pega infromação da URL
        return usr.remover(id);
    }

    // ======= LISTAR USUÁRIOS =======
    @GetMapping("/listar")
    public Iterable<Usuario> listar(){
        return usr.listar();
    }

    /*@PostMapping("/{email}")
    public Usuario selecionarPorEmail(@PathVariable String email){
        return ur.findByEmail(email);
    }*/

    // ======= LOGIN =======
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequisicao loginRequisicao) {
        return usr.login(loginRequisicao);
        /*Optional<Usuario> usuario = usr.findByEmail(loginRequisicao.getEmail());

        if (usuario.isPresent() && usuario.get().getSenha().equals(loginRequisicao.getSenha())) {
            return ResponseEntity.ok(new LoginResposta(usuario.get().getNome()));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email ou senha estão incorretos");
        }*/
    }

    @GetMapping("/")
    public String rota(){
        return "funcionando";
    }

    
}
