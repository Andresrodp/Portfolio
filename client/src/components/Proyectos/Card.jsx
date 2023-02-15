import React from 'react';
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';
import CardTech from '../Home/CardTech'

const CardHome = (props) => {
  console.log(props);
  const navigate = useNavigate()
  const handleClick = (route) => {
    console.log(route);
    navigate(route)
  }
  return (
    <div className={styles.mainContanier} >
      <div className={styles.divImg}>
        <img src={props.img} alt="img_card" />
      </div>
      <div className={styles.divInfo}>
        <div className={styles.divHeaderInfo}>
          <h2>{props.titulo}</h2>
          <button onClick={() => handleClick(props.route)}>Ver más</button>
        </div>
        <p>{props.parrafo}</p>
        <div>
          <p>Tecnologías:</p>
          <div className={styles.divContainerTechs}>
            {props.techs.map((tech, i) => {
              return <CardTech img={tech} key={i} />
            })}
          </div>
        </div>
      </div>

    </div>
  )
}

export default CardHome;