import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './firebase'
import '../estilos/Listado.css'
import {cargaDatosF} from './firebase'
import { motion } from 'framer-motion'


const Listado = () => {
    let navigate = useNavigate();
    useEffect(() =>{
    let token2 = localStorage.getItem('token');
    if(!token2){
      navigate('/')
    }
  },[navigate])

  const [datos, setDatos] = useState()

 async function cargaDatos () {
    let res = await cargaDatosF()
    res.forEach(doc => {
      setDatos(doc.data());
    })
  }

  const cerrarSesion = () => {
    localStorage.clear();
    navigate('/')
  }



  return (
    <div id='Listado'>
      <motion.button whileHover={{scale:1.1}} onClick={cerrarSesion}>Cerrar Sesión</motion.button>
      <motion.button whileHover={{scale:1.1}} onClick={ cargaDatos }>Cargar Datos</motion.button>
      {datos?(<motion.ul
      initial={{scale:0}}
      animate={{scale:1}}
      >
        <li>{datos.nombre}</li>
        <li>{datos.apellido}</li>
        <li>{datos.celular}</li>
        <li>{datos.email}</li>
      </motion.ul>):null}
    </div>
  )
}

export default Listado