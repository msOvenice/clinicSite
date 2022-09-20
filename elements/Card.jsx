import Image from 'next/image'
import React, { useState } from 'react'
import srcImg from '../img/doctor.png'
import stylesMain from '../styles/Main.module.scss'
import stylesInfo from '../styles/Info.module.scss'

const Card = ({name, surname, specialization, category, flag}) => {
  const [styles, setStyles] = useState(stylesMain);
  if (flag == true) {
    () => setStyles(stylesMain);
  }
  else {
    () => setStyles(stylesInfo);
  }
  
  return (
    <div className={styles.card}>
        <div className={styles.cardImg}>
            <Image
                alt={surname + ' ' + name}
                src={srcImg}
                height={290}
                width={220} />
        </div>
        <div className={styles.info}>
            <h3 className={styles.infoSurname}>{surname}</h3>
            <h3 className={styles.infoName}>{name}</h3>
            <p className={styles.infoSpecialization}>{specialization}</p>
            <p className={styles.infoCategory}>{category}</p>
            <button className={styles.infoBtn}>Записатись на прийом</button>
            <button className={styles.infoBtn}>Детальніше</button>
        </div>
    </div>
  )
}

export default Card