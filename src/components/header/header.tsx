import { ChangeEvent, FC, useRef, useState } from "react";
import styles from "./header.module.css";

const Header: FC = () => {
  const [addClass, setAddClass] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('Прежде чем действовать, надо понять');


  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if(isOpen) {
      setIsOpen(false);
      setAddClass('');
    } else {
      setAddClass(styles.tooltiptext_visible);
      setIsOpen(true);
      setTimeout(() => {
        inputRef.current?.focus()
      }, 0);
    };
  }

  const handleCange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  }

  const buttonName = isOpen ? 'Сохранить' : 'Сменить статус';

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.title_gray}>Здравствуйте,</span>
        <span className={styles.tooltip}>
          {" "}
          Человек №3596941
          <div className={`${styles.tooltiptext} ${addClass}`} >
            <input className={styles.input} ref={inputRef} type="text" value={value} onChange={handleCange}/>
          </div>
        </span>
      </h1>
      <p className={styles.subtitle} onClick={handleClick}>{buttonName}</p>
    </div> 
  );
};

export default Header;
