import React from 'react'
import styles from '../styles/Info.module.scss'
import Card from '../elements/Card';
import doctors from '../doctors.json'

const Info = () => {
    let ind = 3, i = 0;
    return (
        <div className={styles.container + ' container'}>
            <section className={styles.data}>
                {
                    doctors.map((item) => {
                    i += 1;
                    if (i == ind)
                        return <Card key={i} {...item} flag={false} />
                    })
                }
            </section>
            <section className={styles.profile}>
                <h3 className={styles.subtitle}>Профіль лікаря</h3>
                <ul className={styles.work}>
                    <li className={styles.Item}>2012 р. – закінчив Дніпропетровську медичну академію МЗ України;</li>
                    <li className={styles.Item}>2012 – 2014 рр. – інтернатура за спеціальністю «Хірургія» на базі Херсонської обласної клінічної лікарні;</li>
                    <li className={styles.Item}>2015 – 2019 рр. – ординатор, хірург Херсонської обласної клінічної лікарні</li>
                    <li className={styles.Item}>2019 р. – т. ч. – завідуючий відділенням малоінвазивної та ендоскопічної хірургії Херсонського обласного онкологічного диспансера.</li>
                </ul>
                <ul className={styles.achievement}>
                    <li className={styles.Item}>Член Європейскої асоціації ендоскопічних хірургів (EAES);</li>
                    <li className={styles.Item}>Асоціації хірургів Херсонської області;</li>
                </ul>
            </section>
            <hr className={styles.hr}></hr>
            <section className={styles.qiestion}>
                <h3 className={styles.subtitle}>З яких питань звертатись?</h3>
                <ul className={styles.questionList}>
                    <li className={styles.Item}>Заключення декларацій на безкоштовне обслуговування у рамках медичної реформи.</li>
                    <li className={styles.Item}>Проведення профілактичних оглядів диспансерних хворих (тобто хворих із хронічними захворюваннями).</li>
                    <li className={styles.Item}>Проведенная вакцинації.</li>
                    <li className={styles.Item}>Раннє виявлення онкозахворювань, інфекційних чи інших видів захворювань та своєчасне скерування на вторинний, третинний рівень медичної допомоги.</li>
                    <li className={styles.Item}>Захворювання дихальної системи: ларингіт, бронхіт, пневмонія.</li>
                    <li className={styles.Item}>Захворювання серцево-судинної системи: гіпертонічна хвороба, ішемічна хвороба, церебральний атеросклероз.</li>
                </ul>
            </section>
        </div>
    )
}

export default Info
