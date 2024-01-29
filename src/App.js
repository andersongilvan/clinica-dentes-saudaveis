import "./App.css";
import Topo from "./componentes/Topo";
import Home from "./telas/Home";
import Rodape from "./componentes/Rodape";

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


const App = () => {


  useEffect(() => {
    
    ScrollReveal().reveal('div', {
      delay: 400,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      easing: 'linear',
    });
  }, []);

  return (
    <div>
      <Topo />

      <Home />

      <Rodape />
    </div>
  );
};
export default App;
