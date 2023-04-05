import { ChangeEvent, FC } from "react";
import styles from "./checkbox.module.css";

interface IInput {
  value?: string;
  name: string;
  label?: string;
  extraClass?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<IInput> = ({
  name,
  label,
}) => {
  return (
      <label className={styles.label}>
        {label}
        <input
          className={styles.checkbox}
          name={name}
          type="checkbox"
        />
        <div className={styles.pseudo_checkbox}></div>
      </label>
  );
};

export default Checkbox;
