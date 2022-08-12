// import React, { useState } from 'react'
import { useNavigate, Navigate } from "react-router-dom";
import logomax from '../imagenes/BarraTareas/logomax.png'
import bmenu from '../imagenes/BarraTareas/bmenu.png'
import './firebase'
import '../estilos/Listado.css'
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import InfoCompleta from "./InfoCompleta";
import PelisCompletas from "./PelisCompletas";
import { motion } from "framer-motion";

const variants = {
  open: {x: '-100vw' },
  closed: {x: "100vw" },
}


const Listado = () => {
  
  let navigate = useNavigate();
  const token2 = localStorage.getItem('token');
  const[page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=8aaf9f27f6ebdda5d9ba7dcfd09e1bce&language=en-US&page=${page}`)
      .then(res => setData(res.data.results))
  },[page])
  const clickImagen = () => {
    setPage(1);
    navigate('/listado');
  }
  
  return (
    <>
      {!token2 && <Navigate to='/' />}

        <div id='Listado' >
          <motion.div className="barraLateral"
        animate={isOpen ? "open" : "closed"}
        variants={variants} >
        <ul>
          <li>Inicio</li>
          <li>Populares</li>
          <li>Contacto</li>
          <button onClick={()=> setIsOpen(false)}>❌</button>
        </ul>
          </motion.div>
          <div id="barratareas">
            <img onClick={()=>clickImagen()} src={logomax} id="logo" alt="" />
            <div id='botonMenu' onClick={() => setIsOpen(true)}>
              <img src={bmenu} alt="" />
            </div>
          </div>
          <section id='sectionInicio'>
            <Routes>
              <Route Exact path="/" element={<PelisCompletas data={data} />} />
              <Route Exact path="/info" element={<InfoCompleta />} />
            </Routes>
          </section>
        </div>
    </>
  )
}

export default Listado