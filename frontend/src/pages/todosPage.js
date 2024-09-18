import { createButton } from "../utils/createButton";
import { createTable } from "../utils/createTable";
import { createModal } from "../utils/modal.js";
import { fillTable } from "../utils/fillTable.js";

export const todosPage = () => {
  const main = document.createElement("main");
  main.classList.add(
    "bg-stone-400",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "min-h-screen",
    "bg-gray-200"
  );

  const container = document.createElement("div");
  container.classList.add(
    "flex",
    "flex-col",
    "w-full",
    "max-w-4xl",
    "p-6",
    "bg-stone-300",
    "rounded-lg",
    "shadow-lg"
  );

  const title = document.createElement("h1");
  title.classList.add("text-3xl", "font-bold", "mb-6", "text-center");
  title.textContent = "Lista de Tareas  ";

  const table = createTable([
    "ID",
    "Título",
    "Completada",
    "ID del Propietario",
    "Acciones",
  ]);
  const tbody = table.querySelector("tbody");

  const modal = createModal();
  const addTaskButton = createButton(
    "Agregar Tarea",
    [
      "bg-green-500",
      "text-white",
      "px-4",
      "py-2",
      "rounded",
      "hover:bg-green-600",
      "mb-4",
    ],
    () => modal.showModal()
  );

  container.append(title, addTaskButton, table, modal);
  main.appendChild(container);

  fillTable(tbody);

  return main;
};
