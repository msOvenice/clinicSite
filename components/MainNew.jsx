import React from 'react'
import styles from '../styles/NewsMain.module.scss'
import newsAll from '../news.all.json'
import NewAll from '../elements/NewAll';
import src from '../img/news-main.png'
import srcSlider from '../img/news-slider.jpg'
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const MainNew = () => {
  let i = 0, j = 0;

  return (
    <section className={styles.container + ' container'}>
        <div className={'wrapper ' + styles.wrappers}>
            <div className={styles.main}>
                <h2 className={'title ' + styles.title}>Тренінги з невідкладної допомоги</h2>
                <div className={styles.news}>
                    <div className={'wrapper ' + styles.info}>
                        <p className={styles.section}>назва розділу</p>
                        <p className={styles.date}>27.02.2022</p>
                    </div>
                    <p className={styles.desc}>Дуже важливо, саме зараз, разом зі Збройними Силами України,  кожному вести свою маленьку боротьбу</p>
                    <div className={styles.imgBlock}>
                        <Image 
                            alt={"News"}
                            src={src}
                            height={370}
                            width={640}/>
                    </div>
                    <div className={styles.textBlock}>
                        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim, risus in laoreet tempus, lectus metus tempus sapien, id commodo sapien risus sit amet odio. In luctus vestibulum elit. Nulla pulvinar euismod nisi sed aliquam. Etiam eleifend purus lorem. Morbi elementum libero diam, ac venenatis ex fringilla a. Vivamus id libero consectetur, ullamcorper magna eu, semper urna. Etiam dui nisl, commodo non libero vel, dictum tempus augue. Mauris non nunc gravida quam iaculis suscipit. Nulla iaculis tincidunt neque, eget viverra magna mollis quis. Vivamus cursus arcu et erat sollicitudin semper.</p>
                        <ul className={styles.list}>
                            <li className={styles.item}>Ut sit amet turpis vel odio congue interdum.</li>
                            <li className={styles.item}>Ut sit amet erat nec ligula interdum placerat.</li>
                            <li className={styles.item}>Morbi quis massa quis diam dignissim mollis quis in augue.</li>
                        </ul>
                        <h3 className={styles.smallTitle}>Підзаголовок Н2</h3>
                        <p className={styles.text}>Sed vitae dui sed risus consequat commodo in non lectus. Mauris eu varius elit, at aliquet enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam quam tortor, lacinia sed ipsum eu, sodales mattis libero. Nullam pretium elit in odio dignissim faucibus. Fusce maximus elit luctus, vehicula nunc id, rutrum ipsum. Morbi odio justo, sollicitudin tincidunt ex vel, egestas ultricies tellus. Curabitur bibendum semper sapien et lobortis. Donec id turpis tellus. Suspendisse eleifend, elit vel pretium tristique, justo metus porttitor elit, a varius massa odio eget justo. Vestibulum vitae lorem eget odio porttitor fermentum tincidunt a mi. Aliquam nec fermentum velit, et lobortis libero. Curabitur eget dolor pharetra, mattis orci a, viverra ipsum.</p>
                    </div>
                </div>
                <Carousel>
                    <div>
                        <Image 
                        alt={"News"}
                        src={srcSlider}
                        height={370}
                        width={640}/>
                    </div>
                    <div>
                        <Image 
                        alt={"News"}
                        src={srcSlider}
                        height={370}
                        width={640}/>
                    </div>
                    <div>
                        <Image 
                        alt={"News"}
                        src={srcSlider}
                        height={370}
                        width={640}/>
                    </div>
                    <div>
                        <Image 
                        alt={"News"}
                        src={srcSlider}
                        height={370}
                        width={640}/>
                    </div>
                    <div>
                        <Image 
                        alt={"News"}
                        src={srcSlider}
                        height={370}
                        width={640}/>
                    </div>
                </Carousel>
            </div>
            <div className={styles.all}>
                <h3 className={styles.subtitle}>Всі новини</h3>
                <div className={styles.all}>
                {
                    newsAll.map((item) => {
                    j += 1;
                    return <NewAll key={j} {...item} flag={false} />
                    })
                }
                </div>
                <button className={styles.btnNext}>Наступна сторінка</button>
                <div className={styles.post}>
                    <h4 className={styles.titleBlock}>Підписатись на новини</h4>
                    <label className={styles.label}>
                        <input className={styles.input} type="email" name="email" id="email" placeholder='Введіть електнонну адресу' />
                    </label>
                    <button className={styles.btn}>Підписатись</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainNew