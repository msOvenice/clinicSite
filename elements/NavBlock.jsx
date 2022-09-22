import React from 'react'
import styles from '../styles/NavBlock.module.scss'

const NavBlock = ({flag}) => {
  return (
    <div className={flag == true ? 'wrapper' : styles.wrapper}>
        <div className={styles.post}>
            <h4 className={styles.title}>Підписатись на новини</h4>
            <label className={styles.label}>
                <input className={styles.input} type="email" name="email" id="email" placeholder='Введіть електнонну адресу' />
            </label>
            <button className={styles.btn}>Підписатись</button>
        </div>
        <div className={styles.btnBlock}>
            <button className={styles.btnNext}>Наступна сторінка</button>
        </div>
    </div>
  )
}

export default NavBlock