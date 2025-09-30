"use client";
import styles from "./PricingModelsTable.module.css";
export default function PricingModelsTable() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Pricing Model</h2>
      <p className={styles.main_para}>
        We help you to grow your business, not your costs. Our pricing structure
        is simple and fair, and no pricing shock, ever. We prepare a plan that’s
        right for your business and our services are committed to results in
        improved app quality and compliance standards. QAonCloud’s advanced
        testing capabilities ensure your job is done on time and within your
        budget. Our costs are lower than other options in the market. And our
        transparent communication lets you know what you will pay upfront.
      </p>
      <p className={styles.sub_para}>
        QAonCloud offers robust QA testing solutions at competitive prices with
        no compromises on the quality of deliverables.
      </p>
      <div className={styles.tableWrapper}>
        <table className={styles.responsiveTable}>
          <thead>
            <tr>
              <th>Fixed Price Model</th>
              <th>Time &amp; Materials Model</th>
              <th>Dedicated Team Model</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Small and medium projects with a very clear scope, established
                methodologies, and a stable set of requirements that are
                consistent throughout the project.
              </td>
              <td>
                For projects having no clear requirements or when the risks are
                uncertain early on in the project.
              </td>
              <td>
                Long-term projects with unclear requirements and frequent scope
                changes, or when you have several concurrent projects that may
                need resource relocation.
              </td>
            </tr>
            <tr>
              <td>Pre-defined project requirements and scope</td>
              <td>Non-defined requirements</td>
              <td>General idea and basic project requirements</td>
            </tr>
            <tr>
              <td>Any changes require re-estimation of cost and time frame</td>
              <td>
                Cost based on actual person-hours and can be adjusted flexibly
              </td>
              <td>Team is flexible to any project adjustments</td>
            </tr>
            <tr>
              <td>Fixed project cost and duration</td>
              <td>Any project changes are possible</td>
              <td>Knowledge retention and full control over the team</td>
            </tr>
            <tr>
              <td>Billing presupposes several milestone payments</td>
              <td>
                Billing is based on the amount of work performed in the billing
                period
              </td>
              <td>Billing presupposes defined monthly payments for the team</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
