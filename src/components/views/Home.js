import React from 'react';
import p1 from '../../images/p1.jpg';
import p2 from '../../images/p2.png';
import p3 from '../../images/p3.png';
import p4 from '../../images/p4.png';
import p5 from '../../images/p5.png';
import unitedState from '../../images/united state.png';
import jordan from '../../images/jordan.png';
import china from '../../images/china.png';
import mexico from '../../images/Mexico.png';
import france from '../../images/france.png';
import greece from '../../images/Greece.png';
import spain from '../../images/Spain.png';
import turkey from '../../images/Turkey.png';


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
        </section>
        <section className="gallery" id="gallery">
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
        </section>
        <section className="packages" id="packages">
            <div className="main-txt">
                <h3>Packages</h3>
            </div>

            <div className="card-content">
                <div className="row">
                <img src={unitedState} alt="" />
                    <div className="card-body">
                        <h3>Estados Unidos</h3>
                        <p>Conheça Nova Iorque e a estátua da liberdade.</p>
                        <div className="rating">
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                        </div>
                        <h5>Valor R$8.950</h5>
                        <button>Reservar</button>
                    </div>
                </div>

                <div className="row">
                    <img src={jordan} alt="" />
                    <div className="card-body">
                        <h3>Jordânia</h3>
                        <p>Conheça a cidade arqueológica de Petra.</p>
                        <div className="rating">
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                        </div>
                        <h5>Valor R$12.340</h5>
                        <button>Reservar</button>
                    </div>
                </div>

                <div className="row">
                    <img src={china} alt="" />
                    <div className="card-body">
                        <h3>China</h3>
                        <p>Vislumbre a paisagem enquanto caminha sobre a muralha da China.</p>
                        <div className="rating">
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                        </div>
                        <h5>Valor R$9.500</h5>
                        <button>Reservar</button>
                    </div>
                </div>

                <div className="row">
                    <img src={mexico} alt="" />
                    <div className="card-body">
                        <h3>México</h3>
                        <p>Aprecia a cultura mexicana e participe de um dos maiores eventos de balonismo do mundo.</p>
                        <div className="rating">
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                        </div>
                        <h5>Valor R$3.500</h5>
                        <button>Reservar</button>
                    </div>
                </div>

                <div className="row">
                    <img src={france} alt="" />
                    <div className="card-body">
                        <h3>França</h3>
                        <p>Almoçe e jante diante da grande Torre Eiffel.</p>
                            <div className="rating">
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                        </div>
                        <h5>Valor R$9.320</h5>
                        <button>Reservar</button>
                    </div>
                </div>

                <div className="row">
                    <img src={greece} alt="" />
                    <div className="card-body">
                        <h3>Grécia</h3>
                        <p>Participe das festas mais animadas e conheça a cultura grega.</p>
                        <div className="rating">
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                        </div>
                        <h5>Valor R$5.400</h5>
                        <button>Reservar</button>
                    </div>
                </div>

                <div className="row">
                    <img src={spain} alt="" />
                    <div className="card-body">
                        <h3>Espanha</h3>
                        <p>Visite uma das melhores praias da espanha.</p>
                        <div className="rating">
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                        </div>
                        <h5>Valor R$4.790</h5>
                        <button>Reservar</button>
                    </div>
                </div>

                <div className="row">
                    <img src={turkey} alt="" />
                    <div className="card-body">
                        <h3>Turquia</h3>
                        <p>Na divisão do ocidente com o oriente, conheça a Basílica de Santa Sofia.</p>
                        <div className="rating">
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                        </div>
                        <h5>Valor R$7.450</h5>
                        <button>Reservar</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}