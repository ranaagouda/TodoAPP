import PropTypes from "prop-types";
import cancelIcon from "../../assets/cancel.png";
import styles from "../../styles/components.module.css";

function ClearCompleted({ tasks, setTasks }) {
  const onClearCompleted = () => {
    console.log("Before clear:", tasks);
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
    console.log("After clear:", updatedTasks);
  };

  return (
    <div className={styles.clearCompleted} onClick={onClearCompleted}>
      <img src={cancelIcon} alt="Clear completed" />
      <p>Clear completed</p>
    </div>
  );
}
ClearCompleted.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

ClearCompleted.defaultProps = {
  tasks: [],
};

export default ClearCompleted;
