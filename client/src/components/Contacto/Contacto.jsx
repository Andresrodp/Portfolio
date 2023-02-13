import React from 'react';
import NavBar from '../NavBar/NavBar';
import styles from './Contacto.module.css'
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillGithub,
  AiOutlineInstagram
} from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Contacto = () => {
  const handleIg = () => {
    window.open('https://www.instagram.com/andresrodp_dev/')
  }
  const handleGitHub = () => {
    window.open('https://github.com/Andresrodp')
  }
  const handlelinkedIn = () => {
    window.open('https://www.linkedin.com/in/andresrodp-fsdeveloper')
  }
  const handleWA = () => {
    window.open('https://wa.me/573027763712')
  }
  const handleGmail = () => {
    navigator.clipboard.writeText('arodriguezp.cs.1@gmail.com').then(() => {
      swal({
        title: 'Copiado con éxito',
        icon: 'success',
        timer: 2000,
        buttons: 'ok',
      })
    })
  }
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <div className={styles.secondContainer}>
        <div className={styles.tarjet}>
          <h1>Tarjeta de contacto</h1>
          <div className={styles.items} onClick={() => handleGitHub()}>
            <AiFillGithub style={{ 'width': '1.5rem', 'height': '1.5rem' }} />
            <p>Andresrodp</p>
          </div>
          <div className={styles.items} onClick={() => handlelinkedIn()}>
            <AiOutlineLinkedin style={{ 'width': '1.5rem', 'height': '1.5rem' }} />
            <p>andresrodp-fsdeveloper</p>
          </div>
          <div className={styles.items} onClick={() => handleIg()}>
            <AiOutlineInstagram style={{ 'width': '1.5rem', 'height': '1.5rem' }} />
            <p>andresrodp_dev</p>
          </div>
          <div className={styles.items} onClick={() => handleGmail()}>
            <AiOutlineMail style={{ 'width': '1.5rem', 'height': '1.5rem' }} />
            <p>arodriguezp.cs.1@gmail.com</p>
          </div>
          <div className={styles.items} onClick={() => handleWA()}>
            <AiOutlineWhatsApp style={{ 'width': '1.5rem', 'height': '1.5rem' }} />
            <p>+57 3027763712</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto;