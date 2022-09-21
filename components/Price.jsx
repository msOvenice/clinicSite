import React from 'react'
import price from '../price.json'
import styles from '../styles/Price.module.scss'

const Price = () => {
    let i = 0;

    return (
        <section className={styles.price}>
            <h1 className={styles.title + ' title'}>Ціни на медичні послуги</h1>
            <table className={styles.table}>
                <tbody>
                    {
                        price.map((item) => {
                            i+=1;
                            return (
                        <tr className={styles.tr} key={i}>
                            <td className={styles.tds}>
                                <p className={styles.td}>{item.service}</p>
                                <p className={styles.td}>{item.price}</p>
                            </td>
                        </tr>)
                        })
                    }
                </tbody>
            </table>
            <div className={'container '+ styles.container}>
                <p className={styles.copywriting}>*Ціни діють з 01.04.2022 по 31.04.2022</p>
            </div>
        </section>
    )
}

export default Price