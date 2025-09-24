import Image from "next/image";
import styles from "./Clients.module.css";

const clients = [
  { name: "Indihood", logo: "/images/key_clients/indihood_logo.webp" },
  { name: "RedBlackTree", logo: "/images/key_clients/RBT2.webp" },
  { name: "AroundMedia", logo: "/images/key_clients/around_media.webp" },
  { name: "Aol", logo: "/images/key_clients/aol.webp" },
  { name: "AT & T", logo: "/images/key_clients/Alienvault.webp" },
  { name: "Avanti", logo: "/images/key_clients/app_logo.webp" },
  { name: "IQHive", logo: "/images/key_clients/IQ-Hive.webp" },
  { name: "Venzi", logo: "/images/key_clients/venzi.webp" },
  { name: "stabilitas", logo: "/images/key_clients/stabilitas.webp" },
  { name: "connectworks", logo: "/images/key_clients/connectworks.webp" },
  { name: "tokopedia", logo: "/images/key_clients/tokopedia.webp" },
  { name: "Auxo", logo: "/images/key_clients/auxo.webp" },
  { name: "Doxa", logo: "/images/key_clients/doxa.webp" },
  { name: "Panther", logo: "/images/key_clients/panther.webp" },
  { name: "sourcewhale", logo: "/images/key_clients/sourcewhale.webp" },
  { name: "fora", logo: "/images/key_clients/fora.webp" },
  { name: "netzo", logo: "/images/key_clients/netzo.webp" },
  { name: "Solid-Networks", logo: "/images/key_clients/Solid-Networks.webp" },
  { name: "NotaBene", logo: "/images/key_clients/nota-ben.webp" },
  { name: "Prompto", logo: "/images/key_clients/prompto.webp" },
];

export default function Clients() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Our Key Clients</h2>
      <div className={styles.grid}>
        {clients.map((client) => (
          <div key={client.name} className={styles.card}>
            <Image
              src={client.logo}
              alt={client.name}
              width={550}
              height={500}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
