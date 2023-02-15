import React from 'react';
import styles from './Card.module.css';

const CardHome = (props) => {
  return (
    <div className={styles.mainContanier} >
      <h2>{props.titulo}</h2>
      <img src={props.img} alt="img_card" />
    </div>
  )
}

export default CardHome;