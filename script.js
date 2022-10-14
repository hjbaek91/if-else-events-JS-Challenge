const body = document.querySelector("body");

const div = document.createElement("div");
div.innerText = "Hello!";
document.body.appendChild(div);

function handleResizeWidth() {
  let widthResize = window.innerWidth;
  const widthHigh = "width-high";
  const widthLow = "width-low";

  if (widthResize > 1200) {
    body.classList.add(widthHigh);
  } else if (widthResize < 600) {
    body.classList.add(widthLow);
  } else {
    body.classList.remove(widthHigh, widthLow);
  }
}

window.addEventListener("resize", handleResizeWidth);
