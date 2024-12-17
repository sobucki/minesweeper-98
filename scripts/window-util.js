const windowElement = document.querySelector(".window");
const toolbarElement = windowElement.querySelector(".title-bar");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

toolbarElement.addEventListener("mousedown", (event) => {
  isDragging = true;
  offsetX = event.clientX - windowElement.offsetLeft;
  offsetY = event.clientY - windowElement.offsetTop;

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

function onMouseMove(event) {
  if (isDragging) {
    const left = event.clientX - offsetX;
    const top = event.clientY - offsetY;

    windowElement.style.left = `${left}px`;
    windowElement.style.top = `${top}px`;
  }
}

function onMouseUp() {
  isDragging = false;
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

function centerWindow() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const elementWidth = windowElement.offsetWidth;
  const elementHeight = windowElement.offsetHeight;

  const left = (windowWidth - elementWidth) / 2;
  const top = (windowHeight - elementHeight) / 2;

  windowElement.style.left = `${left}px`;
  windowElement.style.top = `${top}px`;
}

window.addEventListener("load", centerWindow);
