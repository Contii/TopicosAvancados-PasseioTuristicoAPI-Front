import React from 'react';
import p1 from '../../images/p1.jpg';
import p2 from '../../images/p2.png';
import p3 from '../../images/p3.png';
import p4 from '../../images/p4.png';
import p5 from '../../images/p5.png';


export default function Home() {
    return (
        <>
        <section className="home" id="home">
            <div className="main-text">
                <h3> Sétima Maravilha</h3>
                <h4>Explore o mundo viajando conosco.</h4>
                <p> Qual o seu destino? temos todas as informações que necessita para aproveitar ao máximo sua aventura. </p>

                <a href="#packages">
                    <button id="home-btn">
                        Pacotes <i className="fa-solid fa-arrow-down"></i>
                    </button>
                </a>
            </div>
        </section>
        <section className="services" id="services">
            <div className="heading">
                <h3>Serviços</h3>
            </div>
            <div className="card-content">
                <div className="row">
                    <i className="fas fa-globe-asia"></i>
                    <div className="card-body">
                        <h3>Pelo mundo todo</h3>
                        <p>Levamos você e sua familia ou amigos para qualquer lugar do mundo, nosso foco são as sete maravilhas da natureza.</p>                        </div>
                    </div>
                <div className="row">
                    <i className="fas fa-plane"></i>
                    <div className="card-body">
                        <h3>Fast Travel</h3>
                        <p>Para quem não quer esperar muito tempo, podemos vender pacotes personalizados com um tempo de espera consideravelmente curto.</p>                        </div>
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
            </section><section className="gallery" id="gallery">
                <div className="heading">
                    <h3>Nossa Galeria <i className="fa-solid fa-arrow-down"></i></h3>
                </div>
                <div className="gallery-card">
                    <div className="row">
                        <img src={p1} alt="" />
                    </div>
                    <div className="row">
                        <img src={p2} alt="" />
                    </div>
                    <div className="row">
                        <img src={p3} alt="" />
                    </div>
                    <div className="row">
                        <img src={p4} alt="" />
                    </div>
                    <div className="row">
                        <img src={p5} alt="" />
                    </div>
                </div>
            </section></>
    );
}