import { FaVenusMars, FaSeedling, FaHandHoldingUsd } from "react-icons/fa";
import RoundedIconCard from "../Common/RoundedIconCard/RoundedIconCard";
import styles from "./Difference.module.css";
export default function Difference() {
  const cards = [
    {
      icon: <FaVenusMars size={40} />,
      title: "Gender Equality",
      text: "We ensure gender equality by guaranteeing 100% wage parity between genders as well as having a very high number of women in the workforce.",
    },
    {
      icon: <FaSeedling size={40} />,
      title: "Rural Job Growth",
      text: "We aspire to stop the rural to urban brain drain in a sustainable way that can be replicated worldwide. We do this by bringing urban jobs to rural India.",
    },
    {
      icon: <FaHandHoldingUsd size={40} />,
      title: "Economic Empowerment",
      text: "Our work directly impacts economic empowerment by skilling and job creation through economic and digital inclusion...",
    },
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>HOW WE ARE DIFFERENT</h2>
      <div className={styles.card_container}>
        <RoundedIconCard
          icon={<FaVenusMars size={40} />}
          title="Gender Equality"
          description="We ensure gender equality by guaranteeing 100% wage parity between genders as well as having a very high number of women in the workforce."
        />
        <RoundedIconCard
          icon=<FaSeedling size={40} />
          title="Rural Job Growth"
          description="We aspire to stop the rural to urban brain drain in a sustainable way that can be replicated worldwide. We do this by bringing urban jobs to rural India."
        />
        <RoundedIconCard
          icon=<FaHandHoldingUsd size={40} />
          title="Economic Empowerment"
          description="Our work directly impacts economic empowerment by skilling and job creation through economic and digital inclusion. This caters to the lack of sustainable employment opportunities as well as low wages in the villages of India."
        />
      </div>
    </div>
  );
}
