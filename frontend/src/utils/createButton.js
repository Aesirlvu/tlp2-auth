export const createButton = (text, clasess, onClick) => {
  const button = document.createElement("button");
  button.classList.add(...clasess);
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
};
