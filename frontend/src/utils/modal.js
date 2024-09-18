import { createButton } from "./createButton.js";
import { createForm } from "./createForm.js";
import { CreateTodo, EditTodo } from "./api.js";

export const createModal = () => {
  const modal = document.createElement("dialog");
  modal.classList.add("p-6", "rounded-lg", "shadow-xl", "w-1/3", "space-x-20");

  const form = createForm([
    { label: "Título", type: "text", name: "title" },
    { label: "Completada", type: "checkbox", name: "isCompleted" },
  ]);

  const closeButton = createButton(
    "Cerrar",
    [
      "bg-red-500",
      "text-white",
      "px-4",
      "py-2",
      "rounded",
      "hover:bg-red-600",
      "mt-4",
    ],
    () => modal.close()
  );

  const submitButton = createButton(
    "Agregar",
    [
      "bg-green-500",
      "text-white",
      "px-4",
      "py-2",
      "rounded",
      "hover:bg-green-600",
      "mt-4",
    ],
    () => {
      const title = form.title.value;
      const isCompleted = form.isCompleted.checked;

      CreateTodo({
        title,
        isCompleted,
      }).then(() => {
        window.location.reload();
      });
    }
  );

  modal.append(form, closeButton, submitButton);
  return modal;
};

export const createEditModal = (todo) => {
  const modal = document.createElement("dialog");
  modal.classList.add("p-6", "rounded-lg", "shadow-xl", "space-x-20", "w-1/3");

  const form = createForm([
    {
      label: "Titulo",
      type: "text",
      name: "title",
      value: todo.title,
    },
    {
      label: "Completada",
      type: "checkbox",
      name: "isCompleted",
      checked: todo.isCompleted,
    },
  ]);

  const closeButton = createButton(
    "Cerrar",
    [
      "bg-red-500",
      "text-white",
      "px-4",
      "py-2",
      "rounded",
      "hover:bg-red-600",
      "mt-4",
    ],
    () => modal.close()
  );

  const submitButton = createButton(
    "Actualizar",
    [
      "bg-green-500",
      "text-white",
      "px-4",
      "py-2",
      "rounded",
      "hover:bg-green-600",
      "mt-4",
    ],
    () => {
      const title = form.title.value;
      const isCompleted = form.isCompleted.checked;

      EditTodo(todo.id, { title, isCompleted }).then(() => {
        window.location.reload();
      });
    }
  );

  modal.append(form, closeButton, submitButton);
  return modal;
};
