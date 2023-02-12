import React from "react";
import styles from './NavBar.module.css'
import fotoPerfil from '../../assets/imagenes/Andres.png'
import { NavLink, useNavigate } from "react-router-dom";


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
          <NavLink className={styles.NavigationLinks} to='/home'><p>Inicio</p></NavLink>
          <NavLink className={styles.NavigationLinks} to='/blog'><p>Blog</p></NavLink>
          <NavLink className={styles.NavigationLinks} to='/contacto'><p>Contáctame</p></NavLink>
        </div>
      </div>
    </>
  )
}

export default NavBar;