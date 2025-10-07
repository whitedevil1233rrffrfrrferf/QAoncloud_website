import TestimonialComponent from "@/components/Testimonials/TestimonialsComponent";
export const metadata = {
  title: "Client Video Testimonials - QAonCloud",
  description:
    "Check out this video testimonial and hear directly from our satisfied clients and witness the impact of our top-notch software testing services.",
  keywords: ["testimonials", "video testimonials"],
  authors: [{ name: "QAonCloud", url: "https://www.qaoncloud.com/" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.qaoncloud.com/testimonial",
  },
  openGraph: {
    title: "Client Video Testimonials | QAonCloud",
    description:
      "Check out this video testimonial and hear directly from our satisfied clients and witness the impact of our top-notch software testing services.",
    url: "https://www.qaoncloud.com/testimonial",
    siteName: "QAonCloud",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/testimonials/testimonial.jpg",
        width: 1919,
        height: 1371,
        alt: "Client Video Testimonials",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Video Testimonials | QAonCloud",
    description:
      "Check out this video testimonial and hear directly from our satisfied clients and witness the impact of our top-notch software testing services.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/testimonials/testimonial.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
};

export default function Testimonials() {
  return <TestimonialComponent />;
}
