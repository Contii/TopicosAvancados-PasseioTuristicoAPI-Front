import React from 'react';
import ze from '../../images/pic-1.png';
import maria from '../../images/pic-2.png';
import sergio from '../../images/pic-3.png';

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="main-txt">
        <h3>O que nossos clientes dizem:</h3>
      </div>
      <div className="card-content">
        <div className="row">
          <h5>
          <img src={ze} alt="" />
            Zé da Silva
          </h5>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <p>
            Incrível, nunca vi nada igual, serviço profissional que não deixa nada a desejar, recomendo a todos os meus amigos e familiares.
          </p>
        </div>
        <div className="row">
          <h5>
            <img src={maria} alt="" />
            Maria do bairro
          </h5>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <p>
            A estadia foi incrível, o hotel era muito confortável e o guia turístico era muito simpático e atencioso, recomendo a todos.
          </p>
        </div>
        <div className="row">
          <h5>
            <img src={sergio} alt="" />
            Sergio Malandro
          </h5>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <p>
            O passeio foi bom, mas não achei que fosse esperar tanto em filas, poderia melhorar a logística.
          </p>
        </div>
      </div>
    </section>
  );
}