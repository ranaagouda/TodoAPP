/* eslint-disable react/prop-types */

import TaskItem from "./taskItem";

function TaskList({ tasks, setTasks }) {
  return (
    <div >
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </div>
  );
}

export default TaskList;
