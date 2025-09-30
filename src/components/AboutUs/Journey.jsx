import YearTimeLine from "../Common/Timeline/YearTimeLine";
import styles from "./Journey.module.css";
const timelineData = [
  {
    year: "2014",
    items: [
      "First customer project - RedblackTree",
      "Project started in Kollu with 3 resources",
      "Our first QAonCloud website launch",
    ],
    side: "left",
  },
  {
    year: "2015",
    items: [
      "One of our first significant and foreign customer AlienVault added",
      "Around media customer added this year",
    ],
    side: "right",
  },
  {
    year: "2016",
    items: [
      "Our first mobile app testing project - Tokopedia and Stabilitas customers",
    ],
    side: "left",
  },
  {
    year: "2017",
    items: ["QAonCloud team setup in Kaup location"],
    side: "right",
  },
  {
    year: "2018",
    items: ["Our first Fintech app testing - Indihood customer"],
    side: "left",
  },
  {
    year: "2019",
    items: [
      "QAonCloud website redesign and launch",
      "Prompto customer added this year",
      "Ms. Lisa Jean-Mairet visit to our Kollu center",
    ],
    side: "right",
  },
  {
    year: "2020",
    items: ["Venzi and Nanonets customers are added"],
    side: "left",
  },
  {
    year: "2021",
    items: [
      "IQHive, Doxa, Notabene customers are added",
      "Started our first Automation testing project for the IQHive customer.",
      "First ISTQB certification by Divya R (Kollu)",
      "QAonCloud became a 50 members team",
    ],
    side: "right",
  },
  {
    year: "2022",
    items: [
      "We increased our customer-base by 40% from countries including the US and the UK",
      "Stripe invoice portal web app created to ease the Invoice and payment process for our customers",
      "Two more operating locations were set up at TN Palayam and Villupuram in TamilNadu, India",
      "We have grown by 64% to 80+ QAaens, of which 8% QAaens were certified by the ISTQB board",
    ],
    side: "left",
  },
];
export default function Journey() {
  return (
    <div className={styles.Container}>
      <h1>Our Journey</h1>
      <YearTimeLine data={timelineData} />
    </div>
  );
}
