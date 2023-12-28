import Link from "next/link";
import styles from "@/app/components/SocialNavBar/SocialNavBar.module.css";
import Image from "next/image";
import facebook from "../../assets/img/icons/facebook.svg";
import twitter from "../../assets/img/icons/simple-icons_x.svg";
import instagram from "../../assets/img/icons/mdi_instagram.svg";
import tiktok from "../../assets/img/icons/ic_baseline-tiktok.svg";

function SocialNavBar() {
  return (
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
  );
}


export default SocialNavBar