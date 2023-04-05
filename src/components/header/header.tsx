import { FC } from "react";
import styles from "./header.module.css";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.title_gray}>Здравствуйте,</span>
        <span className={styles.tooltip}>
          {" "}
          Человек №3596941
          <div className={styles.tooltiptext}>
            <span>Прежде чем действовать, надо понять</span>
          </div>
        </span>
      </h1>
      <p className={styles.subtitle}>Сменить статус</p>
    </div>
  );
};

export default Header;
