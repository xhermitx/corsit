import Footer from './Footer';
import Navigation from './Navigation';
import styles from '../styles/Layout.module.css';

function Layout(props) {
    return (
        <div>
            <Navigation />
            <main className={styles.main}>{props.children}</main>
            <Footer />
        </div>
    )
}
export default Layout;
