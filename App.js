import {
  RandomText,
  RandomizedText,
} from "./Components/RandomTextGenerator.js";
import {
  Timer,
  initialTime,
  ResetInitialTimeArray,
} from "./Components/Timer.js";
import {
  StartTimer,
  interval,
  ResetShouldTimerRun,
} from "./Components/StartTimer.js";
import GetData from "./Components/GetData.js";

/**-------------------------------------------------------------------------*/
var preText;
(function FirstTimeTextGenerator() {
  RandomText();
  preText = RandomizedText;
})();
/**-------------------------------------------------------------------------*/
const reset = document.querySelector("#reset");
reset.addEventListener("click", handleReset);

function handleReset() {
  RandomText();
  preText = "";
  console.log("reset", preText);
  preText = RandomizedText;
  console.log("updated", preText);
  clearInterval(interval);
  ResetInitialTimeArray([0, 0, 0, 0]);
  document.querySelector(".timer").innerText = "00:00:00";
  document.querySelector("#test-area").value = "";
  document.querySelector(".test-wrapper").style.borderColor = "grey";
  ResetShouldTimerRun(true);
}

/**-------------------------------------------------------------------------*/
const TextArea = document.querySelector("#test-area");
TextArea.addEventListener("keypress", (event) => {
  DetectFirstKeyPressed(event);
});

function DetectFirstKeyPressed(event) {
  StartTimer(event);
}
/**-------------------------------------------------------------------------*/
TextArea.addEventListener("keyup", (event) => {
  Check(event);
});
function Check(event) {
  GetData(event, preText);
}
/**-------------------------------------------------------------------------*/
