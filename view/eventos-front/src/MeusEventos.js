import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './meusEventos.css';
import Logo from './img/logo.png';
import { useNavigate } from 'react-router-dom';

function MeusEventos({ logado, listaEvento, usuario, logout, excluirEvento, selecionarEvento }) {
    const [meusEventos, setMeusEventos] = useState([]);
    const [editandoEvento, setEditandoEvento] = useState(null);
    const navigate = useNavigate();

    // 
    useEffect(() => {
        if (logado) {
            const eventosDoUsuario = listaEvento.filter(evento => evento.usuario.id === usuario.id);
            setMeusEventos(eventosDoUsuario);
        }
    }, [logado, listaEvento, usuario]);

    const logout_ = () => {
        logout(navigate);
    };

    const handleEdit = (evento) => {
        setEditandoEvento(evento);
    };
    /*
    const handleDelete = (id) => {
        axios.delete(`/deletarEvento/${id}`)
            .then(() => {
                setMeusEventos(meusEventos.filter(evento => evento.id !== id));
            })
            .catch(err => {
                console.error("Erro ao deletar evento", err);
            });
    };

    const handleSave = (eventoAtualizado) => {
        axios.put(`/editarEvento/${eventoAtualizado.id}`, eventoAtualizado)
            .then(response => {
                setMeusEventos(meusEventos.map(evento => evento.id === eventoAtualizado.id ? response.data : evento));
                setEditandoEvento(null);
            })
            .catch(err => {
                console.error("Erro ao atualizar evento", err);
            });
    };
    */

    const [selecionado, setSelecionado] = useState(false);

    const selecionar = (id) => {
        setSelecionado(true);
        selecionarEvento(id);

    }

    return (
        <div>
            <header>
                <div className="container">
                    <img id="logo" src={Logo} alt="Logo Tickly" />
                    <nav id="menu-h">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/sobre">Sobre</a></li>
                            {logado ? (
                                <li>
                                    <a href="/">Oi, {usuario.nome}</a>
                                    <ul>
                                        <li><a href="/criarEvento">Criar Evento</a></li>
                                        <li><a href="/meusEventos">Meus Eventos</a></li>
                                        <li><a href="/">Meus Ingressos</a></li>
                                        <li onClick={logout_}><button>Sair</button></li>
                                    </ul>
                                </li>
                            ) : (
                                <li><a id="login" href="/login">Login</a></li>
                            )}
                            <li><span><i id="cart" className="fa-solid fa-cart-shopping"></i></span></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <div className="event-list">
                    {meusEventos.map(evento => (
                        <div className="event-card" key={evento.id} style={{ backgroundImage: `url(${evento.imagem})` }}>
                            <span className="event-date">{evento.data}</span>
                            <span className="event-name">{evento.nome}</span>
                            <span className="event-description">{evento.descricao}</span>
                            <span className="event-valor">{evento.valor}</span>
                            
                                
                                
                                
                                    <button onClick={() => handleEdit(evento)}>Editar</button>
                                    <button onClick={excluirEvento}>Excluir</button> 
                                
                            
                                <button onClick={() => selecionar(evento.id)}>Selecionar</button>
                            
                        </div>
                    ))}
                </div>
                {/*editandoEvento && (
                    <EditEventForm evento={editandoEvento} onSave={handleSave} onCancel={() => setEditandoEvento(null)} />
                )*/}
            </main>
            <footer>
                <img id="logo-footer" src={Logo} alt="Logo Tickly" />
                <p className="copyright">&copy; Tickly - 2024</p>
            </footer>
        </div>
    );
}

function EditEventForm({ evento, onSave, onCancel }) {
    const [formData, setFormData] = useState({ ...evento });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="edit-event-form">
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
                </label>
                <label>
                    Data:
                    <input type="date" name="data" value={formData.data} onChange={handleChange} required />
                </label>
                <label>
                    Descrição:
                    <input type="text" name="descricao" value={formData.descricao} onChange={handleChange} required />
                </label>
                <label>
                    Valor:
                    <input type="number" name="valor" value={formData.valor} onChange={handleChange} required />
                </label>
                <label>
                    Imagem:
                    <input type="text" name="imagem" value={formData.imagem} onChange={handleChange} />
                </label>
                <button type="submit">Salvar</button>
                <button type="button" onClick={onCancel}>Cancelar</button>
            </form>
        </div>
    );
}

export default MeusEventos;