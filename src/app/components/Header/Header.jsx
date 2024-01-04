import Link from "next/link";
import styles from "../Header/Header.module.css";
import Image from "next/image";
import logo from "../../../../public/assets/img/logos/logo.png";
import SocialNavBar from "../SocialNavBar/SocialNavBar";
import search from "../../../../public/assets/img/icons/material-symbols-light_search.svg";
import hamburger from "../../../../public/assets/img/icons/burger-menu.svg";

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
      <label className={styles.searchLabel}>
        <Image
          className={styles.searchLogo}
          src={search}
          width={17}
          height={17}
          alt="buscar"
        />
        <input type="text" placeholder="Buscar" />
      </label>
      </form>
      <Image
        className={styles.hamburgerMenu}
        src={hamburger}
        width={40}
        height={40}
        alt="menu hamburguesa"
      />
      <SocialNavBar additionalStyles={styles.specialSocialNavBar}></SocialNavBar>
    </header>
  );
}

export default Header;
