import styles from '../styles/footer.module.css';
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Footer({toggle}){
    return (
      <>
        <div
          className={`${
            !toggle ? `${styles.footerlight}` : `${styles.footerdark}`
          }`}
        >
          <div className={`${styles.footercontainer} container px-4`}>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <p className={`${styles.copyright}`}>
                  © 2025 HATECH. Made in Pakistan.
                </p>
              </div>
              <div
                className={`col-sm-12 col-md-12 col-lg-6 col-xl-6 ${styles.right}`}
              >
                <div className="links">
                  <ul className={`${styles.footlinks}`}>
                    <li>About</li>
                    <li>Services</li>
                    <li>Products</li>
                    <li>Reviews</li>
                  </ul>
                </div>
                <div className="social">
                  <FaGithubSquare className={`${styles.footicon}`} />
                  <FaLinkedin className={`${styles.footicon}`} />
                  <MdEmail className={`${styles.footicon}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}