"use client";
import Image from "next/image";
import classes from "./map.module.css";
import { useState, useRef } from "react";
import TestimonialCard from "@/components/Common/TestimonialCard/TestimonialCard";

const markers = [
  {
    name: "Venzi",
    top: "40%", // Adjust as needed
    left: "20%",
    logo: "/images/map/venzi.png",
    quote:
      "Thank you for all the time you have taken off our hands to test our growing product and do it well. We appreciate all the attention to detail and promptness of response.",
    title: "Pratyush Singh",
    role: "Co-founder",
  },
  {
    name: "AT&T",
    top: "50%", // Adjust as needed
    left: "21%",
    logo: "/images/map/AT_T.png",
    quote:
      "Before QAonCloud, we had no resources to find, execute, and understand how we could get better or worse. QAonCoud helped us define the best testing strategy and the reports were coming in pretty much the next day",
    title: "Robert Johnson",
    role: "Principal Software Engineer",
    videoId: "VFMFTBAzwak",
  },
  {
    name: "Solid State Networks",
    top: "50%", // Adjust as needed
    left: "26%",
    logo: "/images/map/ss.png",
    quote:
      "We help create a secure continuous delivery pipeline of native applications to your customers and onto their devices",
  },
  {
    name: "FORA",
    top: "47%", // Adjust as needed
    left: "30%",
    logo: "/images/map/FORA.png",
    quote:
      "We're a team of entrepreneurs & technologists building something new for travel advisors, creators & enthusiasts",
  },
  {
    name: "NOTABENE",
    top: "65%", // Adjust as needed
    left: "30.5%",
    logo: "/images/map/NotaBene.png",
    quote:
      "QAonCloud more than exceeded our expectations, it’s really freed up a lot of time that we would previously spend trying to find a lot of the issues with that product",
    title: "Richard Crosby",
    role: "Head of Engineering",
    videoId: "Br3Yl8Q910Q",
  },
  {
    name: "SourceWhale",
    top: "35%", // Adjust as needed
    left: "40%",
    logo: "/images/map/SourceWhale.png",
    quote:
      " Sourcewhale is the only recruitment engagement platform teams need to execute their daily recruiting activities and make more placements faster",
  },
  {
    name: "Prompto",
    top: "38%", // Adjust as needed
    left: "47%",
    logo: "/images/map/Promto.png",
    quote:
      "After we partnered with QAonCloud, we saw huge differences and improvements in the stability of our app. The team has been doing very well on all the projects from the start of the engagement and definitely exceeded our expectations.",
    title: "Quentine Mussche",
    role: "Head of Technology",
    videoId: "7PdgslLyHnw",
  },
  {
    name: "Netzo",
    top: "45%", // Adjust as needed
    left: "44%",
    logo: "/images/map/Netzo.png",
    quote:
      "I'm pretty satisfied with the results. The team executed what we had on the scope for the project",
    title: "Miguel Romero",
    role: "CoFounder & CTO",
    videoId: "WECj6dewJ-k",
  },
  {
    name: "Indihood",
    top: "50.5%", // Adjust as needed
    left: "57.2%",
    logo: "/images/map/Indihood.png",
    quote:
      "QAonCIoud have constantly impressed us with quick turnarounds and detailed reports on testing. In addition, they have accommodated our requests for quick tests and sanity tests within a few hours! ",
    title: "Leya Sathyan",
    role: "Program Manager",
  },
  {
    name: "Avanti Finance",
    top: "55.5%", // Adjust as needed
    left: "60.5%",
    logo: "/images/map/Avanti.png",
    quote:
      "QAonCloud team members are flexible and adaptive. The QA testers are collaborative and function effectively with the available data, and can easily adapt to the requirements as and when needed. The team manager maintains high efficiency and productivity among the teams while pushing them to be autonomous and self-sufficient",
    title: "Ishansh Singh",
    role: "Product Specialist, Avanti",
    videoId: "Br3Yl8Q910Q",
  },
  {
    name: "Doxa",
    top: "61%", // Adjust as needed
    left: "66%",
    logo: "/images/map/Doxa.png",
    quote:
      "Doxa is an enterprise cloud-based SaaS platform for SMEs that leverages modern technologies to revolutionize connectivity between buyers and suppliers in their supply chain transaction process",
  },
  {
    name: "IQ Hive",
    top: "80%", // Adjust as needed
    left: "78.5%",
    logo: "/images/map/IQHive.png",
    quote:
      " We can fully rely on the testing results submitted by the QAonCloud team because we know that testing is done reliably and thoroughly. The most significant benefit is the team's flexibility and quick response to requests",
    title: "Alex Lipuntsov",
    role: "Project Manager",
    videoId: "RUE4hdT9rjQ",
  },

  // Add more markers
];

export default function Map() {
  const [hovered, setHovered] = useState(null);
  const hideTimeout = useRef(null);

  const handleMouseEnter = (marker) => {
    clearTimeout(hideTimeout.current);
    setHovered(marker);
  };
  const getCardPosition = (marker) => {
    const topVal = parseFloat(marker.top);
    const leftVal = parseFloat(marker.left);

    // Default: right side
    let position = {
      top: marker.top,
      left: `calc(${marker.left} + 3rem)`,
      transform: "translateY(-50%)",
    };

    // If marker is too far right → move left
    if (leftVal > 60) {
      position.left = `calc(${marker.left} - 24rem)`; // adjust width of card
    }

    // If marker is near bottom → show above
    if (topVal > 70) {
      position.transform = "translate(-50%, -110%)";
      position.left = marker.left;
    }

    return position;
  };
  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setHovered(null);
    }, 200);
  };

  return (
    <div>
      <div className={classes.mapContainer}>
        <Image
          src="/images/map/map.jpeg"
          alt="Map"
          fill
          className={classes.mapImage}
          priority
        />

        {markers.map((marker, index) => (
          <div
            key={index}
            className={classes.markerWrapper}
            style={{ top: marker.top, left: marker.left }}
            onMouseEnter={() => handleMouseEnter(marker)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={classes.marker}>
              <div className={classes.iconWrapper}>
                <Image
                  src={marker.logo}
                  alt={marker.name}
                  fill
                  className={classes.icon}
                />
              </div>
            </div>
          </div>
        ))}

        {hovered && (
          <div
            className={classes.cardOverlay}
            style={{
              top: getCardPosition(hovered).top,
              left: getCardPosition(hovered).left,
              transform: getCardPosition(hovered).transform,
            }}
            onMouseEnter={() => clearTimeout(hideTimeout.current)}
            onMouseLeave={() => setHovered(null)}
          >
            <TestimonialCard client={hovered} />
          </div>
        )}
      </div>
      <div className={classes.mobile}>
        <Image src="/images/map/mobile_map.png" alt="Map" fill priority />
      </div>
    </div>
  );
}

{
  /* <Image src="/images/map/map.jpeg" alt="Map" fill /> */
}
