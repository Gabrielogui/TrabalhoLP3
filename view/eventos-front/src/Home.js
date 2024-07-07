//import { useLocation } from "react-router-dom";
import './luiza.css';
//import './logo192.png';
import Logo from './img/logo.png';
import './reset.css';
import { useNavigate } from 'react-router-dom';

function Home({ logado, listaEvento, usuario, logout }){

    const navigate = useNavigate();
    /*const nome = location.state?.nome || 'Usuário';*/

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
                                    <li><a href="/criarEvento">Criar Evento</a></li>
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
                <div class="offer__list">
                    <section class="offer__list-item">
                        { listaEvento.map((evento, id) => (
                        <a href="/" >
                            <div class="cards" style={{ backgroundImage: `url(${evento.url})` }}>
                                <span class='data'>{evento.data}</span>
                                <span class='nome'>{evento.nome}</span>
                                <span class='local'>{evento.descricao}</span>
                            </div>
                        </a>
                        )
                        )
                        }
                        {
                        /*<a href="/" >
                            <div class="cards card2">
                                <span class='data'>DATA</span>
                                <span class='nome'>NOME</span>
                                <span class='local'>LOCAL</span>
                            </div>
                        </a>

                        <a href="/" >
                            <div class="cards card3">
                                <span class='data'>DATA</span>
                                <span class='nome'>NOME</span>
                                <span class='local'>LOCAL</span>
                            </div>
                        </a>

                        <a href="/" >
                            <div class="cards card4">
                                <span class='data'>DATA</span>
                                <span class='nome'>NOME</span>
                                <span class='local'>LOCAL</span>
                            </div>
                        </a>

                        <a href="/" >
                            <div class="cards card5">
                                <span class='data'>DATA</span>
                                <span class='nome'>NOME</span>
                                <span class='local'>LOCAL</span>
                            </div>
                        </a>

                        <a href="/" >
                            <div class="cards card6">
                                <span class='data'>DATA</span>
                                <span class='nome'>NOME</span>
                                <span class='local'>LOCAL</span>
                            </div>
                        </a>

                        <a href="/" >
                            <div class="cards card7">
                                <span class='data'>DATA</span>
                                <span class='nome'>NOME</span>
                                <span class='local'>LOCAL</span>
                            </div>
                        </a>

                        {<a href="/" >
                            <div class="cards card8">
                                <span class='data'>DATA</span>
                                <span class='nome'>NOME</span>
                                <span class='local'>LOCAL</span>
                            </div>
                        </a>}
                        */}

                        {/* <a href="/" >
                            <div class="cards card9">
                                <span>Funk</span>
                            </div>
                        </a>

                        <a href="/" >
                            <div class="cards card10">
                                <span>MPB</span>
                            </div>
                        </a>

                        <a href="/" >
                            <div class="cards card11">
                                <span>Rock</span>
                            </div>
                        </a>

                        <a href="/" >
                            <div class="cards card12">
                                <span>Hip Hop</span>
                            </div>
                        </a>

                        <a href="/" >
                            <div class="cards card13">
                                <span>Indie</span>
                            </div>
                        </a>

                        <a href="/" >
                            <div class="cards card14">
                                <span>Relax</span>
                            </div>
                        </a>

                        <a href="/" >
                            <div class="cards card15">
                                <span>Música Latina</span>
                            </div>
                        </a>

                        <a href="/" >
                            <div class="cards card16">
                                <span>Música Internacional</span>
                            </div>
                        </a> */}
                    </section>
                </div>

            </main>
            <footer>
                <img id="logo-footer" src={Logo} alt="Logo Tickly"/>
                <p class="copyright">&copy; Tickly - 2024</p>
            </footer>
        </div>
    );
}

export default Home;