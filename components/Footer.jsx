import React from 'react';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className="container">
            <div className={"wrapper " + styles.wrapper}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a className={styles.link} href="#">Напрямки</a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="#">Лікарі</a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="#">Діагностика</a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="#">Ціни</a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="#">Контакти</a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="#">Вакансії</a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="#">Політика конфіденційності</a>
                    </li>
                </ul>
                <div className={styles.contacts}>
                    <a className={styles.phone} href="phone:+380974011010">+38 097 401 10 10</a>
                    <a className={styles.email} href="email:info@simeyna.clinic">info@simeyna.clinic</a>
                    <ul className={styles.social}>
                        <li className={styles.itemSocial}>
                            <a className={styles.linkSocial} href="#"></a>
                        </li>
                        <li className={styles.itemSocial}>
                            <a className={styles.linkSocial} href="#"></a>
                        </li>
                        <li className={styles.itemSocial}>
                            <a className={styles.linkSocial} href="#"></a>
                        </li>
                    </ul>
                </div>
                <div className={styles.btns}>
                    <button className={styles.btn}>Записатись на прийом</button>
                    <button className={styles.btn}>Залишити відгук</button>
                </div>
            </div>
            <p className={styles.copywriting}>© 2022 КЛІНІКА СІМЕЙНОГО ЗДОРОВ’Я. Використання матеріалів цього сайту можливе тільки з посиланням на джерело.</p>
        </div>
    </footer>
  )
}

export default Footer