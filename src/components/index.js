import Lixo from "../assets/garbage.png";

const Task = ({ task, done, id, onClick, onDone }) => {
  return (
    <div className="task" onClick={onDone}>
      <div className={`status ${done ? "done" : "pending"}`}></div>
      <div className="text">{task}</div>
      <img src={Lixo} alt="Excluir" className="delete" onClick={onClick} />
    </div>
  );
};

export default Task;
