import api from "./baseUrl";

export const GetTasks = async () => {
  const task = await api.get("tasks");
  console.log("GetTasks", task);
  return task;
};

export const AddTask = async (data) => {
  const taskPost = await api.post("tasks", data);

  return taskPost;
};

export const DeleteTask = async (id) => {
  const taskDelete = await api.delete(`tasks/${id}`);

  return taskDelete;
};

export const updateTask = async (id, data) => {
  const update = await api.put(`tasks/${id}`, data);

  return update;
};
