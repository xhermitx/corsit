import styles from '../styles/Navigation.module.css';

function Navigation() {

    return (
        <div className={styles.component_body}>
            <nav className={styles.navigation}>
                <div className={styles.logo}>
                    CORSIT
                </div>
                <ul>
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="#">OUR WORK</a>
                    </li>
                    <li>
                        <a href="#">OUR TEAM</a>
                    </li>
                    <li>
                        <a href="#">ACHIEVEMENTS</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
