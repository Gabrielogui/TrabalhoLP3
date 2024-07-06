//import { useLocation } from "react-router-dom";
import './luiza.css';
import './logo192.png';
import Logo from './logo.png';
import './reset.css';

function Home({ logado }){

    /*const location = useLocation();
    const nome = location.state?.nome || 'Usuário';*/

    return(
        <div>
            <header>
                <div class="container">
                    <img id="logo" src={Logo} alt="Logo Tickly"/>
        
                    <nav id="menu-h">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/sobre">Sobre</a></li>
                            <li>
                                <a href="/">Reservar</a>
                                <ul>
                                    <li><a href="/">Fazer Reserva</a></li>
                                    <li><a href="/">Consultar Reserva</a></li>
                                    <li><a href="/">Editar Reserva</a></li>
                                    <li><a href="/">Excluir Reserva</a></li>
                                </ul>
                            </li>
                            
                            {/*<li>oi, {nome}</li>*/}
                            { logado ? (
                            <li>Usuario Logado!</li>
                            ) : (
                            <li><span><i id='cart' class="fa-solid fa-cart-shopping"></i></span><a id="login" href="/login">Login</a></li>
                            )
                            }
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <div class="offer__list">
                    <section class="offer__list-item">
                        
                        <a href="/" >
                            <div class="cards card1">
                                <span class='data'>DATA</span>
                                <span class='nome'>NOME</span>
                                <span class='local'>LOCAL</span>
                            </div>
                        </a>

                        <a href="/" >
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

                        <a href="/" >
                            <div class="cards card8">
                                <span class='data'>DATA</span>
                                <span class='nome'>NOME</span>
                                <span class='local'>LOCAL</span>
                            </div>
                        </a>

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