import getAdvice from "./fetch.js";
const button = document.querySelector("button");

// Get advice on initial load
getAdvice();
// Update advice on every click of the button
button.addEventListener("click", getAdvice);
