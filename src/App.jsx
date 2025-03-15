import Header from "./components/header";
import Landing from "./components/landing";
import About from "./components/about";
import Trustedbrands from "./components/trustedbrands";
import Products from "./components/products";
import Pricing from "./components/pricing";
import Services from "./components/services";
import Reviews from "./components/reviews";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { useState, useEffect, act } from "react";
import styles from "./app.module.css";

export default function App() {
  const storewebdark = localStorage.getItem("webdark") === "true";
  const [toggle, istoggled] = useState(storewebdark);
  const [activescroll, setactivescroll] = useState("");
  const handletoggle = (e) => {
    e.preventDefault();
    istoggled(!toggle);
  };
  useEffect(() => {
    localStorage.setItem("webdark", toggle);
  }, [toggle]);

  useEffect(() => {
    const handlescroll = () => {
      const sections = document.querySelectorAll("section");
      let currsection = "";
      sections.forEach((section) => {
        const scroll = section.getBoundingClientRect();
        if (scroll.top <= 150 && scroll.bottom >= 150) {
          currsection = section.id;
        }
      });
      setactivescroll(currsection);
    };

    window.addEventListener("scroll", handlescroll);
    return () => window.addEventListener("scroll",handlescroll)
  }, []);

  return (
    <>
      <div
        className={`${!toggle ? `${styles.weblight}` : `${styles.webdark}`}`}
      >
        <Header activescroll={activescroll} toggle={toggle} handletoggle={(e) => handletoggle(e)} />
        <section id="home">
          <Landing toggle={toggle} />
        </section>
        <section id="tbrands">
          <Trustedbrands toggle={toggle} />
        </section>

        <section id="about">
          <About toggle={toggle} />
        </section>
        <section id="services">
          <Services toggle={toggle} />
        </section>
        <section id="product">
          <Products toggle={toggle} />
        </section>
        <section id="pricing">
          <Pricing toggle={toggle} />
        </section>
        <section id="reviews">
          <Reviews toggle={toggle} />
        </section>
        <section id="contact">
          <Contact toggle={toggle} />
        </section>
        <section id="footer">
          <Footer toggle={toggle} />
        </section>
      </div>
    </>
  );
}
