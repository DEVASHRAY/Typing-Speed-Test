import { interval } from "./StartTimer.js";

function GetData(event, preText) {
  let EnteredText = event.target.value;
  console.log("ENTERED TEXT", EnteredText);
  let CorrectText = preText;
  console.log("Correct Text", CorrectText);
  let TextToMatch = CorrectText.substring(0, EnteredText.length);
  console.log("TEXTtoMatch", TextToMatch);

  SpellChecker(EnteredText, CorrectText, TextToMatch);
}
let testWrapperColor = document.querySelector(".test-wrapper");
function SpellChecker(EnteredText, CorrectText, TextToMatch) {
  if (EnteredText == CorrectText) {
    testWrapperColor.style.borderColor = "green";
    clearInterval(interval);
  } else if (EnteredText == TextToMatch) {
    testWrapperColor.style.borderColor = "blue";
  } else {
    testWrapperColor.style.borderColor = "red";
  }
}

export default GetData;
