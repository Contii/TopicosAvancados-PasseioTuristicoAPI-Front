import React from 'react';

export default function Services(){
  return (
    <section className="services" id="services">
      <div className="heading">
        <h3>Serviços</h3>
      </div>
      <div className="card-content">
        <div className="row">
          <i className="fas fa-globe-asia"></i>
          <div className="card-body">
            <h3>Pelo mundo todo</h3>
            <p>Levamos você e sua familia ou amigos para qualquer lugar do mundo, nosso foco são as sete maravilhas da natureza.</p>
          </div>
        </div>
        <div className="row">
          <i className="fas fa-plane"></i>
          <div className="card-body">
            <h3>Fast Travel</h3>
            <p>Para quem não quer esperar muito tempo, podemos vender pacotes personalizados com um tempo de espera consideravelmente curto.</p>
          </div>
        </div>
        <div className="row">
          <i className="fas fa-hotel"></i>
          <div className="card-body">
            <h3>Hotéis Diversificados</h3>
            <p>Sejam um hotéis mais confortáveis ou com melhor custo-benefício, nossos parceiros disponibilizam diversas opções.</p>
          </div>
        </div>
        <div className="row">
          <i className="fas fa-bullhorn"></i>
          <div className="card-body">
            <h3>Guias Turísticos</h3>
            <p>Nossos passeios contam com um guia turístico local para acompanhar você durante todo o passeio.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
