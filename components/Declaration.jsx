import React from 'react'
import styles from '../styles/Declaration.module.scss'
import srcImg from '../img/my-doctor.png'
import srcVac from '../img/vactine.jpg'
import srcdec from '../img/declaration.jpg'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import actions from "../actions.json";
import articles from "../articles.json";
import NewMain from '../elements/NewMain';
import Feedback from '../elements/Feedback'
import Link from 'next/link'

const Declaration = () => {
    let settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
        ]
    };
    let i = 0, j = 0;
    return (
        <div className={styles.decl}>
            <section className={styles.main}>
                    <div className={styles.imgMain}>
                        <Image 
                            alt={"Declaration"}
                            src={srcdec}
                            height={967}
                            width={1990} />
                    </div>
                <div className={styles.mainContent + ' container wrapper'}>
                    <h1 className={'titleMain ' + styles.mainTitle}>Заключення декларацій<br/>на БЕЗОПЛАТНЕ обслуговування в рамках медичної реформи</h1>
                    <div className={styles.mainDeclare}>
                        <div className={styles.mainImg}>
                            <Image 
                                alt={"News"}
                                src={srcImg}
                                height={339}
                                width={291}/>
                        </div>
                        <button className={styles.mainBtn}>Укласти декларацію</button>
                    </div>
                </div>
            </section>
            <section className={styles.services + ' ' + styles.container + ' container'}>
                <h2 className={'title ' + styles.title}>Послуги</h2>
                <div className={styles.servicesContent}>
                    <div className={styles.servicesItem}>
                        <p className={styles.servicesText}>Сімейна медицина</p>
                    </div>
                    <div className={styles.servicesItem}>
                        <p className={styles.servicesText}>Паліативна допомога</p>
                    </div>
                    <div className={styles.servicesItem}>
                        <p className={styles.servicesText}>Реабілітація</p>
                    </div>
                    <div className={styles.servicesItem}></div>
                </div>
            </section>
            <section className={styles.action  + ' ' + styles.container + ' container'}>
                <h2 className={'title ' + styles.actionBigTitle}>Акції</h2>
                <Slider {...settings}>
                {
                    actions.map((item) => {
                        i += 1;
                        return (
                            <div className={styles.actionBlock} key={i}>
                                <div className={styles.actionImg}>
                                    <Image 
                                        alt={"News"}
                                        src={srcVac}
                                        height={280}
                                        width={500}/>
                                </div>
                                <h3 className={styles.actionTitle}>{item.title}</h3>
                            </div>
                        )
                    })
                }
                </Slider>
            </section>
            <section className={styles.articles  + ' ' + styles.container + ' container'}>
                <h2 className={'title ' + styles.articlesTitle}>Статті</h2>
                <Slider {...settings} className={styles.articlesSlider}>
                {
                    articles.map((item) => {
                        j += 1;
                        return (
                            <NewMain key={j} {...item} flag={false} />
                        )
                    })
                }
                </Slider>
                <Link href="../news"><button className={styles.articlesBtn}>Усі новини</button></Link>
            </section>
            <Feedback />
        </div>
    )
}

export default Declaration