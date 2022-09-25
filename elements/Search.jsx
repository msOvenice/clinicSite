import React from 'react';
import styles from '../styles/Header.module.scss';
import SearchPopup from './SearchPopup';

const Search = () => {
  return (
    <div className={'container ' + styles.container}>
        <div className={'wrapper ' + styles.wrapper}>
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
            <SearchPopup />
        </div>
    </div>
  )
}

export default Search