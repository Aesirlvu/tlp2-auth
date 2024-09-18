export const getAllTodos = async (req, res) => {
  const response = await fetch("http://localhost:4000/todos", {
    credentials: "include",
  });

  const data = await response.json();
  return data;
};

export const CreateTodo = async (todoData) => {
  await fetch("http://localhost:4000/todos", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  });
};

export const EditTodo = async (todoId, todoData) => {
  const response = await fetch(`http://localhost:4000/todos/${todoId}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  });

  if (!response.ok) {
    return res.status(400).json({ message: "Error editing todo" });
  }
};
export const DeleteTodo = async (todoId) => {
  const response = await fetch(`http://localhost:4000/todos/${todoId}`, {
    method: "DELETE",

    credentials: "include",
  });

  if (!response.ok) {
    return res.status(400).json({ message: "Error deleting todo" });
  }
  return await response.json();
};
