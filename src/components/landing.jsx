import styles from "../styles/landing.module.css";
import Landingimage from "../assets/banner.png";

export default function Landing({ toggle }) {
  return (
    <>
      <div
        className={`${
          !toggle ? `${styles.landinglight}` : `${styles.landingdark}`
        }`}
      >
        <div className="container px-4 py-4">
          <div className="row align-items-center">
            <div
              className={`col-sm-12 col-md-12 col-lg-6 col-xl-6 ${styles.landingleft}`}
            >
              <div className={`${styles.landtagline}`}>
                <h4>GET PRODUCTIVE, WORK SMARTER</h4>
              </div>
              <div className={`${styles.landheadline}`}>
                <h1>Manage Your Task Efficiently In A To Do Board.</h1>
              </div>
              <div className={`${styles.landingdesc}`}>
                <p>
                  Track your work progress, organize tasks, assign tasks, read
                  comments, and much more.
                </p>
              </div>
              <div className={`${styles.landingbtn}`}>
                <a href="#" className="btn btn-primary">
                  Get Started
                </a>
              </div>
            </div>
            <div
              className={`col-sm-12 col-md-12 col-lg-6 col-xl-6 ${styles.landingright}`}
            >
              <img
                src={Landingimage}
                alt="Landing Image"
                className={`${styles.landingimage}`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
