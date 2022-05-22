import styles from '../styles/Navigation.module.css';
import Link from 'next/link';

function Navigation() {

    return (
        <div>
            <nav className={styles.navigation}>
                <div className={styles.logo}>
                    CORSIT
                </div>
                <ul>
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href="/">OUR WORK</Link>
                    </li>
                    <li>
                        <Link href="#">OUR TEAM</Link>
                    </li>
                    <li>
                        <Link href="#">ACHIEVEMENTS</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
