//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './components/views/Header';
import Footer from './components/views/Footer';

export default function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
        <AppRoutes/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}