import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Cardpequeno from './components/CardPequeno/CardPequeno';
import foto from './img/vini.jfif'
import logoLabenu from './img/labenu.png'
import cart from './img/carta.png'
import loca from './img/locali.png'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const ContainerFilho = styled.div`
  width: 40vw;
  margin: 10px 0;
`
const H2 = styled.h2` 
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  return (
    <Container className="App">
      <ContainerFilho className="page-section-container">
        <H2>Dados pessoais</H2>
        <CardGrande 
          imagem={foto} 
          nome="Vinicius Duarte" 
          descricao="Oi, eu sou o vinicius, estou fazendo o curso de web full-stack pela a labenu. 
          Meu objetivo é atuar no mercado de trabalho na área de minha formação.
          "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <Cardpequeno
          imagem1 = {cart}
          imagem = {loca}
          email= "Vinicius.benduarte14@gmail.com"
          endereco = "Santa urusula interior da BA"
        />
      </ContainerFilho>

      <ContainerFilho className="page-section-container">
        <H2>Experiências profissionais</H2>
        <CardGrande 
          imagem={logoLabenu} 
          nome="Labenu" 
          descricao="Conhecimento com git e git-hub, inglês tecnico. Experiência com javaScript, html e css. 
          E agora vamos estudar sobre o react essa tecnologia que me encontou demais. Gosto de trabalhar
          em equipe." 
        />
       
        <CardGrande 
          imagem={foto}
          nome="NASA" 
          descricao="Aqui eu nao sei o que era para adicionar entao
          to escrevendo alguma coisa pra vocês lerem.
          vou deixar uma fotinha minha pq me acho bonitinho." 
        />
      </ContainerFilho>

      <div className="page-section-container">
        <H2>Minhas redes sociais</H2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </Container>
  );
}

export default App;
