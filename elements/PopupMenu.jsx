import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styles from '../styles/PopupMenu.module.scss';
import logo from "../img/simejna-logo-2.png";
import closeImg from "../img/svg/close.svg";
import Image from 'next/image'
import burger from "../img/svg/burger.svg";

const PopupMenu = () => {
  return (
    <Popup
    trigger={<button className={styles.button}>
        <Image
            alt={"Clinic Family"}
            src={burger}
            height={48}
            width={40}
            layout="fixed"
        />
    </button>}
    modal
    nested
  >
    {close => (
      <div className={styles.modal}>
        <button className={styles.close} onClick={close}>
        <Image
            alt={"Clinic Family"}
            src={closeImg}
            height={40}
            width={40}
            layout="fixed"
        />
        </button>
        <div className={styles.header}>
            <div className={styles.divImg}>
                <Image
                    alt={"Clinic Family"}
                    src={logo}
                    height={61.84}
                    width={250}
                    layout="fixed"
                />
            </div>
        </div>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li className={styles.item}><div className={styles.contentItem}>Напрямки</div></li>
            <li className={styles.item}><div className={styles.contentItem}>Діагностика</div></li>
            <li className={styles.item}><div className={styles.contentItem}>Про клініку</div></li>
            <li className={styles.item}><div className={styles.contentItem}>Ціни</div></li>
            <li className={styles.item}><div className={styles.contentItem}>Статті/новини</div></li>
            <li className={styles.item}><div className={styles.contentItem}>Мова</div></li>
            <li className={styles.item}><div className={styles.contentItem}>Контакти</div></li>
          </ul>
        </div>
      </div>
    )}
  </Popup>
  )
}

export default PopupMenu