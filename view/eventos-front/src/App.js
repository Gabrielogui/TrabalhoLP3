import './App.css';
import './style.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Login from './Login';
import CriarEvento from './CriarEvento';
import { useEffect, useState } from 'react';
import MeusEventos from './MeusEventos';
import MeusIngressos from './MeusIngressos';

// |=======| FUNÇÃO DA APLICAÇÃO |=======|
function App() {

  // |=======| OBJETOS |=======|

  // |======= OBJETO USUARIO =======|
  const usuario = {
    id: 0,
    nome: '',
    email: '',
    cpf: '',
    senha: ''
  };



  // |=======| USESTATE |=======|
  const [logado, setLogado] = useState(() => {
    return localStorage.getItem('logado') === 'true';
  });

  const [objUsuario, setObjUsuario] = useState(() => {
    const savedUser = localStorage.getItem('usuario');
    return savedUser ? JSON.parse(savedUser) : usuario;
  });

  
    // |======= OBJETO EVENTO =======|
    const evento = {
      id: 0,
      nome: '',
      valor: 0.0,
      data: '',
      descricao: '',
      imagem: '',
      usuarioId: objUsuario.id
    };

  const [usuarios, setUsuarios] = useState([]);
  const [eventos, setEvento] = useState([]);
  const [objEvento, setObjEvento] = useState(evento);
  

  // |=======| USEEFFECT |=======|

  // ======= LISTAR EVENTO DO BACK =======
  useEffect(() => {
    fetch("http://localhost:8080/listarEventos")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setEvento(retorno_convertido));
  }, []);

    // ======= LISTAR USUARIOS DO BACK =======
  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setUsuarios(retorno_convertido));
  }, []);

  // ======= MANTÉM O USUARIO LOGADO COMO TRUE =======
  useEffect(() => {
    localStorage.setItem('logado', logado);
    console.log(logado);
  }, [logado]);

  // ======= MANTÉM O OBJETO USUARIO LOGADO =======
  useEffect(() => {
    localStorage.setItem('usuario', JSON.stringify(objUsuario));
    console.log(objUsuario);
  }, [objUsuario]);

  // |=======| AO DIGITAR USUARIO |=======|
  const aoDigitarUsuario = (e) => {
    setObjUsuario({ ...objUsuario, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value, objUsuario.nome, objUsuario.cpf, objUsuario.email, objUsuario.senha);
  };

  // |=======| AO DIGITAR EVENTO |=======|
  const aoDigitarEvento = (e) => {
    setObjEvento({ ...objEvento, [e.target.name]: e.target.value, usuarioId: objUsuario.id });
    console.log(e.target.name, e.target.value, objEvento.nome, objEvento.descricao, objEvento.valor, objEvento.url);
  };

  // |=======| LOGAR USUÁRIO |=======|
  const logar = (email, senha, navigate) => {
    fetch("http://localhost:8080/login", {
      method: 'post',
      body: JSON.stringify({ email, senha }),
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
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
        navigate('/home');
      })
      .catch(error => {
        alert(error.message);
      });
  };

  // |=======| CADASTRAR USUÁRIO |=======|
  const cadastrarUsuario = () => {
    fetch("http://localhost:8080/cadastrar", {
      method: 'post',
      body: JSON.stringify(objUsuario),
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          setUsuarios([...usuarios, retorno_convertido]);
          alert("Cadastrado com sucesso!");
        }
      });
  };

  // |=======| CADASTRAR EVENTO |=======|
  const cadastrarEvento = () => {
    // Construir o objeto de evento com apenas o ID do usuário
    const updatedEvento = {
      nome: objEvento.nome,
      valor: objEvento.valor,
      data: objEvento.data,
      descricao: objEvento.descricao,
      imagem: objEvento.imagem,
      usuario: { id: objUsuario.id } // Inclui apenas o ID do usuário
    };
  
    fetch("http://localhost:8080/cadastrarEvento", {
      method: 'post',
      body: JSON.stringify(updatedEvento),
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.mensagem !== undefined) {
        alert(data.mensagem);
      } else {
        console.log(data);
        setEvento([...eventos, data]);
        alert("Cadastrado com sucesso!");
      }
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
  };
  
  // |=======| EDITAR EVENTO |=======|
  const editarEvento = () => {
    //fetch("http://localhost:8080")
  }

  // |=======| EXCLUIR EVENTO |=======|
  const excluirEvento = () => {
    console.log('oioi', objEvento.id);
    fetch("http://localhost:8080/deletarEvento/"+objEvento.id, {
      method: 'delete',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

      alert(retorno_convertido.mensagem);

      let vetorTemp = [...eventos];
      //id
      let indice = vetorTemp.findIndex((p) => {
        return p.id === objEvento.id;
      });

      // Remover produto do vetor temporário
      vetorTemp.splice(indice, 1);
      
      // Atualizar o vetor de produtos
      setEvento(vetorTemp);
    }
    );

    
  }

  // |=======| LOGOUT |=======|
  const logout = (navigate) => {
    console.log('oi');
    localStorage.removeItem('usuario');
    setObjUsuario(usuario);
    setLogado(false);
    navigate('/login');
  };

  // |=======| SELECIONAR EVENTO |=======|
  const selecionarEvento = (id) => {
    setEvento(eventos[id]);
    //setSelecionado(false);
  }


  // |=======| RETORNO |=======|
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home logado={logado} listaEvento={eventos} usuario={objUsuario} logout={logout} />} />
          <Route path='/home' element={<Home logado={logado} listaEvento={eventos} usuario={objUsuario} logout={logout} />} />
          <Route path='/sobre' element={<Sobre logado={logado} usuario={objUsuario} logout={logout} />} />
          <Route path='/login' element={<Login eventoTeclado={aoDigitarUsuario} cadastrarUsuario={cadastrarUsuario} login={logar} />} />
          <Route path='/criarEvento' element={<CriarEvento eventoTeclado={aoDigitarEvento} cadastrarEvento={cadastrarEvento} />} />
          <Route path='/meusEventos' element={<MeusEventos logado={logado} listaEvento={eventos} usuario={objUsuario} logout={logout} excluirEvento={excluirEvento} selecionarEvento={selecionarEvento}/>} />
          <Route path='/meusIngressos' element={<MeusIngressos logado={logado} usuario={objUsuario} logout={logout} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
