import { doctors } from "../../../../public/assets/doctors.json"
import Image from "next/image";
import Button from "../Button/Button";
import styles from "../DoctorCard/DoctorCard.module.css";

function DoctorCard () {
return (
  <ul className={styles.doctorGrid}>
  {doctors.map((doctor) => (
    <li key={doctor.id}>
      <article className={styles.DoctorInfo}>
        <Image
          className={styles.doctorImage}
          src={doctor.image}
          width={210}
          height={300}
          alt={`${doctor.doctor}`}
        />
        <h3 className={styles.doctorOrdinalNumber}>{doctor.doctor}</h3>
        <h3 className={styles.actorName}>{doctor.actor}</h3>
        <time className={styles.screenTime}>{doctor.screen_time}</time>
        <br />
        <Button />
      </article>
    </li>
  ))}
</ul>
)}

export default DoctorCard;