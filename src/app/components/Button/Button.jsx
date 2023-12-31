import Link from "next/link";
import styles from "../Button/Button.module.css";

function Button() {
  return (
<button className={styles.seeMoreButton}>
            <Link className={styles.buttonLink} href="https://www.doctorwho.tv/" target="_blank">
              Ver más
            </Link>
          </button>
)}

export default Button;