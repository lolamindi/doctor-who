import Link from "next/link";
import styles from "@/app/components/Header/Header.module.css";
import Image from "next/image";
import logo from "../../assets/img/logos/logo.png";
import SocialNavBar from "../SocialNavBar/SocialNavBar";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigationSection}>
        <ul className={styles.pageNavigations}>
          <li>
            <Link className={styles.headerLink} href="" target="_blank">
              Conoce a
            </Link>
          </li>
          <li>
            <Link className={styles.headerLink} href="" target="_blank">
              Doctores
            </Link>
          </li>
          <li>
            <Link className={styles.headerLink} href="" target="_blank">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <Image
        className={styles.mainLogo}
        src={logo}
        width={120}
        height={120}
        alt="Official Doctor Who logo"
      />
      <form className={styles.searchBar}>
        <input type="text" placeholder="Buscar" />
      </form>
      <SocialNavBar />
    </header>
  );
}

export default Header;
