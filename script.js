const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const newText = document.querySelector(".new-text");

const Texts = [
  "Stay Hungry. Stay Foolish - Steve Jobs",
  "Good Artists Copy, Great Artists Steal - Pablo Picasso",
  "Argue with idiots, and you become an idiot - Paul Graham",
  "Be yourself; everyone else is already taken - Oscar Wilde",
  "Simplicity is the ultimate sophistication - Leonardo Da Vinci",
  "Stupidity, outrage, vanity, cruelty, iniquity, bad faith, falsehood - we fail to see the whole array when it is facing in the same direction we - Jean Rostand ",
  "Bringing solar as a renewable energy resource for those who are not able to install solar panels on their roofs allows more communities to benefit from a solar array - Jeff Van Drew",
  "The Internet has given us 10 or 15 new styles of communication: long messages like blogging, and then short messages like texting and tweeting. I see it all as part of an expanding array of linguistic possibilities - David Crystal",
  "You have a wide array of people that are watching something, and you cannot please everyone at the same time. Half the people will love it; half the people will hate it. Half the people won't see it - David A. R. White",
];

/** Function to randomize the text shown */
(function randomize() {
  let random = Math.floor(Math.random() * Texts.length);
  newText.innerHTML = Texts[random];
})();

/** Function Runs The Time */

var timer = [0, 0, 0, 0];
timer[3] = 0;
function runTheTimer() {
  theTimer.innerHTML =
    leadingZeros(timer[0]) +
    ":" +
    leadingZeros(timer[1]) +
    ":" +
    leadingZeros(timer[2]);
  timer[3]++;
  timer[0] = Math.floor(timer[3] / 100 / 60);
  timer[1] = Math.floor(timer[3] / 100 - timer[0] * 60);
  timer[2] = Math.floor(timer[3] - timer[1] * 100 - timer[0] * 6000);
}

/** Function put 0's infront of the single digit no in timer*/
function leadingZeros(x) {
  if (x <= 9) {
    x = "0" + x;
  }
  return x;
}

/**Function to run the timer when first key on keyboard get pressed */
var interval;
var timeRunning = false;
function DetectFirstKeyPressed() {
  let EnteredTextLength = testArea.value.length;
  if (EnteredTextLength == 0 && timeRunning == false) {
    interval = setInterval(runTheTimer, 10);
    timeRunning = true;
  }
}

/**Function check for the Entered String with the pre-written String */
function check() {
  let preText = document.querySelector(".new-text").innerHTML;
  let EnteredText = testArea.value;
  let TextMatch = preText.substring(0, EnteredText.length);
  if (EnteredText == preText) {
    testWrapper.style.borderColor = "green";
    clearInterval(interval);
  } else if (EnteredText == TextMatch) {
    testWrapper.style.borderColor = "blue";
  } else {
    testWrapper.style.borderColor = "red";
  }
}

/**function to reset timer,pre-text and EnteredText */
function reset() {
  testArea.value = "";
  clearInterval(interval);
  timer = [0, 0, 0, 0];
  theTimer.innerHTML = "00:00:00";
  interval = null;
  testWrapper.style.borderColor = "grey";
  timeRunning = false;
  let random = Math.floor(Math.random() * Texts.length);
  newText.innerHTML = Texts[random];
}
/**Add EventListeners To Elements */
testArea.addEventListener("keypress", DetectFirstKeyPressed);
testArea.addEventListener("keyup", check);
resetButton.addEventListener("click", reset);
