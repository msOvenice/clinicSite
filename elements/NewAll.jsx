import Image from 'next/image'
import React from 'react'
import srcImg from '../img/news-main.png'
import styles from '../styles/NewsAll.module.scss'

const NewAll = ({src, title, section, date}) => {
  return (
    <div>
        <div className={styles.imgBlock}>
            <Image 
                alt={"News"}
                src={srcImg}
                height={100}
                width={120}/>
        </div>
        <div className={styles.info}>
            <h4 className=''></h4>
        </div>
    </div>
  )
}

export default NewAll