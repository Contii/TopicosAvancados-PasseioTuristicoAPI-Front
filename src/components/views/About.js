import React from 'react';

export default function About(){
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="./images/about-img.png" alt="" />
      </div>
      <div className="about-info">
        <h6>Sobre</h6>
        <h3>How Work This Travel Agency</h3>
        <p>O Grupo Conti é uma empresa de tecnologia que se destaca por sua atuação diversificada em áreas como turismo,
        e-commerce e diversos ramos de serviços online. Com foco na implementação de soluções eficientes e personalizadas,
        a empresa busca atender às demandas do mercado de forma inovadora. Sua abordagem técnica, combinada com criatividade,
        visa oferecer serviços que atendam às necessidades específicas dos clientes. 
        O Grupo Conti posiciona-se como uma opção confiável para empresas que buscam
        soluções tecnológicas adaptáveis em um ambiente digital em constante transformação.</p>

        <button className="about-btn">Entre em Contato</button>
      </div>
    </section>
  );
};
