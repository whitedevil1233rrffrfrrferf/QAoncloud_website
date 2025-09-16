import TestimonialCard from "@/components/HomePage/TestimonialCard";
import classes from "./clienttestimonials.module.css";
export default function ClientTestimonials() {
    return(
        <div className={classes.testimonials}>
            <h3>What Our Clients Say</h3>
            <p>Trusted by teams who demand excellence in software quality</p>
            <div className={classes.testimonialCards}>
                <TestimonialCard 
                    quote="QAonCloud has transformed our testing process, making it more efficient and reliable."
                    name="John Doe"
                    title="CTO"
                    companyLink="https://example.com"
                    companyName="Tech Innovations Inc."
                />
                <TestimonialCard 
                    quote="Their expertise in QA has been invaluable to our product development."
                    name="Jane Smith"
                    title="Product Manager"
                    companyLink="https://example.com"
                    companyName="Creative Solutions Ltd."
                />
                <TestimonialCard 
                    quote="We couldn't have launched our app without their exceptional QA services."
                    name="Alice Johnson"
                    title="CEO"
                    companyLink="https://example.com"
                    companyName="Startup Hub"
                />
            </div>
        </div>
    )
}