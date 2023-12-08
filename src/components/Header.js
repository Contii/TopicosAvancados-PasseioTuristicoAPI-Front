import React from 'react';
import '../App.css';

const Header = () => {
    return (
        <div className="header">
        <nav>
            <input type="checkbox" id="show-search" />
            <input type="checkbox" id="show-menu" />
            <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>

            <div class="content">
                <div class="logo">
                    <div class="logo"><a href="index.html"><img src="./images/logo.png" alt="" /></a></div>
                </div>
                <ul class="links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#services">Minha Conta</a></li>
                    <li><a href="#about">Pacotes</a></li>
                    <li><a href="#packages">Passeios</a></li>
                </ul>
            </div>
            <label for="show-search" class="search-icon"><i class="fas fa-search"></i></label>
            <form action="#" class="search-box">
                <input type="text" placeholder="Search" required />
                <button type="submit" class="go-icon"><i class="fas fa-long-arrow-alt-right"></i></button>
            </form>
        </nav>
    </div>
    );
  };
  
  export default Header;