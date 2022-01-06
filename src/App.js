import "./App.css";
import Logo from "./assets/logo-tt.png";
import { useEffect, useState } from "react";
import { AddTask, DeleteTask, GetTasks, updateTask } from "./service";
import Task from "./components";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleChangeInput(event) {
    const inputTask = event.target.value;
    setTask(inputTask);
  }

  const listTasks = async () => {
    const response = await GetTasks();
    setTaskList(response.data);
    console.log("Data", taskList);
  };

  async function handleAddItemToList(event) {
    event.preventDefault();

    const data = {
      task: task,
      done: false,
    };

    await AddTask(data);
    setTask("");
    listTasks();
  }

  const deleteItem = async (id) => {
    await DeleteTask(id);
    listTasks();
  };

  async function handleUpdateTask(id) {
    const data = {
      done: true,
    };

    await updateTask(id, data);

    listTasks();
  }

  useEffect(() => {
    listTasks();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>E aí, Cícero?</h1>
        <img src={Logo} alt="Logotipo" />
      </header>

      <form className="panel">
        <input
          type="text"
          name=""
          id=""
          placeholder="Digite uma tarefa"
          value={task}
          onChange={handleChangeInput}
        />
        <button type="submit" onClick={handleAddItemToList}>
          +
        </button>
      </form>

      <h5>SUAS TAREFAS:</h5>

      {taskList.map(({ id, task, done }) => {
        return (
          <div key={id}>
            <Task
              task={task}
              done={done}
              id={id}
              onClick={() => deleteItem(id)}
              onDone={() => handleUpdateTask(id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
