import LegendCard from "../components/LegendCard";
import News from '../components/News';
import styles from "../styles/Home.module.css";
import config from 'react-reveal/globals';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

config({ ssrFadeout: true });

export default function index() {
  const legends = [
    {
      id: "l1",
      name: "Kiran B K",
      role: "Founding Member",
      about: "Software Engineer at Robert Bosch",
      dp: "/kiranbk.jpg",
    },
    {
      id: "l2",
      name: "Shivswaroop C P",
      role: "Founding Member",
      about: "Pursuing Management at Aachen University, Germany",
      dp: "/shivswaroopcp.jpg",
    },
    {
      id: "l3",
      name: "Divyanshu Sahay",
      role: "Former Club Member",
      about: 'Lead Researcher at Student Satellite organization "STUDSAT"',
      dp: "/divyanshus.jpg",
    },
  ];

  const description =
    "Robotics is an interdisciplinary branch of engineering and science that includes mechanical engineering, electronics engineering, computer science, and others. Robotics deals with the design, construction, operation, and use of robots, as well as computer systems for their control, sensory feedback, and information processing.";

  return (
    <div className={styles.home}>

      <h1 className={styles.heading}>Club of Robotics SIT</h1>

      <p className={styles.description}>{description}</p>

      <Fade up>
        <div className={styles.news}>
          <h1>
            Latest in the Field
          </h1>
          <News />
        </div>
      </Fade>

      <div className={styles.legends}>
        <Zoom left cascade><h1>Legends of the Club</h1></Zoom>
        <div className={styles.divider}/>
        <div className={styles.cards}>
          {legends.map(legend => (
            <Zoom bottom duration={2000} key={legend.id}>
              <LegendCard
                name={legend.name}
                role={legend.role}
                bg={legend.dp}
                about={legend.about}
                key={legend.id}
              />
            </Zoom>
          ))}
        </div>
      </div>
      
    </div>
  );
}
