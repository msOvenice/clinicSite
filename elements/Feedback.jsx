import Image from 'next/image'
import React from 'react'
import styles from '../styles/Feedback.module.scss'
import src from '../img/comma.png'
import feedback from "../feedback.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Feedback = () => {
    let settings = {
        slidesToShow: 2,
        slidesToScroll: 1
    };
    let j = 0;
  return (
    <section className={styles.feedback  + ' ' + styles.container + ' container'}>
        <h2 className={'title ' + styles.title}>Відгуки</h2>
        <Slider {...settings} className={styles.slider}>
        {
            feedback.map((item) => {
                j += 1;
                return (
                    <div className={styles.block} key={j}>
                        <div className={styles.comma}>
                            <Image 
                                alt={"News"}
                                src={src}
                                height={110}
                                width={134}/>
                        </div>
                        <p className={styles.text}>{item.feedback}</p>
                        <p className={styles.author}>{item.author}</p>
                    </div>
                )
            })
        }
        </Slider>
        <button className={styles.btn}>Залишити відгук</button>
    </section>
  )
}

export default Feedback