//import './CriarEvento.css';

import classes from './CriarEvento.module.css'

function CriarEvento({ eventoTeclado, cadastrarEvento }) {

    return(
        <div className={classes.corpo}>
            <div className={classes.container}>
                <div className={classes.form_container}>
                    <div></div> {/* WTF? */}
                    <h1>CRIE O SEU EVENTO</h1>
                    <br></br>
                    <input className={classes.entrada} type="text" onChange={eventoTeclado} name="nome" placeholder="Nome do evento"/>
                    <br></br>
                    <input className={classes.entrada} type="number" onChange={eventoTeclado} name="valor" placeholder="Valor" />
                    <br></br>
                    <input className={classes.entrada} type="date" onChange={eventoTeclado} name="data" placeholder="Data" />              
                    <br></br>
                    <input className={classes.entrada} type="text" onChange={eventoTeclado} name="descricao" placeholder="Local" />
                    <br></br>
                    <input className={classes.entrada} type="text" onChange={eventoTeclado} name="imagem" placeholder="Url da imagem" />
                    <br></br>
                    <button className={classes.botao} onClick={cadastrarEvento}>Criar Evento</button>
                    <br></br>
                    <a href="/">Voltar para a página inicial</a>
                </div>
            </div>
        </div>
    )
}

export default CriarEvento;