// import SectionHeader from "../Common/SectionHeader/SectionHeader";
// import SliderCard from "../Common/SliderCard/SliderCard";
// import styles from "./ToolsAndTechnologies.module.css";

// const cardData = [
//   {
//     title: "Automation",
//     description: "Fast and reliable.",
//     icon: "fa-solid fa-robot",
//   },
//   {
//     title: "Performance",
//     description: "Optimized results.",
//     icon: "fa-solid fa-gauge-high",
//   },
//   {
//     title: "Security",
//     description: "Top-notch protection.",
//     icon: "fa-solid fa-shield-halved",
//   },
//   {
//     title: "Scalability",
//     description: "Built to grow.",
//     icon: "fa-solid fa-arrows-up-down-left-right",
//   },
// ];

// export default function ToolsAndTechnologies() {
//   // Repeat full set 3 times for seamless scrolling
//   const repeatedCards = [...cardData, ...cardData, ...cardData];

//   return (
//     <div className={styles.container}>
//       <SectionHeader
//         heading="Tools & Techniques We Use"
//         subheading="Industry-leading security testing tools and methodologies to identify and eliminate vulnerabilities."
//       />
//       <div className={styles.sliderTrackContainer}>
//         <div className={styles.scrollWrapper}>
//           {repeatedCards.map((card, index) => (
//             <SliderCard
//               key={index}
//               title={card.title}
//               description={card.description}
//               icon={card.icon}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// ToolsAndTechnologies.jsx
import styles from "./ToolsAndTechnologies.module.css";

const cardData = [
  {
    title: "Automation",
    description: "Fast and reliable.",
    icon: "fa-solid fa-robot",
  },
  {
    title: "Performance",
    description: "Optimized results.",
    icon: "fa-solid fa-gauge-high",
  },
  {
    title: "Security",
    description: "Top-notch protection.",
    icon: "fa-solid fa-shield-halved",
  },
  {
    title: "Scalability",
    description: "Built to grow.",
    icon: "fa-solid fa-arrows-up-down-left-right",
  },
];

export default function ToolsAndTechnologies() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Tools & Techniques We Use</h2>
      <p className={styles.subheading}>
        Industry-leading security testing tools and methodologies to identify
        and eliminate vulnerabilities.
      </p>
      <div className={styles.grid}>
        {cardData.map((card, index) => (
          <div className={styles.item} key={index}>
            <i className={`${card.icon} ${styles.icon}`}></i>
            <h4 className={styles.title}>{card.title}</h4>
            <span className={styles.description}>{card.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
