import styles from "../../styles/components.module.css";
import logo from "../../assets/To-Do-Logo 1.png";

function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Header;
