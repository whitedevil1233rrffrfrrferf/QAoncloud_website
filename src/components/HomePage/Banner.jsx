import styles from './Banner.module.css';
import Image from 'next/image';
function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        
        <i className={`fa fa-cloud ${styles.whiteIcon}`}></i>
        <div>
            <h1 className={styles.heading}>Get Your App Tested By A<br />Remote, Flexible, On-Demand Teams</h1>
        <p className={styles.para}>
          QAonCloud offers tailor-made testing solutions to fit your business <br />
          needs and guarantees huge benefits compared to the in-house team. <br />
          Our fully competent workforce delivers highly flexible, reliable,<br />
           and cost-effective solutions.
        </p>
        {/* <button className={styles.btn}>Learn More</button> */}
        </div>
      </div>
    </div>
  )
}

export default Banner