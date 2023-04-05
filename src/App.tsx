import styles from "./app.module.css";
import Header from "./components/header/header";
import data from "./data/cities.json";
import Select from "./components/select/select";
import Input from "./components/input/input";
import useForm from "./hooks/use-form";
import Checkbox from "./components/checkbox/checkbox";

function App() {
  const { values, handleChange } = useForm({ password: "", repeatPassword: "", email: ""});

  //фильтруем по численности населения и сортируем по алфавиту
  const cities = data
    .filter((item) => +item.population > 50000)
    .sort((a, b) => {
      if (a.city > b.city) {
        return 1;
      }
      if (a.city < b.city) {
        return -1;
      }
      return 0;
    });

  //ищем индекс города с максимальной численностью населения
  let indexCityWithMaxPopulation = 0;
  let population = +cities[0].population;

  for (let i = 1; i < cities.length; i++) {
    if (+cities[i].population > population) {
      indexCityWithMaxPopulation = i;
      population = +cities[i].population;
    }
  }

  //вставляем в начало массива город с максимальной численностью населения
  cities.unshift(cities[indexCityWithMaxPopulation]);
  //удаляем из массива город с максимальной численностью населения
  cities.splice(indexCityWithMaxPopulation + 1, 1);

  return (
    <form className={styles.form} noValidate>
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
        <button className={styles.button}>Изменить</button>
        <p className={styles.password_title}>
          последние изменения 15 мая 2012 в 14:55:17
        </p>
      </div >
    </form>
  );
}

export default App;
