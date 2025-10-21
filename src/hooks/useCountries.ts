import { useEffect, useState } from "react";

export interface Country {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
}

interface CountryAPIResponse {
  name: { common: string };
  flags: { png: string };
  population: number;
  region: string;
  capital?: string[];
}

export function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
        );
        if (!res.ok) throw new Error("Network error");

        const data: CountryAPIResponse[] = await res.json();

        const formatted: Country[] = data.map((c) => ({
          name: c.name.common,
          flag: c.flags.png,
          population: c.population,
          region: c.region,
          capital: c.capital?.[0] ?? "N/A",
        }));

        setCountries(formatted);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  return { countries, setCountries, loading, error };
}
