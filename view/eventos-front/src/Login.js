import { useState } from 'react';
import './Login.css';

function Login({ eventoTeclado, cadastrarUsuario, login }) {

    const [logando, setLogando] = useState(true);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // MUDANDO O BOOL:
    const mudandoEstado = () => {
        setLogando(!logando);
    }

    const logarClick = () => {
        login(email, senha);
    }

    return(
        <div id="Login">
            {logando ? (
            <div>
                <h1>Login</h1>
                <br></br>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} name='email' placeholder="email ou cpf"/>
                <br/><br/>
                <input type="password" value={senha} onChange={e => setSenha(e.target.value)} name='senha' placeholder="senha"/>
                <br/><br/>
                <button onClick={logarClick}>Enviar</button>
                <br/><br/>
                <button onClick={mudandoEstado}>Cadastre-se</button>
                <br></br> <br></br>
                <a href='/'>Voltar pra home</a>
            </div>
            )
            :
            (
            <div>
                <h1>Cadastro</h1>
                <input type="text" onChange={eventoTeclado} name='nome'  placeholder="nome"/>
                <br/><br/>
                <input type="text" onChange={eventoTeclado} name='cpf'   placeholder="cpf"/>
                <br/><br/>
                <input type="text" onChange={eventoTeclado} name='email' placeholder="email"/>
                <br/><br/>
                <input type="password" onChange={eventoTeclado} name='senha' placeholder="senha"/>
                <br/><br/>
                <button onClick={cadastrarUsuario} >Enviar</button>
                <br/><br/>
                <button onClick={mudandoEstado}>Voltar ao login</button>
                <br></br> <br></br>
                <a href='/'>Voltar pra home</a>
            </div>
            )
            }
        </div>
    );
}

export default Login;