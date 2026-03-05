import styles from './Animate.module.css';
import water from '../assets/splash.png'
import scenery from '../assets/scenery.jpg'

export default function Animate() {
    return (
        <section id='home'>
            <div className={styles.banner} style={{ backgroundImage: `url(${scenery})` }}>
                <div className={styles.textBlock}>
                    <div className="autoShow">
                        <span className={styles.eyebrow}>— Pure · Refreshing · Natural</span>
                        <h1 className={styles.headline}>
                            <span className={styles.lineOne}>Elevate</span>
                            <span className={styles.lineTwo}>Your</span>
                            <span className={styles.lineThree}>Hydration</span>
                        </h1>
                        <div className={styles.divider}></div>
                        <p className={styles.subtext}>Crafted for those who demand more from every drop.</p>
                    </div>
                </div>
                <div className={styles.product}>
                    <div className={styles.drink}></div>
                    <img className={styles.water} src={water} />
                </div>
            </div>
        </section>
    )
}