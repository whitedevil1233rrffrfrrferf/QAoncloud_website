import classes from "./project_numbers.module.css";
export default function ProjectNumbers({ number, title }) {
  return (
    <div className={classes.container}>
      <span className={classes.number}>{number}</span>
      <span className={classes.title}>{title}</span>
    </div>
  );
}
