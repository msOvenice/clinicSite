import React from 'react'
import styles from '../styles/Info.module.scss'
import Card from '../elements/Card';
import Feedback from '../elements/Feedback';
import doctors from '../doctors.json'
import work from '../work.json'
import { useRouter } from 'next/router';

const Info = () => {
    const { asPath } = useRouter();
    console.log(asPath); // '/blog/xyz'
    const regexp = /doctors\/([a-z]+)/;
    let result = asPath.match(regexp);
    let i = 0;
    console.log(result[1])

    return (
        <div className={styles.content}>
            <div className={styles.container + ' container'}>
                <section className={styles.data}>
                    {
                        doctors.map((item) => {
                        if (item.href == asPath)
                            return <Card key={item.id} {...item} flag={false} />
                        })
                    }
                </section>
                <section className={styles.profile}>
                    <h3 className={styles.subtitle}>Профіль лікаря</h3>
                    <ul className={styles.work}>
                        {
                            work.map((item) => {
                                i+=1;
                                if (item.surname == result[1]) {
                                    return item.text.map((el) => {
                                        return <li key={i} className={styles.Item}>{el}</li>
                                    });
                                }
                            })
                        }
                    </ul>
                    <ul className={styles.achievement}>
                        <li className={styles.Item}>Член Європейскої асоціації ендоскопічних хірургів (EAES);</li>
                        <li className={styles.Item}>Асоціації хірургів Херсонської області;</li>
                    </ul>
                </section>
                <hr className={styles.hr}></hr>
                <section className={styles.question}>
                    <h3 className={styles.subtitle}>З яких питань звертатись?</h3>
                    <ul className={styles.questionList}>
                        <li className={styles.Item}>Заключення декларацій на безкоштовне обслуговування у рамках медичної реформи.</li>
                        <li className={styles.Item}>Проведення профілактичних оглядів диспансерних хворих (тобто хворих із хронічними захворюваннями).</li>
                        <li className={styles.Item}>Проведенная вакцинації.</li>
                        <li className={styles.Item}>Раннє виявлення онкозахворювань, інфекційних чи інших видів захворювань та своєчасне скерування на вторинний, третинний рівень медичної допомоги.</li>
                        <li className={styles.Item}>Захворювання дихальної системи: ларингіт, бронхіт, пневмонія.</li>
                        <li className={styles.Item}>Захворювання серцево-судинної системи: гіпертонічна хвороба, ішемічна хвороба, церебральний атеросклероз.</li>
                    </ul>
                    <button className={styles.infoBtn}>Записатись на прийом</button>
                </section>
            </div>
            <Feedback />
        </div>
    )
}

export default Info
