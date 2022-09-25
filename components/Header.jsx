import React from 'react';
import styles from '../styles/Header.module.scss';
import logo from "../img/simejna-logo-2.png";
import Image from 'next/image'
import Search from '../elements/Search';
import PopupMenu from '../elements/PopupMenu';

const Header = () => {
  return (
    <header>
        <div className={styles.headerFirst}>
            <div className='container'>
                <div className={'wrapper ' + styles.wrapper}>
                    <div className={styles.divImg}>
                        <Image
                            alt={"Clinic Family"}
                            src={logo}
                            height={61.84}
                            width={250}
                            layout="fixed"
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
                    <div className={styles.blockNav}>
                        <a className={styles.phone} href="phone:+38 097 401 10 10">+38 097 401 10 10</a>
                        <button className={styles.btn}>
                            Вхід
                        </button>
                        <PopupMenu />
                    </div>
                </div>
            </div>
        </div>
        <Search />
        <hr className={styles.hr}></hr>
    </header>
  )
}

export default Header