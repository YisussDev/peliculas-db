import React from 'react'
import Buscador from "../Buscador";
import bmenu from '../../imagenes/BarraTareas/bmenu.png'
import logomax from '../../imagenes/BarraTareas/logomax.png'
import { useNavigate } from "react-router-dom";

const BarraTareas = () => {
    let navigate = useNavigate();
    const clickImagen = () => {
        navigate('/listado');
      }
  return (
    <div id="barratareas">
        <img onClick={()=>clickImagen()} src={logomax} id="logo" alt="" />
            <div id='botonMenu'>
              <img src={bmenu} alt="" />
            </div>
        <Buscador />
    </div>
  )
}

export default BarraTareas