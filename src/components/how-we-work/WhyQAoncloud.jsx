import { FaSyncAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BiPackage } from "react-icons/bi";
import RoundedIconCard from "../Common/RoundedIconCard/RoundedIconCard";
import styles from "./WhyQAoncloud.module.css";
export default function WhyQAoncloud() {
  return (
    <div className={styles.container}>
      <RoundedIconCard
        icon={<FaSyncAlt />}
        title="Process"
        description="QAonCloud has a flexible, remote, and scalable model that accommodates your diverse QA testing needs. You can hire us as your only testing team and merge your existing teams to scale operations or for single projects."
      />
      <RoundedIconCard
        icon={<FiUsers />}
        title="Engagement Model"
        description="QAonCloud has convenient engagement models that give you an added advantage with high-quality software testing at affordable costs. We have unique processes in place to cater to the specific needs of your business."
      />
      <RoundedIconCard
        icon={<BiPackage />}
        title="Deliverables"
        description="QAonCloud has an enthusiastic team of software testers who can work independently or collaboratively with your in-house teams to deliver customized testing strategies for your business. At the same time, IP rights remain with you as always."
      />
    </div>
  );
}
