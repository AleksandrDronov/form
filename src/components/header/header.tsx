import { FC, useState } from "react";
import styles from "./header.module.css";

const Header: FC = () => {
  const [addClass, setAddClass] = useState('')
  const hadleClick = () => {
    setAddClass(styles.tooltiptext_visible);
  }
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.title_gray}>Здравствуйте,</span>
        <span className={styles.tooltip}>
          {" "}
          Человек №3596941
          <div className={`${styles.tooltiptext} ${addClass}`}>
            <input type="text" defaultValue='Прежде чем действовать, надо понять'/>
          </div>
        </span>
      </h1>
      <p className={styles.subtitle} onClick={hadleClick}>Сменить статус</p>
    </div> 
  );
};

export default Header;
