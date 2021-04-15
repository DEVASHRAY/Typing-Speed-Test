import { Timer } from "./Timer.js";

var interval;
var shouldTimerRun = true;
function StartTimer(event) {
  const EnteredTextLength = event.target.value.length;
  if (EnteredTextLength == 0 && shouldTimerRun) {
    shouldTimerRun = false;
    interval = setInterval(Timer, 10);
  }
}

export function ResetShouldTimerRun(value) {
  shouldTimerRun = value;
}

export { StartTimer, interval };
