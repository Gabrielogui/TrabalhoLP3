package com.lp3.eventos.servico;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.lp3.eventos.modelo.RespostaModelo;
import com.lp3.eventos.modelo.Usuario;
import com.lp3.eventos.repositiorio.UsuarioRepositorio;
import com.lp3.eventos.transferencia.LoginRequisicao;
import com.lp3.eventos.transferencia.LoginResposta;

@Service
public class UsuarioServico {
    
    //Optional<Usuario> findByEmail(String email);

    // |=======| ATRIBUTOS |=======|
    @Autowired
    private UsuarioRepositorio ur;

    @Autowired
    private RespostaModelo rm;

    // |=======| MÉTODOS |=======|
    
    // ======= MÉTODO PARA LISTAR OS USUÁRIOS =======
    public Iterable<Usuario> listar(){
        return ur.findAll();
    }

    // MÉTODO PARA CADASTRAR PRODUTOS
    public ResponseEntity<?> cadastrar(Usuario um){
        if(um.getNome().equals("")){
            rm.setMensagem("O nome do usuário é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else if(um.getEmail().equals("")){
            rm.setMensagem("O email do usuário é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<Usuario>(ur.save(um), HttpStatus.CREATED);
        }
    }

    // MÉTODO PARA ALTERAR PRODUTO
    public ResponseEntity<?> alterar(Usuario um){
        if(um.getNome().equals("")){
            rm.setMensagem("O nome do usuário é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else if(um.getEmail().equals("")){
            rm.setMensagem("O email do usuário é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<Usuario>(ur.save(um), HttpStatus.OK);
        }
    }

    // ======= MÉTODO PARA CADASTRAR E ALTERAR USUÁRIO =======
    public ResponseEntity<?> cadastrarAlterar(Usuario um, String acao){
        //Usuario findByEmail(String acao);
        if(um.getNome().equals("") || um.getEmail().equals("") || um.getCpf().equals("") || um.getSenha().equals("")){
            rm.setMensagem("Todos os campos devem ser preenchidos");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
       /*  }else if(um.getEmail().equals(ur.findByEmail(um.getEmail())) || um.getCpf().equals("")){
            rm.setMensagem("Email ou cpf já cadastrado");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);*/
        }else{
            if(acao.equals("cadastrar")){
                return new ResponseEntity<Usuario>(ur.save(um), HttpStatus.BAD_REQUEST);
            }else{
                return new ResponseEntity<Usuario>(ur.save(um), HttpStatus.OK);
            }
        }
        /* 
        if(um.getNome().equals("")){
            rm.setMensagem("O nome do usuário é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else if(um.getEmail().equals("")){
            rm.setMensagem("O email do usuário é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else{
            if(acao.equals("cadastrar")){
                return new ResponseEntity<Usuario>(ur.save(um), HttpStatus.BAD_REQUEST);
            }else {
                // Check if the user exists
                if(ur.existsById(um.getId())) {
                    return new ResponseEntity<Usuario>(ur.save(um), HttpStatus.OK);
                } else {
                    rm.setMensagem("Usuário não encontrado");
                    return new ResponseEntity<RespostaModelo>(rm, HttpStatus.NOT_FOUND);
                }
            }
        }*/
        
    }

    // MÉTODO PARA REMOVER USUÁRIO
    public ResponseEntity<RespostaModelo> remover(long id){
        ur.deleteById(id);

        rm.setMensagem("O usuário foi removido com sucesso!");
        return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);
    }

    /*public Optional<Usuario> findByEmail(String email) {
        return ur.findByEmail(email);
    }*/

    // ======= LOGIN =======
    public ResponseEntity<?> login(@RequestBody LoginRequisicao loginRequisicao) {
        Optional<Usuario> usuario = ur.findByEmail(loginRequisicao.getEmail());

        if (usuario.isPresent() && usuario.get().getSenha().equals(loginRequisicao.getSenha())) {
            // retornar ususario ao invés do nome
            return ResponseEntity.ok(new LoginResposta(usuario.get().getNome()));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email ou senha estão incorretos");
        }
    }




    /*public Optional<Usuario> findByEmail(String email){
        return ur.findByEmail(email);
    }*/
}
