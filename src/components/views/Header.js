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
            <a href="/">
              <img src="./logo.png" alt="" />
            </a>
          </div>
          <ul className="links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/user-account">Minha Conta</a>
            </li>
            <li>
              <a href="/pacotes">Pacotes</a>
            </li>
            <li>
              <a href="/passeios">Passeios</a>
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