// Task: При натисканні на кнопку:

// Отримати заголовок першого рівня
//   і встановити для нього інший колір тла.
// * Виставити для заголовків другого рівня розмір шрифта 20px і їх колір.

// Встановити src i alt, розміри для головного зображення.
// * Встановити src i alt, розміри для зображень в кожному атіклі.

// 1 Отримати посилання на кнопку
// 2 Задати функцію обробник і навісити її
//   як обробник події на click
// 3 Прописати функціонал цього обробника
//   Отримати посилання на h1
//   встановити для h1 колір тла
//   ...
const eventBtn = document.querySelector("button");
const h1 = document.querySelector("h1");
// const h2 = document.querySelectorAll("h2");
const someImg = document.querySelector(".mainImg");

function eventHandler(event) {
  h1.style.backgroundColor = "green";

  someImg.src =
    "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg";
  someImg.alt = "cat";
}

eventBtn.onclick = eventHandler;
