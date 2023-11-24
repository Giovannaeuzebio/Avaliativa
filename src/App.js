import './App.css';
import React from 'react';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import { BrowserRouter, Link, Routes, Route, Router } from 'react-router-dom'
import './index.css'; // Importe o arquivo CSS onde você definirá o estilo
import { FaHome } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiCoffee } from "react-icons/fi";
import { ImAccessibility } from "react-icons/im";



const Navegacao = () => {
  return (
    <div>
      <BrowserRouter>
        <ul className="barra-navegacao">
          <li><Link to="/"><FaHome />Home</Link></li>
          <li><Link to="/contato"><BsFillTelephoneFill />Contato</Link></li>
          <li><Link to="/servicos"><FiCoffee />Serviços</Link></li>
          <li><Link to="/sobre"><ImAccessibility />Sobre</Link></li>
        </ul>
      


       {/* Aqui vai aparecer o componente da rota */}

       <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/contato' element={<Contato />}></Route>
          <Route path='/servicos' element={<Servicos />}></Route>
          <Route path='/sobre' element={<Sobre />}></Route>


        </Routes>
        </BrowserRouter>
     {/* rodapé */}
    
    </div>
  );
}

export default Navegacao;