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
          quote="Throughout the project, they demonstrated professionalism, expertise, and effective communication from inquiry to closure. We rate the quality of their work 9 out of 10."
          name="Kavitha Sivashankaran"
          title="Engineer: Quality and Regulatory Affairs"
          companyLink="https://example.com"
          companyName="G3 MEDICAL SYSTEMS PVT LTD"
        />
        <TestimonialCard
          quote="They helped us detect app crashes which were affecting our downloads significantly. They have now taken the responsibility of giving a QA clear to all our development sprints."
          name="Gautam Chakravarthy"
          title="Engineering Manager"
          companyLink="https://example.com"
          companyName="Tokopedia"
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
