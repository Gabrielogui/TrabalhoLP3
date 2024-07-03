//import { useLocation } from "react-router-dom";
import './luiza.css';
import './logo192.png';

function Home({ logado }){

    /*const location = useLocation();
    const nome = location.state?.nome || 'Usuário';*/

    return(
        <div>
            <header>
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
                        <li><a href="/login">Login</a></li>
                        )
                        }
                    </ul>    
                </nav>
            </header>
            
            {/* CARDS */}
            <div class="offer__list">
                <section class="offer__list-item">
                    {/* CARD */}
                    
                    <a href="/" >
                        <div class="cards card1">
                            <img src="logo192.png" alt="" />
                            <span></span>
                        </div>
                    </a>

                    {/* CARD */}
                    <a href="/" >
                        <div class="cards card2">
                            <img src="logo192.png" alt="" />
                            <span>Feitos para você</span>
                        </div>
                    </a>

                    {/* CARD */}
                    <a href="/" >
                        <div class="cards card3">
                            <img src="logo192.png" alt="" />
                            <span>Lançamentos</span>
                        </div>
                    </a>

                    {/* CARD */}
                    <a href="/" >
                        <div class="cards card4">
                            <img src="logo192.png" alt="" />
                            <span>Creators</span>
                        </div>
                    </a>

                    {/* CARD */}
                    <a href="/" >
                        <div class="cards card5">
                            <img src="logo192.png" alt="" />
                            <span>Para treinar</span>
                        </div>
                    </a>

                    {/* CARD */}
                    <a href="/" >
                        <div class="cards card6">
                            <img src="logo192.png" alt="" />
                            <span>Podcasts</span>
                        </div>
                    </a>

                    {/* CARD */}
                    <a href="/" >
                        <div class="cards card7">
                            <img src="logo192.png" alt="" />
                            <span>Sertanejo</span>
                        </div>
                    </a>

                    {/* CARD */}
                    <a href="/" >
                        <div class="cards card8">
                            <img src="logo192.png" alt="" />
                            <span>Samba e pagode</span>
                        </div>
                    </a>

                    {/* CARD */}
                    <a href="/" >
                        <div class="cards card9">
                            <img src="logo192.png" alt="" />
                            <span>Funk</span>
                        </div>
                    </a>

                    {/* CARD */}
                    <a href="/" >
                        <div class="cards card10">
                            <img src="logo192.png" alt="" />
                            <span>MPB</span>
                        </div>
                    </a>

                    {/* CARD */}
                    <a href="/" >
                        <div class="cards card11">
                            <img src="logo192.png" alt="" />
                            <span>Rock</span>
                        </div>
                    </a>

                    {/* CARD */}
                    <a href="/" >
                        <div class="cards card12">
                            <img src="logo192.png" alt="" />
                            <span>Hip Hop</span>
                        </div>
                    </a>

                    {/* CARD */}
                    <a href="/" >
                        <div class="cards card13">
                            <img src="logo192.png" alt="" />
                            <span>Indie</span>
                        </div>
                    </a>

                    {/* CARD */}
                    <a href="/" >
                        <div class="cards card14">
                            <img src="logo192.png" alt="" />
                            <span>Relax</span>
                        </div>
                    </a>

                    {/* CARD */}
                    <a href="/" >
                        <div class="cards card15">
                            <img src="logo192.png" alt="" />
                            <span>Música Latina</span>
                        </div>
                    </a>
                </section>
            </div>

            <footer></footer>
        </div>
    );
}

export default Home;