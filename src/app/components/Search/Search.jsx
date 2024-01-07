"use client";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "../../components/Search/Search.module.css";
import magnifyingGlass from "../../../../public/assets/img/icons/material-symbols-light_search.svg";
import Image from "next/image";

const Search = ({additionalStyles}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const query = event.currentTarget.query.value;

    router.push(`/buscar?q=${query}`);
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.searchBar} ${additionalStyles}`}>
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
          name="query"
          defaultValue={searchParams.get("q") || ""}
        />
      </label>
      <button type="submit" className={styles.submitButton}></button>
    </form>
  );
};

export default Search;
