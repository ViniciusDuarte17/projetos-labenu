import logo from './logo.svg';
import './App.css'
import foto from './img/casinha.png';
import foto2 from './img/alta.jpg';
import foto3 from './img/inscricao.png'



function App() {

  const titulo = "Lab Tube"
  const footer = "Oi! Eu moro no footer!"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}
  
  return (
    <div>
        <div class="tela-inteira">
        <header>
            <h1>{titulo}</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca"/>
            
        </header>

        <main>
            <nav class="menu-vertical">
                <ul>
                    <li class="botoes-meunu-vertical"><img className="icone" src= {foto} alt=""/>   Início</li>
                    <li class="botoes-meunu-vertical"> <img className="icone" src= {foto2} alt=""/>  Em alta</li>
                    <li class="botoes-meunu-vertical"> <img className="icone" src= {foto3} alt=""/>  Inscrições</li>
                    <hr/>
                    <li class="botoes-meunu-vertical"> <img className="icone" src= {foto} alt=""/>  Originais</li>
                    <li class="botoes-meunu-vertical"> <img className="icone" src= {foto} alt=""/>  Histórico</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1" alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2" alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>{footer}</h4>
        </footer>
    </div>
      
    </div>
  );
}

export default App;
