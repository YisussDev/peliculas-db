import React from 'react'
import './firebase'
import '../estilos/Form.css'
import Swal from 'sweetalert2'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { crearUsuario } from './firebase';
import perfil from '../imagenes/Login/perfil.png'

const Register = () => {
    let navigate = useNavigate();

    useEffect(() =>{
      let token2 = localStorage.getItem('token');
      if(token2){
        navigate('/listado')
      }
    },[navigate])

    const manejoEnvio = async e => {e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



    if(email===''||password==='') {
        Swal.fire({icon: 'warning',
        title: 'Debe llenar ambos campos'})
        return;
      }

      if(emailRegex.test(email)&&email!==''&&password!==''){
      let registroExitoso = await crearUsuario(email, password);
      if (registroExitoso){
        console.log(registroExitoso)
        Swal.fire({icon: 'success',
        title: 'Registro Exitoso'})
        navigate('/')
        } else {
        Swal.fire('Email en uso')
          }
      }}

    const irLogin = () => {
        navigate('/')
      }

  return (
    <>
    <motion.div id='container'
    initial={{scale:0, rotate: -360}}
    animate={{scale:1, rotate:0}}
    transition={{duration:0.5}}
    >
          <div id='imagen'><img src={perfil} alt="" title='perfil'/></div>
    <h1>¡Registrate!</h1>
        <form onSubmit={manejoEnvio}>
          <label>
            <h3>Correo Electrónico:</h3>
            <motion.input whileFocus={{scale:1.05}} type="email" name='email' placeholder='Ingrese su correo electrónico...'/>
          </label>
          <br/>
          <label>
            <h3>Correo Electrónico:</h3>
            <motion.input whileFocus={{scale:1.05}} type="password" name='password' placeholder='Ingrese su contraseña...'/>
          </label><br/>
            <button>Registrarse</button>
        </form>
            <motion.button onClick={irLogin} >Volver</motion.button>
            <h4>¿Ya tienes cuenta?</h4>
    </motion.div>
    </>
  )
}


export default Register