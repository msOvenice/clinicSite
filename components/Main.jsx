import React, { useState } from 'react'
import styles from '../styles/Main.module.scss'
import doctors from '../doctors.json'
import Card from '../elements/Card';

const Main = () => {
  let i = 0;
  let flag = true;

  return (
    <div>
      <section className={styles.main}>
          <h1 className={styles.title}>Команда лікарів</h1>
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