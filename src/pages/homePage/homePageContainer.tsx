import { useEffect, useState } from "react";
import type { Country } from "../../hooks/useCountries";
import { useCountries } from "../../hooks/useCountries";
import HomePageUI from "./homePage";

interface CountryAPIResponse {
  name: { common: string };
  flags: { png: string };
  population: number;
  region: string;
  capital?: string[];
}

const ALL_REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function HomePageContainer() {
  const { countries, setCountries, loading, error } = useCountries();
  const [query, setQuery] = useState("");
const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("region", filter);
  }, [filter]);

  useEffect(() => {
    if (!query) return; 

    const delay = setTimeout(async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${query}?fullText=false`);
        if (!res.ok) {
          setCountries([]);
          return;
        }

        const data: CountryAPIResponse[] = await res.json();
        const formatted: Country[] = data.map((c) => ({
          name: c.name.common,
          flag: c.flags.png,
          population: c.population,
          region: c.region,
          capital: c.capital?.[0] ?? "N/A",
        }));

        setCountries(formatted);
      } catch {
        setCountries([]);
      }
    }, 500); 

    return () => clearTimeout(delay);
  }, [query, setCountries]);

  const filteredCountries = countries.filter((c) =>
    filter ? c.region === filter : true
  );

  return (
    <HomePageUI
      countries={filteredCountries}
      query={query}
      setQuery={setQuery}
      filter={filter}
      setFilter={setFilter}
      regions={ALL_REGIONS}
      loading={loading}
      error={error || ""}
    />
  );
}
