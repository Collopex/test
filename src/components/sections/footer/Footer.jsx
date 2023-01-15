import { Link } from "react-scroll";
import Logo from "../../util/Logo";
import PolicyWrapper from "../../policy/PolicyWrapper";

function Footer() {
  return (
    <>
      <div className="container ">
        <div className="footer-flex-informations  ">
          <Link
            className="footer-information nav-links"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1500}
          >
            Hakkımızda
          </Link>
          <PolicyWrapper />
          <Link
            className="footer-information nav-links"
            to="reservation"
            spy={true}
            smooth={true}
            offset={100}
            duration={1500}
          >
            Bize Ulaşın
          </Link>
        </div>
        <div className=" footer-flex-logo ">
          <Logo />
          <p className="footer-copyrights">
            © {new Date().getFullYear()} YENİ HİSAR GAZİNO - TÜM HAKLARI
            SAKLIDIR
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
