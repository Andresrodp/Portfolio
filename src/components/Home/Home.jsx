import React from "react";
import NavBar from '../NavBar/NavBar';
import styles from './Home.module.css';
import CardHome from './Card';

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <div className={styles.divCards}>
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
      </div>
    </div>
  )
}

export default Home;