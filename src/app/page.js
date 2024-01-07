"use client";
import styles from "../app/page.module.css";
import Image from "next/image";
import Link from 'next/link';
import allonsy from "../../public/assets/img/carousel/carousel-1.webp";

function Home() {
  return (
    <section className={styles.carouselContainer}>
      <div className={styles.cover}>
        <Image
          src={allonsy}
          layout="responsive"
          width={400}
          height={400}
          alt={"Allons-y!"}
        />
        <button className={styles.seeNowButton}>
          <Link
            className={styles.buttonLink}
            href="https://www.doctorwho.tv/"
            target="_blank"
          >
            Ver ahora
          </Link>
        </button>
      </div>
      <h1 className={styles.title}>Allons-y!</h1>
      <div className={styles.imageMobile}>
      </div>
    </section>
  );
}

export default Home;
