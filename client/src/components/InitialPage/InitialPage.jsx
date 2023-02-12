import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from './InitialPage.module.css';
import fotoPerfil from '../../assets/imagenes/Andres.png';

const InitialPage = () => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.divImagenYBoton}>
        <Link to='/home'>
          <img src={fotoPerfil} alt="" className={styles.imgPerfil} />
        </Link>
        <h1>Andrés Rodríguez</h1>
        <NavLink className={styles.LinkToHome} to='/home'>Home</NavLink>
      </div>
    </div>
  )
}

export default InitialPage
