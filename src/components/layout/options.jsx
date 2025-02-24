/* eslint-disable react/prop-types */

import styles from "../../styles/components.module.css";

function Options({ selectedOption, setSelectedOption }) {
  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.options}>
      <p
        className={`${styles.option} ${
          selectedOption === "Personal" ? styles.selected : ""
        }`}
        onClick={() => handleSelectedOption("Personal")}
      >
        Personal
      </p>
      <p
        className={`${styles.option} ${
          selectedOption === "Professional" ? styles.selected : ""
        }`}
        onClick={() => handleSelectedOption("Professional")}
      >
        Professional
      </p>
    </div>
  );
}

export default Options;
