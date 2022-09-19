import React from 'react';
import styles from '../styles/Header.module.scss';
import logo from "../img/simejna-logo-2.png";
import Image from 'next/image'

function Header() {
  return (
    <header>
        <div className={styles.headerFirst}>
            <div className='container'>
                <div className='wrapperRow'>
                    <div className={styles.divImg}>
                        <Image
                            alt={"some alt"}
                            src={logo}
                            height={61.84}
                            width={250}
                        />
                    </div>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <a href="#" className={styles.link}>Лікарі</a>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={styles.link}>Клініки</a>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={styles.link}>Ціни</a>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={styles.link}>Декларантам</a>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={styles.link}>Про нас</a>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={styles.link}>Співпраця</a>
                        </li>
                    </ul>
                    <a className={styles.phone} href="phone:+38 097 401 10 10">+38 097 401 10 10</a>
                    <button className={styles.btn}>
                        Вхід
                    </button>
                </div>
            </div>
        </div>
        <div className={styles.headerSecond}></div>
    </header>
  )
}

export default Header