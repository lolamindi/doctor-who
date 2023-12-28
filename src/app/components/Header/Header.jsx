import Link from "next/link";
import styles from "@/app/components/Header/Header.module.css";
import Image from "next/image";
import logo from "../../assets/img/logos/logo.png";
import facebook from "../../assets/img/icons/facebook.svg";
import twitter from "../../assets/img/icons/simple-icons_x.svg";
import instagram from "../../assets/img/icons/mdi_instagram.svg";
import tiktok from "../../assets/img/icons/ic_baseline-tiktok.svg";

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
      <nav className={styles.socialMediaSection}>
        <ul className={styles.socialMedia}>
          <li>
            <Link href="https://www.facebook.com/DoctorWho/" target="_blank">
              <Image
                className={styles.facebookLogo}
                src={facebook}
                width={17}
                height={17}
                alt="facebook icon"
              />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/bbcdoctorwho" target="_blank">
              <Image
                className={styles.twitterLogo}
                src={twitter}
                width={17}
                height={17}
                alt="twitter icon"
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/bbcdoctorwho" target="_blank">
              <Image
                className={styles.instagramLogo}
                src={instagram}
                width={18}
                height={18}
                alt="instagram icon"
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.tiktok.com/@doctorwho" target="_blank">
              <Image
                className={styles.tiktokLogo}
                src={tiktok}
                width={18}
                height={18}
                alt="tiktok icon"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
