import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CountryDetailsUI from "./countryDetails";

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
  borders?: string[];
}

export default function CountryDetailsContainer() {
  const { name } = useParams<{ name: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  const [borderCountries, setBorderCountries] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!name) return;

    async function fetchCountry() {
      try {
if (!name) return; 
const res = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fullText=true`);
        if (!res.ok) throw new Error("Failed to fetch country");
        const data: Country[] = await res.json();
        const countryData = data[0];
        setCountry(countryData);

        if (countryData.borders?.length) {
          const borderRes = await fetch(
            `https://restcountries.com/v3.1/alpha?codes=${countryData.borders.join(",")}&fields=name`
          );
          const borderData: Country[] = await borderRes.json();
          setBorderCountries(borderData.map((c) => c.name.common));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCountry();
  }, [name]);

  return (
    <CountryDetailsUI
      loading={loading}
      country={country}
      borderCountries={borderCountries}
    />
  );
}
