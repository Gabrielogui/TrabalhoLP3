import React, { useEffect, useState } from 'react';

import classes from './meusEventos.module.css';
import Logo from './img/logo.png';
import { useNavigate } from 'react-router-dom';

// |=======| COMPONENTE REACT - FUNÇÃO MEUS EVENTOS |=======|
function MeusEventos({ logado, listaEvento, usuario, logout, excluirEvento, selecionarEvento, eventoTeclado, editarEvento }) {

    // |=======| USESTATES |=======|
    const [meusEventos, setMeusEventos] = useState([]);
    const [editandoEvento, setEditandoEvento] = useState(null);
    const [eventoEditado, setEventoEditado] = useState({}); // Estado para armazenar alterações
    const navigate = useNavigate();

    // |=======| USEEFFECTS |=======| 
    useEffect(() => {
        if (logado) {
            const eventosDoUsuario = listaEvento.filter(evento => evento.usuario.id === usuario.id); // FILTRANDO EVENTOS DO USUÁRIO LOGADO
            setMeusEventos(eventosDoUsuario);
        }
    }, [logado, listaEvento, usuario]);

    // |=======| USENAVIGAETE |=======|
    const logout_ = () => {
        logout(navigate);
    };

    // |=======| FUNÇÕES HANDLES |=======|

    // ======= EDITANDO FORMULÁRIO =======
    const handleEdit = (evento) => {
        setEditandoEvento(evento);
        setEventoEditado({ ...evento }); // Preenche o formulário com os dados atuais do evento
    };

    // ======= SALVANDO ALTERAÇÕES NO 'EDITAR EVENTO' =======
    const handleSave = () => {
        
        // Chama a função editarEvento do app.js, passando o evento atualizado
        const updatedEvento = {
            id: eventoEditado.id,
            nome: eventoEditado.nome,
            valor: eventoEditado.valor,
            data: eventoEditado.data,
            descricao: eventoEditado.descricao,
            imagem: eventoEditado.imagem,
            usuario: { id: usuario.id }  // Passa o ID do usuário associado
        };

        editarEvento(updatedEvento).then((novoEvento) => {
            // Atualiza a lista de eventos com o evento editado
            setMeusEventos(meusEventos.map(evento => 
                evento.id === novoEvento.id ? novoEvento : evento
            ));
            setEditandoEvento(false); // Fecha o modo de edição após salvar
        }).catch(error => {
            console.error("Erro ao editar o evento", error);
        });
    };
    
    // ======= ATUALIZANDO OS VALORES DO EDITAR =======
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventoEditado({ ...eventoEditado, [name]: value }); // Atualiza os valores do formulário
    };

    const handleExcluir = (evento) => {
        excluirEvento(evento)
    }

    // |=======| RETORNO |=======|
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
                                        <li><a href="/sobre">Meus Eventos</a></li>
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
                {/* EVENTOS DO USUÁRIO */}
                <div className={classes.event_list}>
                    {meusEventos.map(evento => (
                        <div className={classes.event_card} key={evento.id} style={{ backgroundImage: `url(${evento.imagem})` }}>
                            <span className={classes.event_date}>{evento.data}</span>
                            <span className={classes.event_name}>{evento.nome}</span>
                            <span className={classes.event_description}>{evento.descricao}</span>
                            <span className={classes.event_valor}>{evento.valor}</span>                          
                                
                            <button className={classes.botao} onClick={() => handleEdit(evento)}>Editar</button>
                            <button className={classes.botao} onClick={() => handleExcluir(evento)}>Excluir</button>               

                        </div>
                    ))}
                </div>
                {/* FORMULÁRIO DE EDIÇÃO DO EVENTO */}
                {editandoEvento && (
                    <div className={classes.edit_form}>
                        <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                            <label>
                                Nome:
                                <input type="text" name="nome" value={eventoEditado.nome} onChange={handleChange} />
                            </label>
                            <label>
                                Local:
                                <input type='text' name="descricao" value={eventoEditado.descricao} onChange={handleChange} />
                            </label>
                            <label>
                                Valor:
                                <input
                                    type="number" name="valor" value={eventoEditado.valor} onChange={handleChange} />
                            </label>
                            <label>
                                Data:
                                <input type="date" name="data" value={eventoEditado.data} onChange={handleChange} />
                            </label>
                            <button type="submit">Salvar</button>
                            <button onClick={() => setEditandoEvento(null)}>Cancelar</button>
                        </form>
                    </div>
                )}
                
            </main>
            <footer>
                <img id="logo-footer" src={Logo} alt="Logo Tickly" />
                <p className="copyright">&copy; Tickly - 2024</p>
            </footer>
        </div>
    );
}

export default MeusEventos;