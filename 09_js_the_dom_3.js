// Generate random color
// - Use RGB, values 0-255
// Apply that to DOM
// Update Color on event

const RGB_VALUE_LIMIT = 256;
const element = document.body;

const generateColorValue = () => Math.floor(Math.random() * RGB_VALUE_LIMIT);
const createColor = () => {
  const red = generateColorValue();
  const blue = generateColorValue();
  const green = generateColorValue();
  return `rgb(${red}, ${green}, ${blue})`;
}

const addRandomColorToBackground = () => {
  const color = createColor();
  return applyColorToBody(color)
}

const applyColorToBody = color => element.style.backgroundColor = color;

addRandomColorToBackground();
