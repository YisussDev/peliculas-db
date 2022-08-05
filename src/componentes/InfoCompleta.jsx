import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../estilos/InfoCompleta.css'

const capturarId = () => {
  let loc = window.location.href;
  let id = loc.substring(loc.indexOf('?') + 1, loc.length)
  let url = `https://api.themoviedb.org/3/movie/${id}?api_key=8aaf9f27f6ebdda5d9ba7dcfd09e1bce&language=en-US`
  return url;
}

const InfoCompleta = (props) => {
  const [movieData, setMovieData] = useState({})
  useEffect(()=>{
    axios.get(capturarId())
    .then(res => setMovieData(res.data))
  })
  return (
    <div id='infoCompleta'>
      <img src={'https://image.tmdb.org/t/p/w500'+movieData.backdrop_path} alt="" />
      <div id='datosPelicula'>
        <h2>{movieData.title}</h2>
        <p><strong>Estreno:</strong> {movieData.release_date&&movieData.release_date.replace(/-/g, " / ")}</p>
        <p id='descripcion'><strong>Descripción:</strong> <br />{movieData.overview}</p>
      </div>
    </div>
  )
}

export default InfoCompleta