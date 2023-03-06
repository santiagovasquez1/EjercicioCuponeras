const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear" || item.id =="continue" || item.id =="cancel") {
      display.innerText = "";
    } else if (item.id == "undo") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else {
      display.innerText += item.id;
    }
  };
});