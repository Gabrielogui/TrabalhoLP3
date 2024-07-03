function Sobre(){
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
                        <li><a href="/login">Login</a></li>
                    </ul>    
                </nav>
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

            <footer></footer>
        </div>
    );
}

export default Sobre;