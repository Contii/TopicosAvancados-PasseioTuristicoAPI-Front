import React from 'react';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>
          Entre em<span>Contato</span>
        </h2>
        <p>Precisa de mais informações? Estamos sempre felizes em ouvir de você.
        Se você tiver alguma dúvida, sugestão ou apenas quiser fazer contato conosco, não hesite em enviar uma mensagem.
        Estamos aqui para ajudar e ansiosos para saber mais sobre como podemos atender às suas necessidades.</p>
        <p>Aguardamos o seu contato!</p>
        <ul className="list">
          <li>
            <a href="#">+55 45 9 9999 0000</a>
          </li>
          <li>
            <a href="#">grupoconti@enterprises.com</a>
          </li>
          <li>
            <a href="#">joao Conti</a>
          </li>
        </ul>
      </div>

      <div className="contact-form">
        <form action="#">
          <input type="text" placeholder="Nome" required />
          <input type="number" placeholder="Telefone" required />
          <input type="email" placeholder="Email" required />
          <textarea
            name=""
            id=""
            cols="35"
            rows="10"
            placeholder="Mensagem"
            required
          ></textarea>
          <input type="submit" value="Send" className="submit" required />
        </form>
      </div>
    </section>
  );
}