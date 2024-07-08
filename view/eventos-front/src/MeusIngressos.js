import React, { useEffect, useState } from 'react';
//import './meusIngressos.css'; // CSS para estilizar a página
import { useNavigate } from 'react-router-dom';

function MeusIngressos({ usuario }) {
    const [ingressos, setIngressos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (usuario && usuario.id) {
            fetch(`/api/ingressos/usuario/${usuario.id}`)
                .then(response => response.json())
                .then(data => setIngressos(data))
                .catch(error => console.error('Erro ao buscar ingressos:', error));
        }
    }, [usuario]);

    if (!usuario) {
        return <p>Você precisa estar logado para ver seus ingressos.</p>;
    }

    return (
        <div>
            <header>
                <div className="container">
                    <img id="logo" src="/path/to/logo.png" alt="Logo Tickly"/>
                    <nav id="menu-h">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/sobre">Sobre</a></li>
                            <li><a href="/">Meus Ingressos</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <div className="ingresso__list">
                    {ingressos.length > 0 ? (
                        ingressos.map((ingresso) => (
                            <div className="ingresso__item" key={ingresso.id}>
                                <h3>{ingresso.evento.nome}</h3>
                                <p>Data: {ingresso.evento.data}</p>
                                <p>Local: {ingresso.evento.local}</p>
                            </div>
                        ))
                    ) : (
                        <p>Você não possui ingressos comprados.</p>
                    )}
                </div>
            </main>
            <footer>
                <img id="logo-footer" src="/path/to/logo.png" alt="Logo Tickly"/>
                <p className="copyright">&copy; Tickly - 2024</p>
            </footer>
        </div>
    );
}

export default MeusIngressos;