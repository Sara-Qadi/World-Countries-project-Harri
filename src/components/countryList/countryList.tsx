import type { Country } from "../../hooks/useCountries";
import Grid from "../../ui/grid/grid";
import CountryCard from "../countryCard/countryCard";

interface CountryListProps {
  countries: Country[];
}

function CountryList({ countries }: CountryListProps) {
  if (!countries.length) return <p>No countries found.</p>;

  return (
    <Grid>
      {countries.map((country) => (
        <CountryCard key={country.name} {...country} />
      ))}
    </Grid>
  );
}

export default CountryList;
