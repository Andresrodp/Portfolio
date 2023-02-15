import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from './Home.module.css'
import img_perfil from '../../assets/imagenes/Andres.png'
import CardTech from './CardTech.jsx'
import img_css from '../../assets/logos/css.png'
import img_html from '../../assets/logos/html5.png'
import img_js from '../../assets/logos/JavaScript.png'
import img_jwt from '../../assets/logos/jwt.png'
import img_mongoDB from '../../assets/logos/mongoDB.png'
import img_node from '../../assets/logos/Node.png'
import img_postgre from '../../assets/logos/postgreSQL.png'
import img_react from '../../assets/logos/react.png'
import img_redux from '../../assets/logos/redux.png'

const Home = () => {
  const imagenes = [img_css, img_html, img_js, img_jwt, img_mongoDB, img_node, img_postgre, img_react, img_redux]
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <div className={styles.divInformation}>
        <div className={styles.divTemplate}>
          <h5>Estudia más, capacítate más, esfuérzate más... y mantén la puerta abierta</h5>
          <h1>Andrés Ricardo Rodríguez Pardo</h1>
          <h3>FullStack Developer</h3>
          <div className={styles.divTechnologies}>
            {imagenes.map((card, i) => {
              return <CardTech img={card} key={i} />
            })}
          </div>
          <p></p>
        </div>
        <div className={styles.divImg}>
          <img src={img_perfil} alt="foto de perfil" />
        </div>
      </div>

    </div>
  )
}

export default Home;