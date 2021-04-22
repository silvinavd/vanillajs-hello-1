/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var suit = ["♦", "♥", " ♠", "♣"];
  var number = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomsuit = Math.floor(Math.random() * suit.length);
  let randomnumber = Math.floor(Math.random() * number.length);

  console.log(suit[randomsuit] + number[randomnumber]);
};
