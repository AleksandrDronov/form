import { ChangeEvent, FC } from "react";
import styles from "./input.module.css";
import { nanoid } from "nanoid";

interface IInput {
  type: "text" | "password" | "email";
  value: string;
  values?: { password: string; repeatPassword: string; email: string };
  name: string;
  label?: string;
  extraClass?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IInput> = ({ type, onChange, value, values, name, label }) => {
  const id = nanoid();
  const emailReg = /^([a-z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;

  const inputClass =
    (type === "password" && name !== "repeatPassword" && value.length > 4) ||
    (type === "password" && name === "repeatPassword" && values?.password === values?.repeatPassword && value.length > 4) ||
    emailReg.test(value)
      ? `${styles.input}`
      : `${styles.input} ${styles.input_error}`;

  const alertMessage = {
    "1": "Укажите пароль",
    "2": "Укажите E-mail",
    "3": "Используйте не менее 5 символов",
    "4": "Пароли не совпадают",
    "5": "Неверный E-mail",
  };

  let alert;
  if (type === "password" && !value) {
    alert = alertMessage["1"];
  } else if (
    type === "password" &&
    name === "repeatPassword" &&
    values?.password !== values?.repeatPassword
  ) {
    alert = alertMessage["4"];
  } else if (type === "password" && value.length < 5) {
    alert = alertMessage["3"];
  } else if (type === "email" && !value) {
    alert = alertMessage["2"];
  } else if (type === "email" && !emailReg.test(value)) {
    alert = alertMessage["5"];
  }

  return (
    <>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={styles.container}>
        <input
          className={inputClass}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          id={id}
        />
        <p className={styles.alert}>{alert}</p>
      </div>
    </>
  );
};

export default Input;
