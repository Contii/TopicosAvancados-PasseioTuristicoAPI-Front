import React from 'react';
import '../App.css';


const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="row" id="row1">
          <a href="#" id="footer-logo">Grupo Conti</a>
          <p>Grupo Conti é a empresa que criou o Sétima Maravilha, um portal de turismo que é mais do que uma experiência, é uma jornada. Somos uma equipe dedicada, apaixonada pelo desenvolvimento de software e comprometida em criar soluções inovadoras que transcendem as expectativas dos nossos clientes.</p>
          <div className="social-links">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-pinterest-p"></i>
          </div>
        </div>
        <div className="row" id="row2">
          <h3>Mapa do Site</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Minha Conta</a></li>
            <li><a href="#">Pacotes</a></li>
            
            <li><a href="#">Passeios</a></li>
          </ul>
        </div>
        <div className="row" id="row3">
          <h3>Outros Links</h3>
          <ul>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Termos e Condições</a></li>
            <li><a href="#">Políticas de Privacidade</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;