import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styles from '../styles/SearchPopup.module.scss';
import closeImg from "../img/svg/close.svg";
import Image from 'next/image'

const SearchPopup = () => {
  return (
    <Popup
    trigger={<button className={styles.btn + ' ' + styles.btnGreen}>Знайти</button>}
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
            <h2 className={styles.title}>Пошук лікаря</h2>
        </div>
        <div className={styles.content}>
            <p className={styles.subtitle}>Введіть прізвище або спеціалізацію лікаря</p>
            <ul className={styles.listInputs}>
                <li className={styles.itemInputs}>
                    <label className={styles.label}>
                        <input className={styles.input} type="text" name="surname" id="surname" placeholder='Прізвище лікаря' />
                    </label>
                </li>
                <li className={styles.itemInputs}>
                    <label className={styles.label}>
                        <input className={styles.input} type="text" name="specialization" id="specialization" placeholder='Спеціалізація' />
                    </label>
                </li>
                <li className={styles.itemInputs}>
                    <label className={styles.label}>
                        <input className={styles.input} type="text" name="clinic" id="clinic" placeholder='Клініка' />
                    </label>
                </li>
            </ul>
            <button className={styles.btn + ' ' + styles.btnSearch}>
                Знайти
            </button>
        </div>
      </div>
    )}
  </Popup>
  )
}

export default SearchPopup