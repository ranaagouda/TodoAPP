/* eslint-disable react/prop-types */

import styles from "../../styles/input.module.css";
import { useState } from "react";
import { v4 } from "uuid";

function Input({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        {
          id: v4(),
          text: newTask,
          completed: false,
        },
      ]);
      setNewTask("");
    }
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.textContainer}
          placeholder="What do you need to do?"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <div className={styles.addButton} onClick={addTask}>
          ADD
        </div>
      </div>
    </>
  );
}

export default Input;
