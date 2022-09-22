import React from 'react'
import styles from '../styles/Declaration.module.scss'
import srcImg from '../img/my-doctor.png'
import Image from 'next/image'

const Declaration = () => {
  return (
    <div>
        <section className={styles.main}>
            <div className={styles.mainContent + ' container wrapper'}>
                <h1 className={'titleMain ' + styles.mainTitle}>Заключення декларацій<br/>на БЕЗОПЛАТНЕ обслуговування в рамках медичної реформи</h1>
                <div className={styles.mainDeclare}>
                    <div className={styles.mainImg}>
                        <Image 
                            alt={"News"}
                            src={srcImg}
                            height={339}
                            width={291}/>
                    </div>
                    <button className={styles.mainBtn}>Укласти декларацію</button>
                </div>
            </div>
        </section>
        <section className={styles.services + ' ' + styles.container + ' container'}>
            <h2 className={'title ' + styles.title}>Послуги</h2>
            <div className={styles.servicesContent}>
                <div className={styles.servicesItem}>
                    <p className={styles.servicesText}>Сімейна медицина</p>
                </div>
                <div className={styles.servicesItem}>
                    <p className={styles.servicesText}>Паліативна допомога</p>
                </div>
                <div className={styles.servicesItem}>
                    <p className={styles.servicesText}>Реабілітація</p>
                </div>
                <div className={styles.servicesItem}></div>
            </div>
        </section>
    </div>
  )
}

export default Declaration