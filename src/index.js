import { homeWork_1 } from "./HW1/homeWork_1";
import { homeWork_2 } from "./HW2/homeWork_2";
import { homeWork_3 } from "./HW3/homeWork_3";
import { homeWork_4 } from "./HW4/homeWork_4";

const hw_title = [
  "Домашнее задание №1 «Линейные алгоритмы»",
  "Домашнее задание №2 «Условия»",
  "Домашнее задание №3 «Циклы»",
  "Домашнее задание №4 «Объекты»",
  "",
  "",
  "",
  "",
  "",
  "",
];
let app = document.querySelector("#app");
let ol;
homeWork_1(0);
homeWork_2(1);
homeWork_3(2);
homeWork_4(3);

export function addTitle(num) {
  let title = document.createElement("h4");
  title.innerText = hw_title[num];
  app.append(title);
  ol = document.createElement("ol");
  app.append(ol);
}

export function writeResult(str) {
  console.log(str);
  const li = document.createElement("li");
  li.innerText = str;
  ol.append(li);
}
