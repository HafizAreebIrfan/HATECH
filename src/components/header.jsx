import styles from "../styles/header.module.css";
import Logolight from "../assets/logo.png";
import Logodark from "../assets/logodark.png";
import { CiMenuFries } from "react-icons/ci";
import { WiDaySunny } from "react-icons/wi";
import { IoClose } from "react-icons/io5";
import { MdNightlightRound } from "react-icons/md";

export default function Header({toggle, handletoggle, activescroll}) {
  return (
    <>
      <div
        className={`${styles.header} ${!toggle ? `${styles.headerlight}` : `${styles.headerdark}`}
          navbar navbar-expand-lg d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3`}
      >
        <div className="container px-4">
          <div className={`${styles.logo}`}>
            <img
              src={`${!toggle ? Logolight : Logodark}`}
              alt="Logo"
              className={`${styles.logoimg}`}
            />
          </div>
          <div
            className={`offcanvas offcanvas-end ${styles.offcanvas}`}
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <img
                src={`${!toggle ? Logolight : Logodark}`}
                className={`offcanvas-title ${styles.logoimg}`}
                id="offcanvasNavbarLabel"
                alt="Offcanvas Logo"
              />
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
              <button
                type="button"
                className={` ${styles.menutoggleoff}`}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <IoClose className={` ${styles.menutoggleofficon}`} />
              </button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 mb-md-0">
                <li className={`${styles.menuitem} nav-item`}>
                  <a href="#" className={`nav-link ${activescroll === "home" ? styles.active: ''}`}>
                    Home
                  </a>
                </li>
                <li className={`${styles.menuitem} nav-item`}>
                  <a href="#" className={`nav-link ${activescroll === "about" ? styles.active: ''}`}>
                    About
                  </a>
                </li>
                <li className={`${styles.menuitem} nav-item`}>
                  <a href="#" className={`nav-link ${activescroll === "services" ? styles.active:''}`}>
                    Services
                  </a>
                </li>
                <li className={`${styles.menuitem} nav-item`}>
                  <a href="#" className={`nav-link ${activescroll === "product" ? styles.active:''}`}>
                    Product
                  </a>
                </li>
                <li className={`${styles.menuitem} nav-item`}>
                  <a href="#" className={`nav-link ${activescroll === "pricing" ? styles.active:''}`}>
                    Pricing
                  </a>
                </li>
                <li className={`${styles.menuitem} nav-item`}>
                  <a href="#" className={`nav-link ${activescroll === "reviews" ? styles.active:''}`}>
                    Reviews
                  </a>
                </li>
                <li className={`${styles.menuitem} nav-item`}>
                  <a href="#" className={`nav-link ${activescroll === "contact" ? styles.active:''}`}>
                    Contact
                  </a>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                <div className="title">
                  <p className={`mb-0 ${styles.themetext}`}>Theme: </p>
                </div>
                <div
                  className={`${styles.togglebtn} ms-3`}
                  onClick={handletoggle}
                >
                  {!toggle ? (
                    <WiDaySunny
                      className={`${styles.toggleicon} ${
                        toggle ? styles.toggledicon : ""
                      }`}
                    />
                  ) : (
                    <MdNightlightRound
                      className={`${styles.toggleicon} ${
                        toggle ? styles.toggledicon : ""
                      }`}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.links}`}>
            <button
              className={`navbar-toggler ${styles.navtoggleicon} ms-4`}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <CiMenuFries />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
