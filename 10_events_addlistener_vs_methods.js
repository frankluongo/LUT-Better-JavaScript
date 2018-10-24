// Generate random color
// // RGB 0-255
// Apply to dom
// update color on event

const generateColorValue = () => Math.floor(Math.random() * 256);
const button = document.querySelector('#new-colors');

const createColor = () => {
  const red = generateColorValue();
  const green = generateColorValue();
  const blue = generateColorValue();
  return `rgb(${red}, ${green}, ${blue})`;
};

const applyColorToBody = color => {
  return (document.body.style.backgroundColor = color);
};

const addRandomColorToBg = () => {
  const color = createColor();
  return applyColorToBody(color);
};

addRandomColorToBg();

// OnClick allows you to attach one event to an element
// button.onclick = () => addRandomColorToBg();

// Add Event Listener allows you to attach an event to an element
// - you can attach multiple events
button.addEventListener('click', addRandomColorToBg);
button.addEventListener('mouseover', (event) => {
  event.target.style.transform = `scale(2)`;
});
button.addEventListener('mouseleave', (event) => {
  event.target.style.transform = `scale(1)`;
});
