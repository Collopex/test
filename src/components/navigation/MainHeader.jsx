import Logo from "../util/Logo";
import styles from "./MainHeader.module.css";
import { Link } from "react-scroll";

function MainHeader() {
  return (
    <header id={styles["main-header"]}>
      <nav id={styles["main-nav"]}>
        <Logo />
        <ul>
          <li className="nav-links">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-50}
              duration={700}
              className={styles["hover-change"]}
            >
              Ana sayfa
            </Link>
          </li>
          <li className="nav-links">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={700}
              className={styles["hover-change"]}
            >
              Hakkımızda
            </Link>
          </li>
          <li className="nav-links">
            <Link
              to="gallery"
              spy={true}
              smooth={true}
              offset={-180}
              duration={700}
              className={styles["hover-change"]}
            >
              Galeri
            </Link>
          </li>
          <li className="nav-links">
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-210}
              duration={700}
              className={styles["hover-change"]}
            >
              Yorumlar
            </Link>
          </li>
          <li className="nav-links">
            <Link
              to="reservation"
              spy={true}
              smooth={true}
              offset={-180}
              duration={700}
              className={styles["hover-change"]}
            >
              Rezervasyon
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
