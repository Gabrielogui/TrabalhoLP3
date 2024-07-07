import { useNavigate } from 'react-router-dom';
import Logo from './img/logo.png'

function Sobre({ logado, usuario, logout}){

    const navigate = useNavigate();

    const logout_ = () => {
        logout(navigate)
    }

    return(
        <div>
            <header>
                <div class="container">
                    <img id="logo" src={Logo} alt="Logo Tickly"/>
        
                    <nav id="menu-h">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/sobre">Sobre</a></li>
                            {/* COLOCAR NOME DO USUÁRIO */}
                            { logado ? (
                            <li>
                                <a href="/">oi, {usuario.nome}</a>
                                <ul>
                                    <li><a href="/">Criar Evento</a></li>
                                    <li><a href="/">Meus Eventos</a></li>
                                    <li><a href="/">Meus Ingressos</a></li>
                                    <li onClick={logout_}><button>Sair</button></li>
                                </ul>
                            </li>
                            
                            ) : (
                            
                            <li><a id="login" href="/login">Login</a></li>
                            )
                            }
                            <li><span><i id='cart' class="fa-solid fa-cart-shopping"></i></span></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <section>
                    {/*<div>
                        <img src="" alt="">
                    </div>*/}
                    <div>
                        <h1>Sobre o que é o site?</h1>
                        <p>Este é um trabalho universitário da disciplina Linguagem de Programação III, passado com o intúito de...</p>
                    </div>
                </section>
                <section>
                    <div>

                    </div>
                </section>
            </main>

            <footer>
                <img id="logo-footer" src={Logo} alt="Logo Tickly"/>
                <p class="copyright">&copy; Tickly - 2024</p>
            </footer>
        </div>
    );
}

export default Sobre;