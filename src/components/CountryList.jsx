import styles from "./CountryList.module.css";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
CountryList.propTypes = {
  isLoading: PropTypes.bool,
  cities: PropTypes.array,
};

export default function CountryList({ isLoading, cities }) {
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  console.log(countries);

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
