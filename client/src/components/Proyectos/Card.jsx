import React from 'react';
import styles from './Card.module.css';

const CardHome = (props) => {
  return (
    <div className={styles.mainContanier} >
      <div className={styles.divImg}>
        <img src={props.img} alt="img_card" />
      </div>
      <div className={styles.divInfo}>
        <div className={styles.divHeaderInfo}>
          <h2>{props.titulo}</h2>
          <button>Ver más</button>
        </div>
        <p>Esto es hardcodeado</p>
      </div>

    </div>
  )
}

export default CardHome;