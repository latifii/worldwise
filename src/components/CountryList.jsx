import { useCities } from "../contexts/CitiesContext";
import styles from "./CountryList.module.css";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
CountryList.propTypes = {
  isLoading: PropTypes.bool,
  cities: PropTypes.array,
};

export default function CountryList() {
  const { isLoading, cities } = useCities();
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  if (isLoading) return <Spinner />;
  if (cities.length === 0) return <Message message="City is empty" />;
  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem key={i} country={country} />
      ))}
    </ul>
  );
}
