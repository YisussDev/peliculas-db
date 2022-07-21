import React from 'react'
import { useEffect } from 'react'
import './firebase'
import '../estilos/Form.css'
import Swal from 'sweetalert2'
import { motion } from 'framer-motion'
import { iniciarSesion } from './firebase';
import { useNavigate } from "react-router-dom";
import perfil from '../imagenes/Login/perfil.png'



const Login = () => {
    let navigate = useNavigate();

    useEffect(() =>{
    let token2 = localStorage.getItem('token');
    if(token2){
      navigate('/listado')
    }
  },[navigate])
  
    const manejoEnvio = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(email===''||password==='') {
        Swal.fire({icon: 'warning',
        title: 'Debe llenar ambos campos'})
        return;
      }

      if(emailRegex.test(email)&&email!==''&&password!==''){
      let sesionIniciada = await iniciarSesion(email, password);
      if (sesionIniciada){
        Swal.fire({icon: 'success',
        title: 'Sesión Iniciada'})
        localStorage.setItem('token', sesionIniciada);
        navigate('/listado')
        } else {
        Swal.fire('Usuario o contraseña incorrecta')
          }
      }
  }
    const irRegistro = () => {
    navigate('/register')
  }

  return (
    
    <motion.div id='container'
    initial={{scale:0, rotate: -360}}
    animate={{scale:1, rotate:0}}
    transition={{duration:0.5}}
    >
          <div id='imagen'><img src={perfil} alt="" title='perfil'/></div>
    <h1>Iniciar sesión</h1>
        <form onSubmit={manejoEnvio}>
          <label>
            <motion.input whileFocus={{scale:1.05}} type="email" name='email' placeholder='ingrese su correo electrónico...'/>
          </label>
          <br/>
          <label>
            <motion.input whileFocus={{scale:1.05}} type="password" name='password' placeholder='ingrese su contraseña...'/>
          </label><br/>
            <button>Ingresar</button>
        </form>
        <button onClick={irRegistro}>¡Registrate!</button>
    </motion.div>
  )
}

export default Login