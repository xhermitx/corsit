import styles from "../styles/LegendCard.module.css";

const LegendCard = props => {
    return (
        <div className={styles.base}>
            <div className={styles.card}>
                <div style={{backgroundImage: `url(${props.bg})`}} className={styles.face1}>
                </div>
                <div className={styles.face2}>
                    <h3>{props.name}</h3>
                    <br/>
                    <h4>{props.role}</h4>
                    <h4>{props.about}</h4>
                </div>
            </div>
        </div>
    );
}

export default LegendCard;
