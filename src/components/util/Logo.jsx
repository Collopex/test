import styles from "../navigation/MainHeader.module.css";

function Logo() {
  return (
    <img id={styles["logo"]} src="images/logo/logo.svg" alt="Yeni Hisar Logo" />
  );
}

export default Logo;
