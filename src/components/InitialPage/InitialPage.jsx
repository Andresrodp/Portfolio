import React from "react";
import { Link } from "react-router-dom";
import styles from './InitialPage.module.css';
import fotoPerfil from '../../assets/imagenes/Andres.png';

const InitialPage = () => {
  return (
    <div className={styles.MainContainer}>
      <div>
        <img src={fotoPerfil} alt="" className={styles.imgPerfil} />
      </div>
      <h1>Andrés Rodríguez</h1>
      <Link to='/home'><button>Home</button></Link>
    </div>
  )
}

export default InitialPage
