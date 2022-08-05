import React from 'react'
import Tarjetas from './Tarjetas'

const PelisCompletas = (props) => {
  return (
    <>
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