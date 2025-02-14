function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let newWidthAndHieght = 30;  
  for (let i = 0; i < amount; i++) {
    const newBoxEl = document.createElement("div");
    // const newWidthAndHieght = 30 + i * 10;
    boxesEl.append(newBoxEl);
    newBoxEl.style.width = `${newWidthAndHieght}px`;
    newBoxEl.style.height = `${newWidthAndHieght}px`;
    newWidthAndHieght += 10;
    newBoxEl.style.backgroundColor = getRandomHexColor();
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

const boxesEl = document.querySelector("#boxes");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const numbBtnEl = document.querySelector('[type="number"]');

createBtnEl.addEventListener("click", (evt) => {
  destroyBoxes();
  const amount = Number(numbBtnEl.value);
  if (amount < numbBtnEl.min || amount > numbBtnEl.max) {
    // alert(`Число має бути від ${numbBtnEl.min} до ${numbBtnEl.max}`);    
    return numbBtnEl.value = "";
  }
  createBoxes(numbBtnEl.value);
  numbBtnEl.value = "";
});

destroyBtnEl.addEventListener("click", (evt) => destroyBoxes());
