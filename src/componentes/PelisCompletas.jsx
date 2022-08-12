import React from 'react'
import Tarjetas from './Tarjetas'
import '../estilos/PelisCompletas.css'

const PelisCompletas = (props) => {
  return (
    <>
    <div id='botonesPaginas'>
      <button>Atrás</button>
      <span>1</span>
      <button>Adelante</button>
    </div>
    {props.data.map((res, id) => {
          return <Tarjetas
          key = {id}
          id = {res.id}
          poster_path={res.poster_path}
          title={res.title}
          release_date={res.release_date}
          vote_average={res.vote_average}
          />
          
          })}
    </>
  )
}

export default PelisCompletas