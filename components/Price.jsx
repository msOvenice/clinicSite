import React from 'react'
import price from '../price.json'
import styles from '../styles/Price.module.scss'

const Price = () => {
    return (
        <section className={styles.price}>
            <h1 className={styles.title}>Ціни на медичні послуги</h1>
            <table className={styles.table}>
                <tbody>
                    {
                        price.map((item) => {
                            return (
                        <tr className={styles.tr}>
                            <td className={styles.td}>{item.service}</td>
                            <td className={styles.td}>{item.price}</td>
                        </tr>)
                        })
                    }
                </tbody>
            </table>
            <p>*Ціни діють з 01.04.2022 по 31.04.2022</p>
        </section>
    )
}

export default Price