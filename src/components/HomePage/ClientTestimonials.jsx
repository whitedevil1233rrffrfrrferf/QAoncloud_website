import TestimonialCard from "@/components/HomePage/TestimonialCard";
import classes from "./clienttestimonials.module.css";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
export default function ClientTestimonials() {
  return (
    <div className={classes.testimonials}>
      <SectionHeader
        heading="What Our Clients Say"
        subheading="Trusted by teams who demand excellence in software quality"
      />

      <div className={classes.testimonialCards}>
        <TestimonialCard
          quote="Thank you for all the time you have taken off our hands to test our growing product and do it well. We appreciate all the attention to detail and promptness of response."
          name="Pratyush Singh"
          title="Co-founder"
          companyLink="https://example.com"
          companyName="Venzi"
        />
        <TestimonialCard
          quote="QAonCloud is 40% more cost-effective than other options, the bugs also helped us make design optimization. The team has shown tremendous ownership, has done flawless delivery, and is a very quick learner."
          name="Donald Le"
          title="Tech Director"
          companyLink="https://example.com"
          companyName="AOL"
        />
        <TestimonialCard
          quote="QAonCloud helped us set up and formalise our testing from scratch and helped us deliver a great product to our first customers. Thanks for the great work!"
          name="Greg Adams"
          title="CEO"
          companyLink="https://example.com"
          companyName="Stabilitas"
        />
      </div>
    </div>
  );
}
