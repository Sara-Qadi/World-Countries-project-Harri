import { Link } from "react-router-dom";
import styles from "./countryDetails.module.css";

interface Country {
  name: { common: string; nativeName?: Record<string, { common: string }> };
  flags: { png: string };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  tld?: string[];
  currencies?: Record<string, { name: string }>;
  languages?: Record<string, string>;
}

interface CountryDetailsUIProps {
  loading: boolean;
  country: Country | null;
  borderCountries: string[];
}

export default function CountryDetailsUI({ loading, country, borderCountries }: CountryDetailsUIProps) {
  if (loading) return <div className={styles.loading}>Loading country...</div>;
  if (!country) return <div className={styles.error}>Country not found</div>;

  const nativeName = country.name.nativeName
    ? Object.values(country.name.nativeName)[0]?.common
    : country.name.common;

  const currencies = country.currencies
    ? Object.values(country.currencies).map((c) => c.name).join(", ")
    : "N/A";

  const languages = country.languages ? Object.values(country.languages).join(", ") : "N/A";

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backButton}>
        ← Back
      </Link>

      <div className={styles.content}>
        <div className={styles.flagContainer}>
          <img
            src={country.flags.png || "/placeholder.svg"}
            alt={`${country.name.common} flag`}
            className={styles.flag}
          />
        </div>

        <div className={styles.details}>
          <h1 className={styles.countryName}>{country.name.common}</h1>

          <div className={styles.infoGrid}>
            <div className={styles.infoColumn}>
              <p><strong>Native Name:</strong> {nativeName}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Sub Region:</strong> {country.subregion ?? "N/A"}</p>
              <p><strong>Capital:</strong> {country.capital?.[0] ?? "N/A"}</p>
            </div>
            <div className={styles.infoColumn}>
              <p><strong>Top Level Domain:</strong> {country.tld?.[0] ?? "N/A"}</p>
              <p><strong>Currencies:</strong> {currencies}</p>
              <p><strong>Languages:</strong> {languages}</p>
            </div>
          </div>

          {borderCountries.length > 0 && (
            <div className={styles.borderSection}>
              <strong>Border Countries:</strong>
              <div className={styles.borderCountries}>
                {borderCountries.map((border) => (
                  <Link key={border} to={`/country/${border}`} className={styles.borderCountry}>
                    {border}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
