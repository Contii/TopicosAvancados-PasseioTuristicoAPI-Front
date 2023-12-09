import React from 'react';

export default function Header() {
  return (
    <div className="header">
      <nav>
        <input type="checkbox" id="show-search" />
        <input type="checkbox" id="show-menu" />
        <label htmlFor="show-menu" className="menu-icon">
          <i className="fas fa-bars"></i>
        </label>

        <div className="content">
          <div className="logo">
            <a href="index.html">
              <img src="./logo.png" alt="" />
            </a>
          </div>
          <ul className="links">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#services">Minha Conta</a>
            </li>
            <li>
              <a href="#about">Pacotes</a>
            </li>
            <li>
              <a href="#packages">Passeios</a>
            </li>
          </ul>
        </div>
        <label htmlFor="show-search" className="search-icon">
          <i className="fas fa-search"></i>
        </label>
        <form action="#" className="search-box">
          <input type="text" placeholder="Search" required />
          <button type="submit" className="go-icon">
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </form>
      </nav>
    </div>
  );
};