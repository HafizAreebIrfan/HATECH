import styles from "../styles/contact.module.css";

export default function Contact({toggle}) {
  return (
    <>
      <div
        className={`${
          !toggle ? `${styles.contactlight}` : `${styles.contactdark}`
        }`}
      >
        <div className={`${styles.contactcontainer} container px-4`}>
          <div className={`row ${styles.contactheader}`}>
            <div className="title col-sm-12 col-md-6">
              <h4 className={`${styles.conheadertag}`}>Contact</h4>
              <h1 className={`${styles.conheadertitle}`}>
                Lets Bring Something Together
              </h1>
            </div>
            <div className="productcount col-sm-12 col-md-6">
              <h4 className={`${styles.contactcounttext}`}>
                <span className={`${styles.contactcount}`}>10+</span> products
              </h4>
              <p className={`${styles.contactdescription}`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, rem?
              </p>
            </div>
          </div>
          <div className={`${styles.contactrow} row`}>
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
              <div className={`${styles.contactarea}`}>
                <h4 className={`${styles.contactareatagline}`}>
                  Feel Free to Contact Us
                </h4>
                <form action="#">
                  <input
                    type="name"
                    id="name"
                    placeholder="Enter your full name"
                    className={`${styles.input}`}
                  />
                  <br></br>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className={`${styles.input}`}
                  />
                  <br></br>
                  <input
                    type="number"
                    id="number"
                    placeholder="Enter your phone number"
                    className={`${styles.input}`}
                  />
                  <br></br>
                  <textarea
                    cols="50"
                    rows="5"
                    placeholder="Enter your message"
                    className={`${styles.input}`}
                  />
                  <br></br>
                  <input type="submit" className={`${styles.submitform}`} />
                </form>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className={`${styles.infoarea}`}>
                <h4 className={`${styles.infotagline}`}>
                  Feel free to reach us
                </h4>
                <div className={`${styles.emailbox}`}>
                  <h4 className={`${styles.boxtitle}`}>Email:</h4>
                  <p className={`${styles.boxdesc}`}>
                    <a href="mailto:hafizareebirfan@gmail.com">
                      hafizareebirfan @gmail.com
                    </a>
                  </p>
                </div>
                <div className={`${styles.phonebox}`}>
                  <h4 className={`${styles.boxtitle}`}>Phone:</h4>
                  <p className={`${styles.boxdesc}`}>
                    <a href="tel:03323941019">+92 332 3941018</a>
                  </p>
                </div>
                <div className={`${styles.locationbox}`}>
                  <h4 className={`${styles.boxtitle}`}>Address:</h4>
                  <p className={`${styles.boxdesc}`}>
                    Gulshan e Iqbal, Karachi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
