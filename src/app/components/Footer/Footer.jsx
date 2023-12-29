import Link from "next/link";
import styles from "@/app/components/Footer/Footer.module.css";
import Image from "next/image";
import logo from "../../assets/img/logos/logo-cadena.png";
import SocialNavBar from "../SocialNavBar/SocialNavBar";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div class={styles.footerLine}></div>
      <Image
        className={styles.symbolLogo}
        src={logo}
        width={25}
        height={25}
        alt="Doctor Who symbol"
      />
      <SocialNavBar />
    </footer>
  );
}
export default Footer;
