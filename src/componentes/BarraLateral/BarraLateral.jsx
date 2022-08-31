import React from 'react'
import './BarraLateral.css'
import { useNavigate } from 'react-router-dom'
import { FaHome, FaStar, FaDoorClosed } from 'react-icons/fa';
import Swal from 'sweetalert2';

const BarraLateral = (props) => {
  let navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.clear()
    navigate('/')
    Swal.fire({icon: 'warning',
      title: 'Has cerrado sesión'})
  }

  return (
    <div className={`barraLateral ${false && 'show'}`} >
        <ul>
            <li><span><FaHome /></span> Inicio</li>
            <li><span><FaStar /></span>Populares</li>
            <li onClick={cerrarSesion} ><span><FaDoorClosed /></span>Cerrar Sesión</li>
            <button >❌</button>
        </ul>
    </div>
  )
}

export default BarraLateral