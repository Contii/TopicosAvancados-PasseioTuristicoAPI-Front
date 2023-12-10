import React from 'react';
import bookImg from '../../images/book-img.png';

export default function Book() {
  return (
    <section className="book" id="book">
      <div className="book-img">
        <img src={bookImg} alt="" />
      </div>
      <div className="book-form">
        <h5>Reserve seu pacote.</h5>
        <form action="#">
          <input type="text" placeholder="Destino?" required />
          <input type="int" placeholder="Quantos?" required />
          <input type="date" placeholder="Data de ida:" required />
          <input type="date" placeholder="Data de chegada:" required />
          <input type="text" placeholder="Forma de pagamento" required />
          <input type="submit" value="Reservar Agora" className="submit" required />
        </form>
      </div>
    </section>
  );
}