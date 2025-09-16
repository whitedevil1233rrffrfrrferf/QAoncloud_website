import classes from "./BoxCard.module.css";

export default function BoxCard({ title, description }) {
  return (
    <div className={classes.card}>
      <div className={classes.outerBox}>
        <div className={classes.innerBox}></div>
      </div>
      <div className={classes.content}>
        <span className={classes.title}>{title}</span>
        <span className={classes.description}>{description}</span>
      </div>
    </div>
  );
}
