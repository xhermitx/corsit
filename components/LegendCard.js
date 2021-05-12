import styles from "../styles/LegendCard.module.css";

const LegendCard = props => {
    return (
        <div className={styles.base}>
            <div className={styles.card}>
                <div style={{ backgroundImage: `url(${props.image})` }} className={styles.face1}>
                </div>
                <div className={styles.face2}>
                    <h3>{props.name}</h3>
                </div>
            </div>
        </div>
    );
}

export default LegendCard;
