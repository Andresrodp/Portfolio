import React from 'react';
import NavBar from '../NavBar/NavBar';
import styles from './PersonalDescription.module.css';
import {
  impulsorDeMarca,
  NombreCompleto,
  descripcion,
} from './templates';
const PersonalDescription = () => {
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <div className={styles.tarjetsContainer}>
        <div className={styles.lateralTarjet}>
          <h1>Soy un lateral</h1>
        </div>
        <div className={styles.centerTarjet}>
          <h1>{NombreCompleto}</h1>
          <h3>{impulsorDeMarca}</h3>
          <p>{descripcion}</p>
        </div>
        <div className={styles.lateralTarjet}>
          <h1>Soy un lateral</h1>
        </div>
      </div>
    </div>
  )
}

export default PersonalDescription;