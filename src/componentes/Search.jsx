import React from 'react'
import Tarjetas from './Tarjetas/Tarjetas'
import '../estilos/PelisCompletas.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";


const capturarQuery = () => {
  let loc = window.location.href;
  let query = loc.substring(loc.indexOf('?') + 1, loc.length)
  let url = `https://api.themoviedb.org/3/search/movie?api_key=8aaf9f27f6ebdda5d9ba7dcfd09e1bce&language=en-US&query=${query}`
  return url;
}

const Search = () => {
  const[data, setData] = useState([])

  useEffect(()=>{
    let queryUrl= capturarQuery();
    axios.get(queryUrl)
    .then(res=> setData(res.data.results))
  })


  return (
    <div className='contenedorPeliculas'>
      <div className='botonesPaginas'>
      <button>Atrás</button>
      <span>1</span>
      <button>Adelante</button>
      </div>
        {data.map((res, id) => {
          return <Tarjetas
          key = {id}
          id = {res.id}
          poster_path={res.poster_path}
          title={res.title}
          release_date={res.release_date}
          vote_average={res.vote_average}
          />
          })}
      <div className='botonesPaginasBottom'>
            <button>Atrás</button>
            <span>1</span>
            <button>Adelante</button>
      </div>
    </div>
  )
}

export default Search