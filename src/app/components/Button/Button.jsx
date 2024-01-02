import Link from "next/link";
import styles from "../Button/Button.module.css";

function Button({additionalStyles}) {

  return (
    <button className={`${styles.seeMoreButton} ${additionalStyles}`}>
      <Link
        className={styles.buttonLink}
        href="https://www.doctorwho.tv/"
        target="_blank"
      >
        Ver más
      </Link>
    </button>
  );
}

export default Button;
