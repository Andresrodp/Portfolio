import React from 'react';
import NavBar from '../NavBar/NavBar';
import styles from './PersonalDescription.module.css';
import {
  impulsorDeMarca,
  NombreCompleto,
  descripcion,
  lenguajes,
  parteFinal,
  tituloLateralDerecho,
  tituloLateralIzquierdo,
} from './templates';
const PersonalDescription = () => {
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <div className={styles.tarjetsContainer}>
        <div className={styles.lateralTarjet}>
          <h1>{tituloLateralIzquierdo}</h1>
        </div>
        <div className={styles.centerTarjet}>
          <h1>{NombreCompleto}</h1>
          <h3>{impulsorDeMarca}</h3>
          <p>{descripcion}</p>
          <p className={styles.lenguajes}>{lenguajes}</p>
          <p>{parteFinal}</p>
        </div>
        <div className={styles.lateralTarjet}>
          <h1>{tituloLateralDerecho}</h1>
        </div>
      </div>
    </div>
  )
}

export default PersonalDescription;