import { FC } from "react";
import { nanoid } from "nanoid";
import styles from "./select.module.css";

interface ICity {
  city: string;
  population: string;
}

interface ISelect {
  cities: ICity[];
  label?: string;
}

const Select: FC<ISelect> = (props) => {
  const id = nanoid();
  return (
    <>
      {props.label && <label className={styles.label} htmlFor={id}>{props.label}</label>}
      <select required className={styles.select} id={id}>
        {props.cities.map((item, index) => (
          <option value={item.city} key={index}>
            {item.city}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
