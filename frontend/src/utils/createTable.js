export const createTable = (headers) => {
  const table = document.createElement("table");
  table.classList.add(
    "w-full",
    "border-collapse",
    "border",
    "border-gray-300",
    "rounded-lg",
    "overflow-hidden"
  );

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  headers.forEach((header) => {
    const th = document.createElement("th");
    th.classList.add(
      "border",
      "border-gray-300",
      "px-5",
      "py-2",
      "bg-gray-400"
    );
    th.textContent = header;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  const tbody = document.createElement("tbody");
  table.append(thead, tbody);

  return table;
};
