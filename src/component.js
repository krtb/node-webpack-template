export default (text = "Hello, Components!") => {
    const element = document.createElement("h1");
  
    element.innerHTML = text;
  
    return element;
  };