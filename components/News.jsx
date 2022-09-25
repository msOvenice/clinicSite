import React from 'react'
import styles from '../styles/News.module.scss'
import newsMain from '../news.json'
import newsAll from '../news.all.json'
import NewMain from '../elements/NewMain';
import NewAll from '../elements/NewAll';

const News = () => {
  let i = 0, j = 0;
  return (
    <section className={styles.container + ' container'}>
        <h2 className={'title ' + styles.title}>Новини</h2>
        <div className={'wrapper ' + styles.wrappers}>
            <div className={styles.main}>
                <h3 className={styles.subtitle}>Головні</h3>
                <div className={styles.news}>
                {
                    newsMain.map((item) => {
                    i += 1;
                    return <NewMain key={i} {...item} flag={true} />
                    })
                }
                </div>
                <div className={styles.post}>
                    <h4 className={styles.titleBlock}>Підписатись на новини</h4>
                    <label className={styles.label}>
                        <input className={styles.input} type="email" name="email" id="email" placeholder='Введіть електнонну адресу' />
                    </label>
                    <button className={styles.btn}>Підписатись</button>
                </div>
            </div>
            <div className={styles.all}>
                <h3 className={styles.subtitle}>Всі новини</h3>
                <div className={styles.all}>
                {
                    newsAll.map((item) => {
                    j += 1;
                    return <NewAll key={j} {...item} flag={true} />
                    })
                }
                </div>
                <button className={styles.btnNext}>Наступна сторінка</button>
            </div>
        </div>
    </section>
  )
}

export default News