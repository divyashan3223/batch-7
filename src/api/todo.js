import httpClient from "../libs/axios";

export const getTodos = async () => {
  const response = await httpClient.get("/todos");
  return response.data;
};
export const getTodo = async (id) => {
  const response = await httpClient.get(`/todos/${id}`);
  return response.data;
};
export const createTodo = async (body) => {
  const response = await httpClient.post("/todos", body);
  return response.data;
};
export const updateTodo = async (id, body) => {
  const response = await httpClient.put(`/todos/${id}`, body);
  return response.data;
};
export const deleteTodo = async (id) => {
  const response = await httpClient.delete(`/todos/${id}`);
  return response.data;
};
