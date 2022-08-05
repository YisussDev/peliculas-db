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



const Listado = () => {
  
  const token2 = localStorage.getItem('token');
  let navigate = useNavigate();
  const[page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [estadoBotones, setEstadoBotones] = useState(true)
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8aaf9f27f6ebdda5d9ba7dcfd09e1bce&language=en-US&page=${page}`)
      .then(res => setData(res.data.results))
      
  },[page])


  const disminuir = () => {
    if(page > 1){
      setPage(page - 1);
    }
  }
  const aumentar = () => {
    if(page){
      setPage(page + 1);
    }
  }
  const clickImagen = () => {
    setPage(1);
    setEstadoBotones(true);
    navigate('/listado');
  }
  return (
    <>
      {!token2 && <Navigate to='/' />}
        <div id='Listado' >
          <div id="barratareas">
            <img onClick={()=>clickImagen()} src={logomax} id="logo" alt="" />
            <div id='botonMenu'>
              <img src={bmenu} alt="" />
            </div>
          </div>
          <section id='sectionInicio'>
            {estadoBotones&&<div id="botonesPaginas">
              <button onClick={()=>disminuir()}>-</button>
              <span>{page}</span>
              <button onClick={()=>aumentar()}>+</button>
            </div>}
            <Routes>
              <Route Exact path="/" element={<PelisCompletas data={data} />} />
              <Route Exact path="/info" element={<InfoCompleta />} />
            </Routes>
          </section>
        </div>
      <div id="barralateral">

      </div>
    </>
  )
}

export default Listado