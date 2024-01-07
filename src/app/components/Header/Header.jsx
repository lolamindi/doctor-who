import Link from "next/link";
import styles from "../Header/Header.module.css";
import Image from "next/image";
import logo from "../../../../public/assets/img/logos/logo.png";
import SocialNavBar from "../SocialNavBar/SocialNavBar";
import magnifyingGlass from "../../../../public/assets/img/icons/material-symbols-light_search.svg";

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
        <Image
          className={styles.magnifyingGlass}
          src={magnifyingGlass}
          width={22}
          height={22}
          alt="lupa"
        />
        <label className={styles.searchLabel}>
          <input
            className={styles.searchInputArea}
            type="text"
            placeholder=" Buscar"
          />
        </label>
      </form>
      <input id="menu" className={styles.hamburgerMenu} type="checkbox" />
      <label className={styles.menuContainer} htmlFor="menu">
        <div className={styles.menuButton}></div>
      </label>
      <ul className={styles.dropDownMenu}>
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
        <li>
          <form className={styles.searchBarMobile}>
            <Image
              className={styles.magnifyingGlassMobile}
              src={magnifyingGlass}
              width={24}
              height={24}
              alt="lupa"
            />
            <label className={styles.searchLabelMobile}>
              <input
                className={styles.searchInputAreaMobile}
                type="text"
                placeholder="Buscar"
              />
            </label>
          </form>
        </li>
        <li>
          <SocialNavBar
            additionalStyles={styles.specialSocialNavBarMobile}
          ></SocialNavBar>
        </li>
      </ul>
      <SocialNavBar
        additionalStyles={styles.specialSocialNavBarDesktop}
      ></SocialNavBar>
    </header>
  );
}

export default Header;
