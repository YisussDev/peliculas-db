import React from 'react'
import './Tarjetas.css'
import star from '../../imagenes/Listado/start.png'
import { Link } from 'react-router-dom'

const Tarjetas = (props) => {
  return (
    <Link to={`/listado/info?${props.id}`}>
      <div id='tarjetas'>
        <img src={props.poster_path?'https://image.tmdb.org/t/p/w500'+props.poster_path : 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg'} alt="" />
          <div id='infoPeli'>
              <div id='nombreYFecha'>
                <h4>{props.title.substring(0,20) + '...'}</h4>
                <h5>{props.release_date.substring(0,4)}</h5>
              </div>
              <div id='estrellas'>
                <img src={star} alt="" />
                <p>{props.vote_average}/10.0</p>
              </div>
            </div>
      </div>
    </Link>
      
  )
}

export default Tarjetas