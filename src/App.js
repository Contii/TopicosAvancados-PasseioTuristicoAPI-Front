//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

export default function App() {
  return (
    <>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="style.css" />

      <BrowserRouter>
        <body>
        <Header/>
        <AppRoutes/>
        <Footer/>
        </body>
      </BrowserRouter>

    </>
  );
}


// Antigo header
// function Header2() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">Turismos</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
//               <li className="nav-item">
//                 <Link to="/user" className='nav-link'>Usuario</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/x" className='nav-link'>Outro Qualquer</Link>
//               </li>
            
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }