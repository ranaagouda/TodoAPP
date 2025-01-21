/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "../../styles/taskItem.module.css";
import deleteIcon from "../../assets/Delete outline.png";
import checkedImg from "../../assets/checked.png";
import uncheckedImg from "../../assets/unchecked.png";

function TaskItem({ task, tasks, setTasks }) {
  const [completed, setCompleted] = useState(task.completed);

  const handleToggleComplete = () => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    setCompleted(!completed);
    console.log(`Task with id ${task.id} done`);
  };

  const handleDelete = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
    console.log(`Task with id ${task.id} deleted`);
  };

  return (
    <div className={styles.taskItem}>
      <div className={styles.taskContent}>
        <img
          src={completed ? checkedImg : uncheckedImg}
          alt="checked"
          onClick={handleToggleComplete}
        />
        <span className={completed ? styles.completed : ""}>{task.text}</span>
      </div>
      <div className={styles.deleteButton}>
        <img src={deleteIcon} alt="delete" onClick={handleDelete} />
      </div>
    </div>
  );
}

export default TaskItem;
