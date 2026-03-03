import styles from './Animate.module.css';
import water from '../assets/splash.png'
import scenery from '../assets/scenery.jpg'

export default function Animate() {
    return (
        <section id='home'>
            <div className={styles.banner} style={{ backgroundImage: `url(${scenery})` }}>
                <div className={styles.product}>
                    <div className={styles.drink}></div>
                    <img className={styles.water} src={water} />
                </div>
            </div>
        </section>
    )
}