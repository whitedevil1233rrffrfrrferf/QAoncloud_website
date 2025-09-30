import styles from "./Leadership.module.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const AdvisorMembers = [
  {
    name: "RAJIV KUCCHAL",
    role: "CHAIRMAN, DESICREW",
    description:
      "Chairman of DesiCrew, Founding member of Infosys BPO, Ex-COO of OnMobile, Investor in Social Enterprises",
    image: "/images/leadership_team/Rajiv.png", // Replace with your actual image path
    linkedin: "#",
    email: "mailto:sarah@example.com",
  },
  {
    name: "MANIVANNAN JK",
    role: "CEO, DESICREW",
    description:
      "CEO, DesiCrew, IIM Bangalore and Anna Univ., Emerging Leaders Fellow - City University(New York)",
    image: "/images/leadership_team/Mani.png",
    linkedin: "#",
    email: "mailto:michael@example.com",
  },
];

const LeadershipMembers = [
  {
    name: "Narayanan",
    role: "VP Sales",
    description:
      "VP of Sales with 20+ years in IT services and product sales. Leads QAonCloud's sales in the US, Europe, and South India. IIM Trichy alumnus, expert in growth strategy and client partnerships.",
    image: "/images/leadership_team/narayanan.png", // Replace with your actual image path
    linkedin: "#",
    email: "mailto:sarah@example.com",
  },
  {
    name: "Nidhikumar",
    role: "VP Sales",
    description:
      "VP Sales with 15 years' experience. Drives revenue growth, GTM strategies, and demand generation for startups. Expert in Sales Playbooks and building lasting partnerships to enable sustainable business growth.",
    image: "/images/leadership_team/nidhi.png",
    linkedin: "#",
    email: "mailto:michael@example.com",
  },

  {
    name: "UDAYA PRIYA T",
    role: "AVP OPERATIONS",
    description:
      "Experienced QA Manager proficient in end-to-end QA processes, including test planning, defect management, and release coordination. Skilled in leading high-performing QA teams",
    image: "/images/leadership_team/udhaya.png",
    linkedin: "#",
    email: "mailto:michael@example.com",
  },
  {
    name: "SUTHAKAR",
    role: "SENIOR BUSINESS DEVELOPMENT MANAGER",
    description:
      "An alumnus from College of Engineering, Guindy, with 15+ years' experience in selling software services to international customers and managing accounts. Sold to CXOs of small businesses to Fortune 500 companies, both onshore and offshore",
    image: "/images/leadership_team/suthakar.png", // Replace with your actual image path
    linkedin: "#",
    email: "mailto:sarah@example.com",
  },
  {
    name: "AMAN MISHRA",
    role: "SENIOR BUSINESS DEVELOPMENT MANAGER",
    description:
      "Experienced professional with 8+ years in Demand Generation and Business Development. 2 years with the company, onboarding global clients. Passionate sports fan and strong team player",
    image: "/images/leadership_team/aman.png", // Replace with your actual image path
    linkedin: "#",
    email: "mailto:sarah@example.com",
  },
  {
    name: "SINDHUJA",
    role: "DIGITAL MARKETING LEAD",
    description:
      "Experienced of Digital Marketing Team Lead with a demonstrated history of working in SEO (On page and Off page Optimization), SMO and Web Analytics",
    image: "/images/leadership_team/sindhu.png",
    linkedin: "#",
    email: "mailto:michael@example.com",
  },
];

export default function Leadership() {
  return (
    <div className={styles.container}>
      <section className={styles.teamSection}>
        <h2 className={styles.title}>Leadership Team</h2>
        <p className={styles.subtitle}>
          Meet the experts driving innovation and excellence in software testing
        </p>
        <h3 className={styles.teamTitle}>Advisors</h3>
        <div className={styles.teamGrid}>
          {AdvisorMembers.map((member, index) => (
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
        <h3 className={styles.teamTitle}>Leadership Team</h3>
        <div className={styles.teamGrid}>
          {LeadershipMembers.map((member, index) => (
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
