import React from 'react'
import styles from '../styles/Main.module.scss'
import doctors from '../doctors.json'
import Card from '../elements/Card';
import Image from 'next/image';
import imgMain from '../img/doctor-patient.jpg'
import imgMainSmall from '../img/doctor-patient-phone.jpg'

const Main = () => {
  let i = 0;
  let flag = true;

  return (
    <div>
      <section className={styles.main}>
        <div className={styles.imgMain}>
          <Image 
            alt={"Clinic comand"}
            src={imgMain}
            height={636}
            width={1990} />
        </div>
        <div className={styles.imgMainSmall}>
          <Image 
            alt={"Clinic comand"}
            src={imgMainSmall}
            height={459}
            width={909} />
        </div>
        <h1 className={'titleMain ' + styles.title}>Команда лікарів</h1>
      </section>
      <section className={'container ' + styles.container}>
        <h2 className={styles.subtitle}>Усі лікарі</h2>
        <hr className={styles.hr}></hr>
        <div className={styles.cards}>
          {
            doctors.map((item) => {
              i += 1;
              return <Card key={i} {...item} flag={flag} />
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Main