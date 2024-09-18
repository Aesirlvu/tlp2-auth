export const createForm = (inputs) => {
  const $form = document.createElement("form");

  $form.classList.add(
    "w-full",
    "bg-gray-100",
    "shadow-md",
    "p-6",
    "flex",
    "flex-col",
    "gap-5"
  );

  inputs.forEach((input) => {
    const label = document.createElement("label");
    label.classList.add("text-sm", "font-bold");
    label.textContent = input.label;

    const inputElement = document.createElement("input");
    inputElement.classList.add(
      "bg-stone-100",
      "border",
      "border-gray-300",
      "rounded",
      "p-2",
      "focus:outline-none"
    );
    inputElement.type = input.type;
    inputElement.name = input.name;

    label.appendChild(inputElement);
    $form.appendChild(label);
  });

  return $form;
};
