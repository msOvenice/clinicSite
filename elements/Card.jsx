import Image from 'next/image'
import React from 'react'
import stylesMain from '../styles/Main.module.scss'
import stylesInfo from '../styles/Info.module.scss'
import Link from 'next/link'

const Card = ({name, surname, specialization, category, expierence, img, imgBig, href, flag}) => {
  const path = '_next/static/media';
  return flag == true ?
  (
    <div className={stylesMain.card }>
      <div className={stylesMain.cardImg}>
        <Image
          alt={surname + ' ' + name}
          src={`${path}/${img}`}
          layout='fill'
          objectFit='cover' />
      </div>
      <div className={stylesMain.cardSmall}>
        <Image
          alt={surname + ' ' + name}
          src={`${path}/${img}`}
          layout='fill'
          objectFit='cover' />
      </div>
      <div className={stylesMain.info}>
        <h3 className={stylesMain.infoSurname}>{surname}</h3>
        <h3 className={stylesMain.infoName}>{name}</h3>
        <p className={stylesMain.infoSpecialization}>{specialization}</p>
        <p className={stylesMain.infoCategory}>{category}</p>
        <button className={stylesMain.infoBtn}>Записатись на прийом</button>
        <Link href={href}><button className={stylesMain.infoBtn}>Детальніше</button></Link>
      </div>
  </div>
  ) :
  (
    <div className={stylesInfo.card}>
      <div className={stylesInfo.cardImg}>
        <Image
          alt={surname + ' ' + name}
          src={`${path}/${imgBig}`}
          layout='fill'
          objectFit='cover' />
      </div>
      <div className={stylesInfo.info}>
        <h2 className={stylesInfo.infoSurname}>{surname}</h2>
        <h2 className={stylesInfo.infoName}>{name}</h2>
        <p className={stylesInfo.infoSpecialization}>{specialization}</p>
        <p className={stylesInfo.infoCategory}>{category}</p>
        <h4 className={stylesInfo.infoExpierence}>Досвід роботи</h4>
        <div className={stylesInfo.infoExpierenceBlock}>
          <p className={stylesInfo.infoYear}>{expierence}</p>
          <p className={stylesInfo.infoYearText}>років</p>
        </div>
        <button className={stylesInfo.infoBtn}>Записатись на прийом</button>
      </div>
    </div>
  )
}

export default Card