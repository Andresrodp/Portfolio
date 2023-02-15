import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import CardHome from './Card';
import styles from './Proyectos.module.css'
import img_libro from '../../assets/imagenes/img_lector.png'
import img_profe from '../../assets/imagenes/img_profesor.png'
import img_countries from '../../assets/imagenes/img_countries.png'
import swal from 'sweetalert';
import { descripcionBookyou } from './templates'
import img_css from '../../assets/logos/css.png'
import img_html from '../../assets/logos/html5.png'
import img_js from '../../assets/logos/JavaScript.png'
import img_jwt from '../../assets/logos/jwt.png'
import img_mongoDB from '../../assets/logos/mongoDB.png'
import img_react from '../../assets/logos/react.png'
import img_redux from '../../assets/logos/redux.png'

const Proyectos = () => {
  useEffect(() => {
    swal({
      title: "En construcción",
      text: "Lo que ves no es la versión definitiva",
      icon: "info",
      buttons: "ok",
    })
  })
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <div className={styles.divCards} >
        <div className={styles.individualDiv} >
          <CardHome
            titulo={'BookYou'}
            img={img_libro}
            route={'/bookyou'}
            parrafo={descripcionBookyou}
            techs={[img_js, img_html, img_react, img_redux, img_css, img_jwt, img_mongoDB]}
          />
        </div>
        <div className={styles.individualDiv} >
          <CardHome
            titulo='Countries'
            img={img_countries}
            route={'/countries'}
            parrafo={'HardCodeado'}
            techs={[img_js]}
          />
        </div>
        <div className={styles.individualDiv} >
          <CardHome
            titulo={'Profesor'}
            img={img_profe}
            route={'/profesor'}
            parrafo={'Hardcodeado'}
            techs={[img_js]}
          />
        </div>
      </div>
    </div>
  )
}

export default Proyectos;