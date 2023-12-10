import React from 'react';

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="heading">
        <h3>Nossa Galeria <i className="fa-solid fa-arrow-down"></i></h3>
      </div>

      <div className="gallery-card">
        <div className="row">
          <img src="./images/p1.jpg" alt="" />
        </div>
        <div className="row">
          <img src="./images/p2.png" alt="" />
        </div>
        <div className="row">
          <img src="./images/p3.png" alt="" />
        </div>
        <div className="row">
          <img src="./images/p4.png" alt="" />
        </div>
        <div className="row">
          <img src="./images/p5.png" alt="" />
        </div>
      </div>
    </section>
  );
}