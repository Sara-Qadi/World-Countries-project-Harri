import CountryList from "../../components/countryList/countryList";
import ToolBar from "./components/toolBar/toolBar";
import type { Country } from "../../hooks/useCountries";
import styles from "./HomePage.module.css";

interface HomePageUIProps {
  countries: Country[];
  query: string;
  setQuery: (value: string) => void;
  filter: string;
  setFilter: (value: string) => void;
  regions: string[];
  loading: boolean;
  error: string;
}

export default function HomePageUI({
  countries,
  query,
  setQuery,
  filter,
  setFilter,
  regions,
  loading,
  error,
}: HomePageUIProps) {
  return (
    <div className={styles.container}>
      <ToolBar query={query} setQuery={setQuery} filter={filter} setFilter={setFilter} regions={regions} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <CountryList countries={countries} />
    </div>
  );
}
