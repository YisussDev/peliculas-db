import React from 'react'
import '../estilos/Buscador.css'
import { BiSearch } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';




const Buscador = () => {
  let navigate = useNavigate();

  const manejoEnvio = e => {
    e.preventDefault();
    let query = e.target.query.value;
    if(query.length >= 4) {
      navigate(`/listado/search?${query.trim().toLowerCase()}`);
      e.target.query.value=''
    }
    else if(query.length < 4){
      Swal.fire('Ingrese una busqueda mayor a 4 caracteres...')
    }
  }

  return (
    <form className='buscador' onSubmit={manejoEnvio}>
        <input type="text" name='query' placeholder='Ingrese una busqueda...'/>
        <button><BiSearch /></button>
    </form>
  )
}

export default Buscador