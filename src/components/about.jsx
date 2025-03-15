import styles from "../styles/about.module.css";
import Aboutmain from "../assets/aboutmain.png";
import Aboutbox from "../assets/aboutbox-shape.png";
import Aboutemoji from "../assets/aboutemoji.png";
import Aboutgraph from "../assets/aboutgrap.png";
import Aboutleftshape from "../assets/aboutleftshape.png";
import Aboutbg from "../assets/aboutbg-shape-green.png";

export default function About({toggle}) {
  return (
    <>
      <div
        className={`${
          !toggle ? `${styles.aboutlight}` : `${styles.aboutdark}`
        }`}
      >
        <div className={`container px-4 ${styles.aboutcontainer}`}>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className={`${styles.imagebox}`}>
                <img src={Aboutbg} alt="" className={`${styles.aboutbg}`} />
                <img
                  src={Aboutmain}
                  className={`${styles.aboutmainimg}`}
                  alt=""
                />
                <div className={`${styles.aboutblocks}`}>
                  <img
                    src={Aboutbox}
                    className={`${styles.aboutboximg}`}
                    alt=""
                  />
                  <img
                    src={Aboutemoji}
                    className={`${styles.aboutemojiimg}`}
                    alt=""
                  />
                  <img
                    src={Aboutgraph}
                    className={`${styles.aboutgraphimg}`}
                    alt=""
                  />
                  <img
                    src={Aboutleftshape}
                    className={`${styles.aboutleftshapeimg}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <h4 className={`${styles.abtagline}`}>About Company</h4>
              <h1 className={`${styles.abheadline}`}>
                Products To Improve Your Company Brand
              </h1>
              <p className={`${styles.abdesc}`}>
                It is a long established fact that a reader will be distracted
                the readable content of a page when looking at layout the point
                established fact that
              </p>
              <div className={`${styles.abprogress}`}>
                <div className={`${styles.abprogress1}`}>
                  <p className={`${styles.percent}`}>85%</p>
                  <h4 className={`${styles.title}`}>Progress</h4>
                </div>
                <div className={`${styles.abprogress2}`}>
                  <p className={`${styles.percent}`}>90%</p>
                  <h4 className={`${styles.title}`}>Progress</h4>
                </div>
              </div>
              <button className={`${styles.abbutton}`}>Explore More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
