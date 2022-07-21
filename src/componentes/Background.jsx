import React from 'react'
import '../estilos/Burbujas.css'
import { motion } from 'framer-motion';
import react from '../imagenes/Background/atom.png'


const Background = () => {
  return (
    <div id='contenedor_burbujas'>
        <motion.div
        animate={{rotate: [0,360]}}
        transition={{duration:5, repeat: Infinity, ease:'linear'}}
        >
          <img src={react} alt="" />
        </motion.div>
    </div>
  )
}

export default Background