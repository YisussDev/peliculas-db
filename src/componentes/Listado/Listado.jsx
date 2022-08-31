// import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
import '../firebase'
import './Listado.css'
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import InfoCompleta from "../InfoCompleta";
import PelisCompletas from "../PelisCompletas";
import Search from "../Search";
import BarraLateral from "../BarraLateral/BarraLateral";
import BarraTareas from "../BarraTareas/BarraTareas";

const Listado = () => {
  const token2 = localStorage.getItem('token');
  const [isOpen, setIsOpen] = useState(false);
  
  
  return (
    <>
      {!token2 && <Navigate to='/' />}

        <div id='Listado' >
          <BarraLateral isOpen={isOpen} />
          <BarraTareas />
          <section id='sectionInicio'>
            <Routes>
              <Route Exact path="/" element={<PelisCompletas />} />
              <Route Exact path="/info" element={<InfoCompleta />} />
              <Route Exact path="/search" element={<Search />} />
            </Routes>
          </section>
          <div className="top">zona top</div>
        </div>
    </>
  )
}

export default Listado