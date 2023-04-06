import { FormEvent, useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import data from "./data/cities.json";
import Select from "./components/select/select";
import Input from "./components/input/input";
import useForm from "./hooks/use-form";
import Checkbox from "./components/checkbox/checkbox";
import getDate from "./utils/get-date";
import filterCities from "./utils/cities-filter";

function App() {
  const { values, handleChange } = useForm({ password: "", repeatPassword: "", email: ""});
  const [ date, setDate ] = useState<null | string>(null);

  //фильтруем массив по численности населения и сортируем по алфавиту
  const cities = filterCities(data);

  let disableButton = false;
  const emailReg = /^([a-z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;

  if (values.password.length < 5 || values.repeatPassword.length < 5 || !emailReg.test(values.email)) {
    disableButton = true;
  } else if (values.password !== values.repeatPassword) {
    disableButton = true;
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dateMessage = getDate();
    setDate(dateMessage);
    console.log(JSON.stringify(values))
  }

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit}>
      <Header />
      <div className={styles.section_city}>
        <Select cities={cities} label="Ваш город" />
      </div>
      <div className={styles.section_password}>
        <div className={styles.password}>
          <Input
            type={"password"}
            onChange={handleChange}
            value={values.password}
            values={values}
            name={"password"}
            label="Пароль"
          />
        </div>
        <p className={styles.password_title}>
          Ваш новый пароль должен содержать не менее 5 символов.
        </p>
        <div className={styles.password}>
          <Input
            type={"password"}
            onChange={handleChange}
            value={values.repeatPassword}
            values={values}
            name={"repeatPassword"}
            label="Пароль еще раз"
          />
        </div>
        <p className={styles.password_title}>
          Повторите пароль, пожалуйста, это обезопасит вас с нами на случай
          ошибки.
        </p>
      </div>
      <div className={styles.section_email}>
        <div className={styles.password}>
          <Input
            type={"email"}
            onChange={handleChange}
            value={values.email}
            name={"email"}
            label="Электронная почта"
          />
        </div>
        <p className={styles.password_title}>
          Можно изменить адрес, указанный при регистрации.
        </p>
      </div>
      <div className={styles.section_check}>
        <Checkbox name={"checkbox"} label="Я согласен" />
        <p className={styles.checkbox_title}>
          принимать актуальную информацию на емейл
        </p>
      </div>
      <div className={styles.section_button}>
        <button className={disableButton ? styles.disable_button : styles.button} disabled={disableButton}>Изменить</button>
        {date && <p className={styles.password_title}>
          последние изменения {date}
        </p>}
      </div >
    </form>
  );
}

export default App;
