import styles from "./TestimonialComponent.module.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Members = [
  {
    name: "Kavitha Sivashankaran",
    role: "Engineer: Quality and Regulatory Affairs , G3 MEDICAL SYSTEMS PVT LTD",
    description:
      "Throughout the project, they demonstrated professionalism, expertise, and effective communication from inquiry to closure. We rate the quality of their work 9 out of 10. The testing team showcased excellent technical skills and attention to detail, achieving thorough testing according to the plan. We appreciate the comprehensive project closure report. Overall, we highly recommend QAonCloud as a software testing company.",
    image: "/images/uploads/client/kavitha.jpeg", // Replace with your actual image path
    linkedin: "#",
    email: "mailto:sarah@example.com",
  },
  {
    name: "Gautam Chakravarthy",
    role: "Engineering Manager, Tokopedia",
    description:
      "QAonCIoud has helped us detect app crashes which were affecting our downloads significantly. They have now taken the responsibility of giving a QA clear to all our development sprints. We would like to expand the team further.",
    image: "/images/uploads/client/Gautam Chakravarthy.jpg",
    linkedin: "#",
    email: "mailto:michael@example.com",
  },
  {
    name: "Donald Le",
    role: "Tech Director, AOL",
    description:
      "QAonCloud is 40% more cost-effective than other options, the bugs also helped us make design optimization. The team has shown tremendous ownership, has done flawless delivery, and is a very quick learner.",
    image: "/images/uploads/client/Donald Le.jpg", // Replace with your actual image path
    linkedin: "#",
    email: "mailto:sarah@example.com",
  },
  {
    name: "Toby Hunt",
    role: "Chief Product Officer, Connectworxs",
    description:
      "QAonCloud are fantastic testing partners. They are diligent, pragmatic, and lovely to work with. They gel perfectly with our agile way of working and always happy to recommend better ways of doing things. Could not recommend them highly enough.",
    image: "/images/uploads/client/Toby Hunt.jpg",
    linkedin: "#",
    email: "mailto:michael@example.com",
  },
  {
    name: "Greg Adams",
    role: "CEO, Stabilitas",
    description:
      "QAonCloud helped us set up and formalise our testing from scratch and helped us deliver a great product to our first customers. Thanks for the great work!",
    image: "/images/uploads/client/greg.png", // Replace with your actual image path
    linkedin: "#",
    email: "mailto:sarah@example.com",
  },
  {
    name: "Shalini Gupta",
    role: "Engineering Manager, Red Black Tree",
    description:
      "QAonCloud beautifully integrates the QA outsourcing process. It is a transparent and reliable process that lets you focus on getting prompt delivery of QA results.",
    image: "/images/uploads/client/Shalini Gupta.jpg",
    linkedin: "#",
    email: "mailto:michael@example.com",
  },
  {
    name: "Hasnain Baxamoosa",
    role: "Sr. Product Manager for Web Technologies, AlienVault",
    description:
      "QAonCIoud has helped us bring a higher level of quality to our web properties. Their team is highly capable and skilled, and bring a level of proficiency to the table that allows them to be immediately productive.",
    image: "/images/uploads/client/Hasnain.jpg", // Replace with your actual image path
    linkedin: "#",
    email: "mailto:sarah@example.com",
  },
  {
    name: "Pratyush Singh",
    role: "Co-founder, Venzi",
    description:
      "Thank you for all the time you have taken off our hands to test our growing product and do it well. We appreciate all the attention to detail and promptness of response.",
    image: "/images/uploads/client/pratyush.jpg",
    linkedin: "#",
    email: "mailto:michael@example.com",
  },
  {
    name: "Ishansh Singh",
    role: "Product Specialist, Avanti",
    description:
      "QAonCloud team members are flexible and adaptive. The QA testers are collaborative and function effectively with the available data, and can easily adapt to the requirements as and when needed. The team manager maintains high efficiency and productivity among the teams while pushing them to be autonomous and self-sufficient.",
    image: "/images/uploads/client/Ishansh.png",
    linkedin: "#",
    email: "mailto:michael@example.com",
  },
  {
    name: "Leya Sathyan",
    role: "Program Manager, Indihood",
    description:
      "QAonCIoud has constantly impressed us with quick turnarounds and detailed reports on testing. In addition, they have accommodated our requests for quick tests and sanity tests within a few hours.",
    image: "/images/uploads/client/Leya.jpg",
    linkedin: "#",
    email: "mailto:michael@example.com",
  },
  {
    name: "Daan Depaepe",
    role: "Chief Technology Officer, Prompto",
    description:
      "QAonCloud is a great addition to our team, helping us out with testing and maintaining the quality of our product. They are very flexible and easily adapted to our processes and tools. They are very rigorous during the testing process, pay attention to detail, and always ask questions of our development team if something is unclear.",
    image: "/images/uploads/client/Daan.png",
    linkedin: "#",
    email: "mailto:michael@example.com",
  },
];

export default function TestimonialComponent() {
  return (
    <div className={styles.container}>
      <section className={styles.teamSection}>
        <h2 className={styles.title}>Testimonials</h2>

        <div className={styles.teamGrid}>
          {Members.map((member, index) => (
            <div key={index} className={styles.card}>
              <img
                src={member.image}
                alt={member.name}
                className={styles.avatar}
              />
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.description}>{member.description}</p>
              {/* <div className={styles.icons}>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href={member.email}>
                <FaEnvelope />
              </a>
            </div> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
