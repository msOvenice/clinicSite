import Image from 'next/image'
import React from 'react'
import srcImg from '../img/news-all.png'
import styles from '../styles/NewsAll.module.scss'

const NewAll = ({src, title, section, date}) => {
  return (
    <div className={'wrapper ' + styles.wrapper}>
        <div className={styles.imgBlock}>
            <Image 
                alt={"News"}
                src={srcImg}
                height={100}
                width={120}/>
        </div>
        <div className={styles.info}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.section}>{section}</p>
            <p className={styles.date}>{date}</p>
        </div>
    </div>
  )
}

export default NewAll