import type { Country } from "../../hooks/useCountries";
import { Link } from "react-router-dom";

import styles from "./CountryCard.module.css";
import Card from "../../ui/card/card";
import CardImage from "../../ui/cardImage/cardImage";
import CardBody from "../../ui/cardBody/cardBody";
import CardTitle from "../../ui/cardTitle/cardTitle";
import CardText from "../../ui/cardText/cardText";

export default function CountryCard({ name, flag, population, region, capital }: Country) {
  return (
    <Link to={`/country/${encodeURIComponent(name)}`} className={styles.cardLink}>
      <Card>
        <CardImage src={flag} alt={`${name} flag`} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText><strong>Population:</strong> {population.toLocaleString()}</CardText>
          <CardText><strong>Region:</strong> {region}</CardText>
          <CardText><strong>Capital:</strong> {capital}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
}
