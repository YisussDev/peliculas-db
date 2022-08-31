import React from 'react'
import Tarjetas from './Tarjetas/Tarjetas'
import '../estilos/PelisCompletas.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'



const PelisCompletas = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    document.querySelector('.contenedorPeliculas').style='display:none'
    document.querySelector('.lds-roller').style='display:inline-block'
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=8aaf9f27f6ebdda5d9ba7dcfd09e1bce&language=en-US&page=${page}`)
      .then(res => setData(res.data.results)
      )
      .catch(err => Swal.fire({icon: 'warning',
      title: 'Hubo un error'}))
    setTimeout(() =>{
      document.querySelector('.lds-roller').style='display:none'
      document.querySelector('.contenedorPeliculas').style='display:flex'
    }, 1500)
  },[page])

  const aumentarPage = () => {
    setPage(page + 1)
  }
  const disminuirPage = () => {
    if(page > 1){
      setPage(page - 1)
    }
  }

  return (
  <>
    <div className="lds-roller">
      <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
      </div>
    </div>
    <div className='contenedorPeliculas'>
      <div className='botonesPaginas'>
      <button onClick={disminuirPage}>Atrás</button>
      <span>{page}</span>
      <button onClick={aumentarPage}>Adelante</button>
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
  
  </>
  )
}

export default PelisCompletas