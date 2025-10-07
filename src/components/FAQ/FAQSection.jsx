"use client";
import FAQItem from "./FAQItem";
import styles from "./FAQSection.module.css";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is the contract process?",
      answer:
        "Our contract process is simple and streamlined. Upon your agreement to engage our services, we will promptly provide you with a contract document through the online signing application for eSignature. Once the contract has been countersigned, the engagement commences.",
    },
    {
      question: "How long does it take to get started?",
      answer:
        "We usually require 1-2 weeks to get started from the point we get the go-ahead. However, we can also get started earlier based on your needs and urgency.",
    },
    {
      question: "Is there a minimum contract period?",
      answer:
        "Because of our model and the significant investment we make to onboard the team on your behalf, we start with at least a 3-month period. However, we can always make exceptions based on your needs. Do contact us to discuss your particular project needs.",
    },
    {
      question: "Is there a minimum number of resources that I can hire?",
      answer:
        "Given our operational model and the substantial investment we undertake to onboard the team on your behalf, we typically initiate our services with at least three testers. Nevertheless, we remain flexible and open to accommodating resources to align with your project requirements based on client requests. ",
    },
  ];
  const ONBOARDING = [
    {
      question: "What do you need from us to get started?",
      answer:
        "We usually need time from your team at the beginning of the engagement to go through and understand your software in detail.",
    },
    {
      question:
        "How much time do we need to spend to get your team onboarded in the beginning?",
      answer:
        "We generally suggest a time period of a couple of weeks for the onboarding process. Depending on the size of your software and the scope of testing, we would need a few hours from your team to understand the software in detail so that we can test it effectively.",
    },
    {
      question: "Do you need any documents from us for onboarding?",
      answer:
        "To understand your product's functionality comprehensively, we generally request software business requirements documents from the client. If these documents are not readily available or the software lacks extensive documentation, we will allocate time to collaborate with your team to comprehend its workings thoroughly.",
    },
    {
      question:
        "We don't have an existing QA process. Can we start from scratch?",
      answer:
        "Yes, please get in touch for details. We provide end-to-end testing that can start from scratch and doesn't need any test cases or test management to have been present prior to engaging us. Our team will provide the test strategy and do the execution.",
    },
  ];
  const BILLING = [
    {
      question:
        "What is the duration of the payment period granted upon receipt of our invoice?",
      answer:
        "Upon receipt of the invoice from us, you are granted a payment period of 14 days. After this duration, we will send you a reminder in the event of non-payment and may temporarily suspend services until payment is received.",
    },
    {
      question: "How is the billing amount determined?",
      answer:
        "Billing entails a pre-agreed amount being invoiced at the beginning or end of each month. The invoiced amount is determined by the number of testing resources utilized during that month and their respective rates. All these details are clearly outlined in the signed contract. Any changes to the billing amount are done only with mutual consent from both parties.",
    },
    {
      question: "When are invoices generated?",
      answer:
        "Invoices are generated either at the beginning or end of each month or after a period of 30 days, based on the mutual agreement and specified in the signed contract.",
    },
    {
      question: "How do I know what I have to pay at the end of every month?",
      answer:
        "You will receive an invoice via Stripe at the end of each month. The invoice will reflect the agreed-upon amount in the signed contract. Our billing practices ensure no instances of overbilling unless specific circumstances have been previously agreed upon, such as adding extra testing resources to your team. In such cases, the contract can be amended accordingly, or you may contact us via email to agree upon the new resource count and rates.",
    },
  ];
  const TESTING_PROCESS = [
    {
      question: "What are the devices that you can test?",
      answer:
        "We can test your product on various devices across major platforms, including Android and iOS. We can also test your app across Mac or Windows PC and your web/cloud-based apps across the most commonly used web browsers, including Chrome, Firefox, Edge and Safari.",
    },
    {
      question: "What browsers do you test?",
      answer:
        "We can test your web/cloud-based apps across the most commonly used web browsers, including Chrome, Firefox, Edge and Safari. We can also test your website for the mobile web, including Safari for iOS and Chrome or Firefox for Android.",
    },
    {
      question: "Do your testers write and execute test cases?",
      answer:
        "Yes. Our testers collaborate with your product development team, test architect, and delivery manager to write test cases, which are regularly maintained and updated. Additionally, they continuously incorporate new test cases for newly added application features. During each test cycle, our testers execute the test cases, generating both a comprehensive test execution report and a bug report. Once your development team resolves the identified bugs, our testers retest to ensure the successful resolution of each bug.",
    },
    {
      question: "Do you do any regression testing?",
      answer:
        "Yes, our team does Regression Testing on all your existing code to ensure that nothing is broken in existing functionality when you are trying to release new features for your software. This is essential for feature continuity.",
    },
    {
      question:
        "What tools do you use to test? Do you use tools based on our requirements?",
      answer:
        "We use various tools like Testing tools like Selenium and SikuliX for Desktop Automation, Appium for Mobile Automation, and Selenium and Cypress for Web Automation etc., We can also use the tools based on the client's request.",
    },
  ];
  const DELIVERY_PROCESS = [
    {
      question: "How is the delivery process?",
      answer:
        "Our team works hand-in-hand with your product team to deliver the Test Artifacts. We constantly update you on our testing status and perform regression and re-testing for the code when a bug is fixed to ensure it has been fixed. We also give a final sign-off before the code release happens.",
    },
    {
      question:
        "We only have a little testing experience in the team. Do you have a managed delivery process?",
      answer:
        "Please refer to our How it Works and Why Us sections for details. We provide end-to-end testing that can start from scratch and doesn't need test cases or test management to be present before engaging us. Our team will provide the best test strategy and do the execution.",
    },
    {
      question: "How often do you deliver bug reports?",
      answer:
        "Our team will deliver a comprehensive bug report after every test cycle. We will also deliver an interim bug report after fixing every reported bug.",
    },
    {
      question: "Does your team provide a release clearance?",
      answer:
        "Yes, our team provides a complete QA clear. They will test the entire application and make sure it's bug-free before providing a QA clear/Go-no-Go certificate.",
    },
  ];
  const COMMUNICATION = [
    {
      question: "Are there daily touchpoints?",
      answer:
        "Yes, our delivery manager will be in touch with your product/engineering manager daily to update on the status of the day's work and coordinate the activities for the next day. This usually happens through a recurring meeting or a scrum call, if the team follows Agile.",
    },
    {
      question: "Are there monthly review meetings?",
      answer:
        "Yes, we usually hold review meetings every month with the management where the delivery manager would present and brief on activities for the past month and roadmap for the second so that there is an opportunity for course correction. This would usually be attended by the delivery head from the QAonCloud side and your management team.",
    },
    {
      question: "How do we communicate with the team?",
      answer:
        "You can communicate with the team using emails/Slack or any other messaging platform that you use. On a daily basis, our delivery manager would also have a call with your team to coordinate.",
    },
    {
      question: "Can we communicate with the testers?",
      answer:
        "You can communicate with the team using emails/Slack or any other messaging platform that you use. On a daily basis, our delivery manager would also have a call with your team to coordinate.",
    },
    {
      question: "What app do you use for communication?",
      answer:
        "Internally, we utilize Slack as our primary communication platform. However, we are flexible and adaptable to your project's existing communication app preferences. Our testers can seamlessly integrate into your team's chosen internal communication application for streamlined collaboration.",
    },
    {
      question: "What is the project management tool you use?",
      answer:
        "Our team has expertise in using various project management tools like Notion, JIRA, Asana, and Airtable etc. We are flexible to use any other tool you use for the project.",
    },
  ];
  const SECURITY_IP = [
    {
      question: "Who owns the test cases?",
      answer:
        "As part of our delivery, you would own all test cases, mind maps, test strategy documents or any other delivery item created. They are yours to share and use as needed.",
    },
    {
      question:
        "What about the intellectual property rights of our application?",
      answer:
        "We are extremely sensitive to the IP of your application and have established processes to keep it safe. Our test centres are secure and follow security best practices. All the testers are our full-time employees and sign an NDA with us that also covers your software application. We ensure that your IP is in safe hands.",
    },
    {
      question:
        "Our app contains sensitive information. How about the security of the office?",
      answer:
        "All our test centres are secured. We follow international best practices for this and ensure that your application is in safe hands. Please refer to our Security page for more info.",
    },
    {
      question: "What does the QA architect do?",
      answer:
        "The QA architect is a domain expert and can provide consulting services on the testing. He would initially prepare the test strategy document and the roadmap for testing in the absence of testing presence and can be in review meetings thereafter to advise on the best practices as well as bring the test strategy up to date.",
    },
    {
      question: "What does the delivery manager do?",
      answer:
        "You would be in the most frequent touch with the delivery manager. The person would connect with you on a daily basis and would be the primary contact point. He/she would also complete the day's activities and manage the testing team from here.",
    },
  ];

  return (
    <section className={styles.faqSection}>
      <div className={styles.FAQ_div}>
        <div>
          <h2 className={styles.heading}>CONTRACT</h2>
          {faqs.map((item, idx) => (
            <FAQItem key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div>
          <h2 className={styles.heading}>ONBOARDING</h2>
          {ONBOARDING.map((item, idx) => (
            <FAQItem key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div>
          <h2 className={styles.heading}>BILLING</h2>
          {BILLING.map((item, idx) => (
            <FAQItem key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div>
          <h2 className={styles.heading}>TESTING PROCESS</h2>
          {TESTING_PROCESS.map((item, idx) => (
            <FAQItem key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div>
          <h2 className={styles.heading}>DELIVERY PROCESS</h2>
          {DELIVERY_PROCESS.map((item, idx) => (
            <FAQItem key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div>
          <h2 className={styles.heading}>COMMUNICATION</h2>
          {COMMUNICATION.map((item, idx) => (
            <FAQItem key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div>
          <h2 className={styles.heading}>SECURITY & IP</h2>
          {SECURITY_IP.map((item, idx) => (
            <FAQItem key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
