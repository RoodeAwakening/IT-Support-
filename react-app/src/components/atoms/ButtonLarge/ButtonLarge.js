import React from "react";
import styles from './ButtonLarge.module.css'

function ButtonLarge({ text, buttonLargeOnClick }) {
  return (
    <div className={styles.ButtonLarge_container}>
      <button onClick={buttonLargeOnClick}>{text}</button>
    </div>
  );
}

export default ButtonLarge;
