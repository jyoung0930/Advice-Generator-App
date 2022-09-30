const quoteText = document.querySelector(".quote-text");
const adviceNumber = document.querySelector(".advice-number");
const URL = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const res = await fetch(URL);
  const data = await res.json();
  const advice = data.slip.advice;
  const adviceID = data.slip.id;
  quoteText.textContent = advice;
  adviceNumber.textContent = adviceID;
}

export default getAdvice;
