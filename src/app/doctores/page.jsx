import styles from "../doctores/page.module.css";
import DoctorCard from "../components/DoctorCard/DoctorCard";
import { doctors } from "../../../public/assets/doctors.json";

function DoctorList() {
  return (
    <section className={styles.doctorContainer}>
      <h1 className={styles.doctorTitle}>Doctores</h1>
      <ul className={styles.doctorGrid}>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            <DoctorCard doctor={doctor}/>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DoctorList;
