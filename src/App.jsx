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
import { useState, useEffect } from "react";
import styles from "./app.module.css";

export default function App() {
  const storewebdark = localStorage.getItem("webdark") === "true";
  const [toggle, istoggled] = useState(
    storewebdark 
  );
  const handletoggle = (e) => {
    e.preventDefault();
    istoggled(!toggle);
  };
  useEffect(()=>{
    localStorage.setItem("webdark", toggle);
  },[toggle])
  return (
    <>
      <div
        className={`${!toggle ? `${styles.weblight}` : `${styles.webdark}`}`}
      >
        <Header toggle={toggle} handletoggle={(e) => handletoggle(e)} />
        <Landing toggle={toggle} />
        <Trustedbrands toggle={toggle} />
        <About toggle={toggle} />
        <Services toggle={toggle} />
        <Products toggle={toggle} />
        <Pricing toggle={toggle} />
        <Reviews toggle={toggle} />
        <Contact toggle={toggle} />
        <Footer toggle={toggle} />
      </div>
    </>
  );
}
