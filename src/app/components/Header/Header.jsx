import Link from "next/link";
import styles from "../Header/Header.module.css";
import Image from "next/image";
import logo from "../../../../public/assets/img/logos/logo.png";
import SocialNavBar from "../SocialNavBar/SocialNavBar";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigationSection}>
        <ul className={styles.pageNavigations}>
          <li>
            <Link className={styles.headerLink} href="/conoce-a">
              Conoce a
            </Link>
          </li>
          <li>
            <Link className={styles.headerLink} href="/doctores">
              Doctores
            </Link>
          </li>
          <li>
            <Link className={styles.headerLink} href="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <Link href="/">
      <Image
        className={styles.mainLogo}
        src={logo}
        width={120}
        height={120}
        alt="Doctor Who logo"
      />
      </Link>
      <form className={styles.searchBar}>
        <input type="text" placeholder="Buscar" />
      </form>
      <SocialNavBar />
    </header>
  );
}

export default Header;
