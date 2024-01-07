"use client";
import Image from "next/image";
import Link from "next/link";
import { doctors } from "../../../public/assets/doctors.json";

import React from "react";
import styles from "../../app/buscar/page.module.css";
import Button from "../components/Button/Button";

const SearchResults = ({ searchParams }) => {
  const doctorsFiltered = doctors.filter((doctor) =>
    doctor.actor.toLowerCase().includes(searchParams.q.toLowerCase())
  );

  return (
    <>
      <section className={styles.doctorContainer}>
        <h1 className={styles.doctorTitle}>Doctores</h1>
        <ul className={styles.doctorGrid}>
          {doctorsFiltered.map((doctor) => (
            <li key={doctor.id}>
              <article className={styles.doctorInfo}>
                <Image
                  src={doctor.image}
                  alt={`${doctor.name}`}
                  width={210}
                  height={280}
                />
                <h3 className={styles.doctorOrdinalNumber}>{doctor.doctor}</h3>
                <h3 className={styles.actorName}>{doctor.actor}</h3>
                <time className={styles.screenTime}>{doctor.screen_time}</time>
                <Link href={`/${doctor.id}`}>
                  <br />
                  <Button additionalStyles={styles.specialButton}></Button>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SearchResults;
