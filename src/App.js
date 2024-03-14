// App.js
import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './Componentes/Navbar/Navbar';
import Home from './Componentes/Home/Home';
import SobreMi from './Componentes/SobreMi/SobreMi';
import Proyectos from './Componentes/Proyectos/Proyectos';
import Skills from './Componentes/Skills/Skills';
import Contacto from './Componentes/Contacto/Contacto';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Element name="home" className="home">
        <Home />
      </Element>
      <Element name="sobreMi" className="sobreMi">
        <SobreMi />
      </Element>
      <Element name="proyectos" className="proyectos">
        <Proyectos />
      </Element>
      <Element name="skills" className="skills">
        <Skills />
      </Element>
      <Element name="contacto" className="contacto">
        <Contacto />
      </Element>
    </div>
  );
}

export default App;