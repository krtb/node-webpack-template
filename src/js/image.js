import image from "../images/marioTada.png";

export default () => {
  const element = document.createElement("img");
  element.src = image;

  return element;
};