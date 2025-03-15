import { useState } from "react";
import styles from "../styles/services.module.css";

export default function Services({toggle}) {
  const servicesinfo = [
    {
      id: "serbox1",
      title: "Innovative Development",
      desc: "We craft groundbreaking software solutions that redefine industries and set new standards.",
      boxcount: 1,
    },
    {
      id: "serbox2",
      title: "Seamless Integrations",
      desc: "Our products connect effortlessly with your existing system.",
      boxcount: 2,
      coltitle: "Seamless Integrations",
      colboxcount: 2,
    },
    {
      id: "serbox3",
      title: "AI-Powered",
      desc: "Smart software that learns, adapts, and drives better decisions for your business.",
      boxcount: 3,
      colboxcount: 3,
      coltitle: "AI-Powered",
    },
    {
      id: "serbox4",
      title: "Secured",
      desc: "Built with advanced security protocols, ensuring data protection and user trust.",
      boxcount: 4,
      colboxcount: 4,
      coltitle: "Secured",
    },
  ];
  const [activeBox, setactivebox] = useState(null);
  const handlehover = (id) => {
    setactivebox(id);
  };
  return (
    <>
      <div
        className={`${
          !toggle ? `${styles.serviceslight}` : `${styles.servicesdark}`
        }`}
      >
        <div className={`${styles.sercontainer} container px-4`}>
          <div className={`${styles.serheader}`}>
            <div className="texts">
              <h4 className={`${styles.sertagline}`}>Our Services</h4>
              <h1 className={`${styles.serheadline}`}>
                We Are A Creative Product Maker
              </h1>
            </div>
            <div className="button">
              <button className={`${styles.serbtn}`}>Learn more</button>
            </div>
          </div>
          <div className={`${styles.serbox}`}>
            {servicesinfo.map((services) => {
              let box = `${styles[services.id]}`;

              if (services.id === "serbox1") {
                box += ` ${styles.serbox1}`;
              } else if (services.id === "serbox2") {
                box +=
                  activeBox === "serbox3" || activeBox === "serbox4"
                    ? ` ${styles.inactivebox}`
                    : ` ${styles.activebox}`;
              } else if (services.id === activeBox) {
                box += ` ${styles.activebox}`;
              } else {
                box += ` ${styles.inactivebox}`;
              }
              return (
                <div
                  key={services.boxcount}
                  className={box}
                  onMouseEnter={() => handlehover(services.id)}
                >
                  <p className={`${styles.boxcount}`}>{services.boxcount}</p>
                  <h1 className={`${styles.sertitle}`}>{services.title}</h1>
                  <p className={`${styles.serdesc}`}>{services.desc}</p>
                  <h1 className={`${styles.collsertitle}`}>
                    {services.coltitle}
                  </h1>
                  <p className={`${styles.collboxcount}`}>
                    {services.colboxcount}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
