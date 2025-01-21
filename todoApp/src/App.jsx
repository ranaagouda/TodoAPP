import { useState } from "react";
import Header from "./components/layout/header";
import Options from "./components/layout/options";
import Input from "./components/common/input";
import TaskList from "./components/features/taskList";
import ClearCompleted from "./components/common/clearCompleted";
import "./index.css";

function App() {
  const [selectedOption, setSelectedOption] = useState("Personal");
  const [personalTasks, setPersonalTasks] = useState([]);
  const [professionalTasks, setProfessionalTasks] = useState([]);

  const tasks =
    selectedOption === "Personal" ? personalTasks : professionalTasks;
  const setTasks =
    selectedOption === "Personal" ? setPersonalTasks : setProfessionalTasks;

  return (
    <>
      <div>
        <Header />
        <Options
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <div className="container">
          <Input tasks={tasks} setTasks={setTasks} />
          <div className="taskList">
            <TaskList tasks={tasks} setTasks={setTasks} />
            <ClearCompleted tasks={tasks} setTasks={setTasks} />
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
