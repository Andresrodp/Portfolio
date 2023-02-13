import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorElement.module.css';

const ErrorElement = () => {
  return (
    <div className={styles.background}>
      <div className={styles.messageContainer}>
        <h1>Error 404</h1>
        <h3>¡Ups! Página no encontrada</h3>
        <p>¡Lo sentimos! No hemos podido encontrar la página que buscas, regresa al Home y prueba desde allí.</p>
        <Link to='/home'><button className={styles.btnReturn}>Home</button></Link>
      </div>
    </div>
  )
}

export default ErrorElement;
