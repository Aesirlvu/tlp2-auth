import { createButton } from "./createButton.js";
import { getAllTodos, DeleteTodo } from "./api.js";
import { createEditModal } from "./modal.js";

export const fillTable = (tbody) => {
  getAllTodos().then((data) => {
    data.todos.forEach((todo) => {
      if (todo.id > 10) return;

      const tr = document.createElement("tr");

      const createCell = (content) => {
        const td = document.createElement("td");
        td.classList.add("border", "border-gray-300", "px-4", "py-2");
        td.textContent = content;
        return td;
      };

      tr.append(
        createCell(todo.id),
        createCell(todo.title),
        createCell(todo.isCompleted ? "✅" : "❌"),
        createCell(todo.owner)
      );

      const actionsCell = document.createElement("td");
      actionsCell.classList.add("border", "border-gray-300", "px-4", "py-2");

      const editButton = createButton(
        "Editar",
        [
          "bg-yellow-500",
          "text-white",
          "px-2",
          "py-1",
          "rounded",
          "hover:bg-yellow-600",
          "mr-2",
        ],
        () => {
          const modal = createEditModal(todo);
          document.body.appendChild(modal);
          modal.showModal();
        }
      );

      const deleteButton = createButton(
        "Eliminar",
        [
          "bg-red-500",
          "text-white",
          "px-2",
          "py-1",
          "rounded",
          "hover:bg-red-600",
        ],
        () => DeleteTodo(todo.id).then(() => window.location.reload())
      );

      actionsCell.append(editButton, deleteButton);
      tr.appendChild(actionsCell);

      tbody.appendChild(tr);
    });
  });
};
