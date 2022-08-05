// import React, { useState } from 'react'
import { useNavigate, Navigate } from "react-router-dom";
import logomax from '../imagenes/BarraTareas/logomax.png'
import bmenu from '../imagenes/BarraTareas/bmenu.png'
import './firebase'
import '../estilos/Listado.css'
import Tarjetas from './Tarjetas'
import axios from "axios";
import { useEffect, useState } from "react";


const Listado = () => {

  const [data, setData] = useState([])
  const[url, setUrl] = useState('https://api.themoviedb.org/3/movie/popular?api_key=8aaf9f27f6ebdda5d9ba7dcfd09e1bce&language=en-US&page=1')
  let navigate = useNavigate();

  useEffect(()=>{
    axios.get(url)
    .then( res => setData(res.data.results))
  },[url])


  let token2 = localStorage.getItem('token')
  const cerrarSesion = () => {
    localStorage.clear();
    navigate('/')
  }
  console.log(data);

  return (
    <>
    {!token2 && <Navigate to ='/' /> }
    <div id='Listado'>
      <div id="barratareas">
        <img src={logomax} id="logo" alt="" />
        <div id='botonMenu'>
          <img src={bmenu} alt="" />
        </div>
      </div>
      <section id='sectionInicio'>
        {data.map((res, id) => {
          return <Tarjetas 
          key = {id}
          poster_path={res.poster_path}
          title={res.title}
          release_date={res.release_date}
          vote_average={res.vote_average}
          />
          
        })}

      </section>
    </div>
    <div id="barralateral">

    </div>
    </>
  )
}

export default Listado