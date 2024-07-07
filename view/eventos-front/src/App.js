//import logo from './logo.svg';
import './App.css';
import './style.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
//import Home from './Home';
import Sobre from './Sobre';
import Login from './Login';
import CriarEvento from './CriarEvento';
import { useEffect, useState } from 'react';


// |=======| APP |=======|
function App() {

  // |=======| OBJETOS |=======|
  // ======= OBJETO USUÁRIO =======
  const usuario = {
    id: 0,
    nome : '',
    email: '',
    cpf  : '',
    senha: ''
  }

  // ======= OBJETO EVENTO =======
  const evento = {
    id: 0,
    nome : '',
    valor : 0.0,
    data : '',
    descricao : '',
    imagem : ''
  }

  // |=======| NAVEGATE |========|
  //const navigate = useNavigate();
  const nomeLogado = '';

  // |=======| USESETATE |=======|
  
  // =======
  const [logado, setLogado] = useState(() => {
    return localStorage.getItem('logado') === 'true';
  }); // Saber se usuário está logado

  // =======
  const [objUsuario, setObjUsuario] = useState(() => {
    const savedUser = localStorage.getItem('usuario');
    return savedUser ? JSON.parse(savedUser) : usuario;
  });
  const [usuarios, setUsuarios] = useState([]);
  const [eventos, setEvento] = useState([]);
  const [objEvento, setObjEvento] = useState(evento);

  // |=======| USESEFFECT |=======|

  // ======= FETCH DOS EVENTOS =======
  useEffect( () => {
    fetch("http://localhost:8080/listarEventos")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setEvento(retorno_convertido))
  }, []
  );

  // ======= FETCH DOS USUARIOS =======
  useEffect( () => {
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setUsuarios(retorno_convertido))
  }, []
  );

  // =======
  useEffect(() => {
    localStorage.setItem('logado', logado);
    console.log(logado);
  }, [logado]);

  // =======
  useEffect(() => {
    localStorage.setItem('usuario', JSON.stringify(objUsuario));
    console.log(objUsuario);
  }, [objUsuario]);

  // ======= AO DIGITAR =======
  const aoDigitarUsuario = (e) => {
    setObjUsuario({...objUsuario, [e.target.name]: e.target.value});
    console.log(e.target.name, e.target.value, objUsuario.nome, objUsuario.cpf, objUsuario.email, objUsuario.senha);
  }

  const aoDigitarEvento = (e) => {
    setObjEvento({...objEvento, [e.target.name]: e.target.value});
    console.log(e.target.name, e.target.value, objEvento.nome, objEvento.descriecao, objEvento.valor, objEvento.url);
  }

  // ======= LOGAR =======
  const logar = (email, senha, navigate) => {
    fetch("http://localhost:8080/login", {
      method:'post',
      body:JSON.stringify({email, senha}),
      headers:{
        'content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => { throw new Error(text) });
      }
      return response.json();
    })
    .then(data => {
      setObjUsuario(data);
      setLogado(true);
      //localStorage.setItem('usuario', JSON.stringify(data)); 
      navigate('/home');
    })
    .catch(error => {
      alert(error.message);
    });
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

  // ======= CADASTRAR EVENTO =======
  const cadastrarEvento = () => {
    fetch("http://localhost:8080/cadastrarEvento", {
      method:'post',
      body:JSON.stringify(objEvento),
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
        console.log(retorno_convertido);
        setEvento([...eventos, retorno_convertido]);
        alert("Cadastrado com sucesso!");
      }
    })
  }

  // ======== LOGOUT  ======= 
  const logout = (navigate) => {
    console.log('oi');
    localStorage.removeItem('usuario');
    setObjUsuario(usuario);
    setLogado(false);
    navigate('/login');
  }

  // ======= RETORNO =======
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home logado={logado} listaEvento={eventos} usuario={objUsuario} logout={logout}  />}/>
          <Route path='/home' element={<Home logado={logado} listaEvento={eventos} usuario={objUsuario} logout={logout} />} />
          <Route path='/sobre'  element={<Sobre logado={logado} usuario={objUsuario} logout={logout} />}/>
          <Route path='/login'  element={<Login eventoTeclado={aoDigitarUsuario} cadastrarUsuario={cadastrarUsuario} login={logar}/>} />
          <Route path='/criarEvento' element={<CriarEvento eventoTeclado={aoDigitarEvento} cadastrarEvento={cadastrarEvento} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
