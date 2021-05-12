import LegendCard from "../components/LegendCard";
import styles from "../styles/Home.module.css";

export default function index() {
  return (
    <div className={styles.home}>
      <h1 className={styles.heading}>Club of Robotics SIT</h1>
      
      <p className={styles.description}>
        "Robotics is an interdisciplinary branch of engineering and science
          that includes mechanical engineering, electronics engineering,
          computer science, and others. Robotics deals with the design,
          construction, operation, and use of robots, as well as computer
          systems for their control, sensory feedback, and information
          processing."
      </p>
      <div className={styles.legends}>
        <h1>Legends of the Club</h1>
        <div className={styles.cards}>
          <LegendCard name='Elon' image='../public/divyanshus.jpg'/>
          <LegendCard name='Jeff' image='../public/kiranbk.jpg'/>
          <LegendCard name='Bill' image='../public/shivswaroopcp.jpg'/>
        </div>
      </div>
    </div>
  );
}
