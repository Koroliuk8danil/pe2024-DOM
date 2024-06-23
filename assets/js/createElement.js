"use strict";

const newsItem = {
  title: "News Title",
  body: "News Body News Body  News Body  News Body  News Body",
  date: "2024-05-10",
};

const sectionEl = document.querySelector(".section");

const articleEl = document.createElement("article");
section.append(articleEl);

const h3El = document.createElement("h3", newsItem.title);
const pEl = document.createElement("p", newsItem.body);
const dateEl = createNewElement("p", newsItem.date);

articleEl.append(h3El, pEl);

function createElement(type, content) {
  const newElement = document.createElement(type);
  newsElement.textContent = content;
  return newElement;
}
