import styles from "./services.module.css";
import Card from "../Common/card/Card";
function Services() {
  return (
    <div className={styles.service}>
      <h1 className={styles.heading}>Services</h1>
      <p className={styles.para}>
        Our full range of QA testing Services are delivered by highly skilled
        and trained QA professionals dedicated <br />
        to timely deliveries with uncompromised quality.
      </p>
      <div className={styles.card_container}>
        <Card
          title="Automated Testing"
          description="
          Transform your development pipeline with automated testing that reduces manual effort
          while expanding test coverage. Our solutions deliver faster, more accurate results, 
          accelerating your software delivery without compromising quality."
        />
        <Card
          title="Functional Testing"
          description="
          Verify that every feature performs exactly as designed. Our comprehensive functional testing
          ensures your software meets business requirements, operates flawlessly, and delivers the seamless user experience
          your customers expect."
        />
        <Card
          title="Security Testing"
          description="
          Protect your applications from vulnerabilities and threats through rigorous penetration testing.
          We identify security gaps before they become problems, strengthening your defenses and safeguarding 
          your users' data."
        />
        <Card
          title="Agile Testing"
          description="
          Stay agile with testing services designed for rapid development cycles. We provide continuous 
          quality assurance and immediate feedback, enabling your team to adapt quickly to changing  
          accelerating your software delivery without compromising quality."
        />

        <Card
          title="API Testing"
          description="
          Ensure robust API functionality, optimal performance, and bulletproof security. Our API testing
          services guarantee reliable integrations and seamless data flow between your systems and 
          third-party services"
        />
        <Card
          title="Regression Testing"
          description="
          Safeguard your software's stability through every update and enhancement.
          Our regression testing prevents new changes from disrupting existing functionality,
          preserving the user experience your customers rely on."
        />
      </div>
    </div>
  );
}

export default Services;
