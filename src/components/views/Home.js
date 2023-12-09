import React from 'react';

export default function Home() {
    return (
        <section className="home" id="home">
        <div className="main-text">
          <h3> Sétima Maravilha <br/> Explore o mundo viajando conosco. </h3>
          <p> Qual o seu destino? temos todas as informações que necessita para aproveitar ao máximo sua aventura. </p>
  
          <a href="#packages">
            <button id="home-btn">
              Pacotes <i className="fa-solid fa-arrow-down"></i>
            </button>
            <button id="home-btn2">
              <i className="fa-sharp fa-solid fa-circle-play"></i>
            </button>
          </a>
        </div>
      </section>
    );
}