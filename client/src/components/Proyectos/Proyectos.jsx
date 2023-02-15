import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import CardHome from './Card';
import { useNavigate } from 'react-router-dom';
import styles from './Proyectos.module.css'
import img_libro from '../../assets/imagenes/img_lector.png'
import img_calculadora from '../../assets/imagenes/img_calculadora.png'
import img_profe from '../../assets/imagenes/img_profesor.png'
import img_countries from '../../assets/imagenes/img_countries.png'
import swal from 'sweetalert';

const Proyectos = () => {
  useEffect(() => {
    swal({
      title: "En construcción",
      text: "Lo que ves no es la versión definitiva",
      icon: "info",
      buttons: "ok",
    })
  })
  const navigate = useNavigate()
  const handleClick = (props) => {
    console.log(props.route);
    navigate(props.route)
  }
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <h1>Proyectos</h1>
      <div className={styles.divCards} >
        <div className={styles.individualDiv} onClick={() => handleClick({ route: '/countries' })}>
          <CardHome
            titulo='Countries'
            img={img_countries}
          />
        </div>
        <div className={styles.individualDiv} onClick={() => handleClick({ route: '/bookyou' })}>
          <CardHome
            titulo={'BookYou'}
            img={img_libro}
          />
        </div>
        <div className={styles.individualDiv} onClick={() => handleClick({ route: '/calculadora' })}>
          <CardHome
            titulo={'calculadora'}
            img={img_calculadora}
          />
        </div>
        <div className={styles.individualDiv} onClick={() => handleClick({ route: '/profesor' })}>
          <CardHome
            titulo={'Profesor'}
            img={img_profe}
          />
        </div>
      </div>
    </div>
  )
}

export default Proyectos;