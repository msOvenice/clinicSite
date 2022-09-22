import Image from 'next/image'
import React from 'react'
import srcImg from '../img/news-all.png'
import styles from '../styles/NewsAll.module.scss'

const NewAll = ({src, title, section, date, flag}) => {
  return (
    <div className={'wrapper wrapperBlock'}>
        <div className={styles.imgBlock}>
            <Image 
                alt={"News"}
                src={srcImg}
                height={100}
                width={120}/>
        </div>
        <div className={styles.info}>
            <h4 className={flag == true ? styles.title : styles.titleSecond}>{title}</h4>
            <p className={flag == true ? styles.section : styles.sectionSecond}>{section}</p>
            <p className={styles.date}>{date}</p>
        </div>
    </div>
  )
}

export default NewAll