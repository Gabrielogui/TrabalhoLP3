//import logo from './logo.svg';
import './App.css';
import './style.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
//import Home from './Home';
import Sobre from './Sobre';
import Login from './Login';
import { useEffect, useState } from 'react';

// |=======| APP |=======|
function App() {

  // ======= OBJETO USUÁRIO =======
  const usuario = {
    id: 0,
    nome : '',
    email: '',
    cpf  : '',
    senha: ''
  }

  // ======= NAVEGATE ========
  //const navigate = useNavigate();
  const nomeLogado = '';

  // ======= USESETATE =======
  
  const [logado, setLogado] = useState(false); // Saber se usuário está logado
  const [objUsuario, setObjUsuario] = useState(usuario);
  const [usuarios, setUsuarios] = useState([]);

  // ======= USESEFFECT =======

  /*useEffect( () => {
    fetch("http//:localhost8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => retorno_convertido)
  }
  )*/
  useEffect(() => {
    console.log(logado); // Isso será chamado toda vez que 'logado' mudar
  }, [logado]);

  // ======= AO DIGITAR =======
  const aoDigitar = (e) => {
    setObjUsuario({...objUsuario, [e.target.name]: e.target.value});
    console.log(e.target.name, e.target.value, objUsuario.nome, objUsuario.cpf, objUsuario.email, objUsuario.senha);
  }

  // ======= LOGAR =======
  const logar = (email, senha) => {
    fetch("http://localhost:8080/login", {
      method:'post',
      body:JSON.stringify({email, senha}),
      headers:{
        'content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if (retorno_convertido.ok) {
        alert("Usuário Logado com sucesso!")
        console.log(retorno_convertido)
      } else {
        alert(retorno_convertido);
      }
    })
    .then(data => {
      //navigate('/home', { state: { nome: data.nome } });
    })
    
    setLogado(true);
    console.log('print da funcao logar', logado);
  }

  // ======= CADASTRAR USUÁRIO =======
  const cadastrarUsuario = () => {
    fetch("http://localhost:8080/cadastrar", {
      method:'post',
      body:JSON.stringify(objUsuario),
      headers:{
        'content-type':'application/json',
        'Accept':'application/json'
      }
    }
    )
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        setUsuarios(...usuarios, retorno_convertido);
        alert("Cadastrado com sucesso!");
      }
    })
  }

  // ======= RETORNO =======
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home logado={logado}/>}/>
          <Route path='/home' element={<Home />} />
          <Route path='/sobre'  element={<Sobre />}/>
          <Route path='/login'  element={<Login eventoTeclado={aoDigitar} cadastrarUsuario={cadastrarUsuario} login={logar}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
