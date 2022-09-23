import Image from 'next/image'
import React from 'react'
import styles from '../styles/NewsComp.module.scss'
import srcImg from '../img/news-main.png'
import srcDecl from '../img/hirurg.jpg'

const NewMain = ({src, title, desc, author, num, month, year, flag}) => {
  return (
    <div className={flag == true ? styles.newsMain : styles.newsMainS}>
      <div className={styles.date}>
        <p className={styles.num}>{num}</p>
        <p className={styles.month}>{month}</p>
        <p className={styles.year}>{year}</p>
      </div>
      <div className={flag == true ? styles.imgBlockS : styles.imgBlockS}>
        {flag == true ?
        <Image
          alt={"News"}
          src={srcImg}
          height={280}
          width={450} />
        :
        <Image
          alt={"News"}
          src={srcDecl}
          height={280}
          width={500} />
        }
      </div>
      <h4 className={flag == true ? styles.titleMain : styles.titleMainS}>{title}</h4>
      <p className={flag == true ? styles.desc : styles.descS}>{desc}</p>
      <div className='wrapper'>
        <p className={styles.author}>{author}</p>
        <a className={styles.link} href="#">читати далі</a>
      </div>
    </div>
  )
}

export default NewMain