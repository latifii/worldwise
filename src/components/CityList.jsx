import styles from "./CityList.module.css";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
CityList.propTypes = {
  isLoading: PropTypes.bool,
  cities: PropTypes.array,
};

export default function CityList() {
  const { isLoading, cities } = useCities();
  if (isLoading) return <Spinner />;
  if (cities.length === 0) return <Message message="City is empty" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}
