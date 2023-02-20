import React from "react";
import styles from './NavBar.module.css'
import fotoPerfil from '../../assets/imagenes/Andres.png'
import { NavLink, useNavigate } from "react-router-dom";
import {
  AiFillHome,
  AiFillFolder,
  AiFillPhone
} from 'react-icons/ai';


const NavBar = () => {
  const navigation = useNavigate()
  const handleClick = (e) => {
    e.preventDefault();
    navigation('/perfil')
  }
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.imgPerfil} name='soyElDiv' onClick={(e) => handleClick(e)}>
          <img src={fotoPerfil} alt="" />
          <h3>Andrés ✌</h3>
        </div>
        <div className={styles.divLinks}>
          <NavLink className={styles.NavigationLinks} to='/home'><AiFillHome className={styles.icons} /><p>Inicio</p></NavLink>
          <NavLink className={styles.NavigationLinks} to='/proyectos'><AiFillFolder className={styles.icons} /><p>Proyectos</p></NavLink>
          <NavLink className={styles.NavigationLinks} to='/contacto'><AiFillPhone className={styles.icons} /><p>Contáctame</p></NavLink>
        </div>
      </div>
    </>
  )
}

export default NavBar;