//import './CriarEvento.css';

function CriarEvento({ eventoTeclado, cadastrarEvento }) {

    return(
        <div>
            <div class="container">
                <div class="form-container">
                    <h1>CRIE O SEU EVENTO</h1>
                    <br></br>
                    <input type="text" onChange={eventoTeclado} name="nome" placeholder="Nome do evento"/>
                    <br></br>
                    <input type="number" onChange={eventoTeclado} name="valor" placeholder="Valor" />
                    <br></br>
                    <input type="date" onChange={eventoTeclado} name="data" placeholder="Data" />              
                    <br></br>
                    <input type="text" onChange={eventoTeclado} name="descricao" placeholder="Local" />
                    <br></br>
                    <input type="text" onChange={eventoTeclado} name="imagem" placeholder="Url da imagem" />
                    <br></br>
                    <button onClick={cadastrarEvento}>Criar Evento</button>
                    <br></br>
                    <a href="/">Voltar para a página inicial</a>
                </div>
            </div>
        </div>
    )
}

export default CriarEvento;