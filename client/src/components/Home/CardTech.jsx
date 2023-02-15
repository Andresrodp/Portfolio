import React from "react";
import styles from './CardTech.module.css'

const CardTech = (props) => {
  return (
    <>
      <div className={styles.mainContainer} >
        <img src={props.img} alt="" />
      </div>
    </>
  )
}

export default CardTech;