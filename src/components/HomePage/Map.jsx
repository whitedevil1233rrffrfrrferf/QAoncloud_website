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
      "QAonCloud more than exceeded our expectations, it’s really freed up a lot of time...",
    title: "Richard Crosby",
    role: "Head of Engineering",
    videoId: "Br3Yl8Q910Q",
  },
  {
    name: "AT&T",
    top: "50%", // Adjust as needed
    left: "21%",
    logo: "/images/map/AT_T.png",
    quote:
      "QAonCloud more than exceeded our expectations, it’s really freed up a lot of time...",
    title: "Richard Crosby",
    role: "Head of Engineering",
    videoId: "Br3Yl8Q910Q",
  },
  {
    name: "SOLIDSTATE",
    top: "50%", // Adjust as needed
    left: "26%",
    logo: "/images/map/ss.png",
    quote:
      "QAonCloud more than exceeded our expectations, it’s really freed up a lot of time...",
    title: "Richard Crosby",
    role: "Head of Engineering",
    videoId: "Br3Yl8Q910Q",
  },
  {
    name: "FORA",
    top: "47%", // Adjust as needed
    left: "30%",
    logo: "/images/map/FORA.png",
    quote:
      "QAonCloud more than exceeded our expectations, it’s really freed up a lot of time...",
    title: "Richard Crosby",
    role: "Head of Engineering",
    videoId: "Br3Yl8Q910Q",
  },
  {
    name: "NOTABENE",
    top: "65%", // Adjust as needed
    left: "30.5%",
    logo: "/images/map/NotaBene.png",
    quote:
      "QAonCloud more than exceeded our expectations, it’s really freed up a lot of time...",
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
      "QAonCloud more than exceeded our expectations, it’s really freed up a lot of time...",
    title: "Richard Crosby",
    role: "Head of Engineering",
    videoId: "Br3Yl8Q910Q",
  },
  {
    name: "Prompto",
    top: "38%", // Adjust as needed
    left: "47%",
    logo: "/images/map/Promto.png",
    quote:
      "QAonCloud more than exceeded our expectations, it’s really freed up a lot of time...",
    title: "Richard Crosby",
    role: "Head of Engineering",
    videoId: "Br3Yl8Q910Q",
  },
  {
    name: "Netzo",
    top: "45%", // Adjust as needed
    left: "44%",
    logo: "/images/map/Netzo.png",
    quote:
      "QAonCloud more than exceeded our expectations, it’s really freed up a lot of time...",
    title: "Richard Crosby",
    role: "Head of Engineering",
    videoId: "Br3Yl8Q910Q",
  },

  {
    name: "Avanti",
    top: "55.5%", // Adjust as needed
    left: "60.5%",
    logo: "/images/map/Avanti.png",
    quote:
      "QAonCloud more than exceeded our expectations, it’s really freed up a lot of time...",
    title: "Richard Crosby",
    role: "Head of Engineering",
    videoId: "Br3Yl8Q910Q",
  },
  {
    name: "Doxa",
    top: "61%", // Adjust as needed
    left: "66%",
    logo: "/images/map/Doxa.png",
    quote:
      "QAonCloud more than exceeded our expectations, it’s really freed up a lot of time...",
    title: "Richard Crosby",
    role: "Head of Engineering",
    videoId: "Br3Yl8Q910Q",
  },
  {
    name: "IQ Hive",
    top: "80%", // Adjust as needed
    left: "78.5%",
    logo: "/images/map/IQHive.png",
    quote:
      "QAonCloud more than exceeded our expectations, it’s really freed up a lot of time...",
    title: "Richard Crosby",
    role: "Head of Engineering",
    videoId: "Br3Yl8Q910Q",
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

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setHovered(null);
    }, 200);
  };

  return (
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
            top: hovered.top,
            left: `calc(${hovered.left} + 3rem)`,
          }}
          onMouseEnter={() => clearTimeout(hideTimeout.current)}
          onMouseLeave={() => setHovered(null)}
        >
          <TestimonialCard client={hovered} />
        </div>
      )}
    </div>
  );
}

{
  /* <Image src="/images/map/map.jpeg" alt="Map" fill /> */
}
