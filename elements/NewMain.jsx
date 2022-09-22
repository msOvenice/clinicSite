import Image from 'next/image'
import React from 'react'
import styles from '../styles/News.module.scss'
import srcImg from '../img/news-main.png'

const NewMain = ({src, title, desc, author, num, month, year}) => {
  return (
    <div className={styles.newsMain}>
      <div className={styles.date}>
        <p className={styles.num}>{num}</p>
        <p className={styles.month}>{month}</p>
        <p className={styles.year}>{year}</p>
      </div>
      <div className={styles.imgBlock}>
        <Image
          alt={"News"}
          src={srcImg}
          height={280}
          width={450} />
      </div>
      <h4 className={styles.titleMain}>{title}</h4>
      <p className={styles.desc}>{desc}</p>
      <div className='wrapper'>
        <p className={styles.author}>{author}</p>
        <a className={styles.link} href="#">читати далі</a>
      </div>
    </div>
  )
}

export default NewMain