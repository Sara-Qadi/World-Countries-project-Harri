import type { Country } from "../../hooks/useCountries";
import CountryCard from "../countryCard/countryCard";
import styles from "./CountryList.module.css";

interface CountryListProps {
  countries: Country[];
}

function CountryList({ countries }: CountryListProps) {
  if (!countries.length) return <p>No countries found.</p>;

  return (
    <div className={styles.layout}>
      {countries.map((country) => (
        <CountryCard key={country.name} {...country} />
      ))}
    </div>
  );
}

export default CountryList;
