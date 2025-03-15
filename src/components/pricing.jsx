import styles from "../styles/pricing.module.css";
import { FaCheck } from "react-icons/fa";

export default function Pricing({ toggle }) {
  return (
    <>
      <div
        className={`${
          !toggle ? `${styles.pricinglight}` : `${styles.pricingdark}`
        }`}
      >
        <div className="container px-4">
          <div className={`row ${styles.pricingheader}`}>
            <div className="title col-sm-12 col-md-6">
              <h4 className={`${styles.priheadertag}`}>Pricing</h4>
              <h1 className={`${styles.priheadertitle}`}>Choose The Best</h1>
            </div>
            <div className="productcount col-sm-12 col-md-6">
              <h4 className={`${styles.pricingcounttext}`}>
                <span className={`${styles.pricingcount}`}>Yearly</span> Plans
              </h4>
              <p className={`${styles.pricingdescription}`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, rem?
              </p>
            </div>
          </div>
          <div className={`${styles.pricingrow} row`}>
            <div className={`card mb-4 ${styles.pricingcard}`}>
              <div className={`card-header py-3 ${styles.cardheader}`}>
                <h4 className={`${styles.headertitle}`}>Pesonal Plan</h4>
                <h1
                  className={`card-title pricing-card-title ${styles.cardprice}`}
                >
                  $50<small className={`${styles.cardmonth}`}>/yearly</small>
                </h1>
              </div>
              <div className="card-body">
                <ul className={`${styles.cardfeatures}`}>
                  <li>
                    <span>
                      <FaCheck className={`${styles.cardicon}`} />
                    </span>{" "}
                    Any 2 Products
                  </li>
                  <li>
                    <span>
                      <FaCheck className={`${styles.cardicon}`} />
                    </span>{" "}
                    Monthly Updates
                  </li>
                  <li>
                    <span>
                      <FaCheck className={`${styles.cardicon}`} />
                    </span>{" "}
                    24/7 Call support
                  </li>
                  <li>
                    <span>
                      <FaCheck className={`${styles.cardicon}`} />
                    </span>{" "}
                    No Email support
                  </li>
                  <li>
                    <span>
                      <FaCheck className={`${styles.cardicon}`} />
                    </span>{" "}
                    No Bug Fix support
                  </li>
                </ul>
                <button
                  type="button"
                  className={`btn btn-lg ${styles.cardbutton}`}
                >
                  Choose This Plan
                </button>
              </div>
            </div>
            <div className={`card mb-4 ${styles.pricingcard}`}>
              <div
                className={`card-header py-3 ${styles.cardheader} ${styles.bestcardheader}`}
              >
                <h4 className={`${styles.headertitle}`}>Startup Plan</h4>
                <h1
                  className={`card-title pricing-card-title ${styles.cardprice}`}
                >
                  $80<small className={`${styles.cardmonth}`}>/yearly</small>
                </h1>
              </div>
              <div className="card-body">
                <ul className={`${styles.cardfeatures}`}>
                  <li>
                    <span>
                      <FaCheck className={`${styles.cardicon}`} />
                    </span>{" "}
                    All Products
                  </li>
                  <li>
                    <span>
                      <FaCheck className={`${styles.cardicon}`} />
                    </span>{" "}
                    Weekly Updates
                  </li>
                  <li>
                    <span>
                      <FaCheck className={`${styles.cardicon}`} />
                    </span>{" "}
                    24/7 Call support
                  </li>
                  <li>
                    <span>
                      <FaCheck className={`${styles.cardicon}`} />
                    </span>{" "}
                    24/7 Email support
                  </li>
                  <li>
                    <span>
                      <FaCheck className={`${styles.cardicon}`} />
                    </span>{" "}
                    24/7 Bug Fix support
                  </li>
                </ul>
                <button
                  type="button"
                  className={`btn btn-lg ${styles.cardbutton} ${styles.bestcardbutton}`}
                >
                  Choose This Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
