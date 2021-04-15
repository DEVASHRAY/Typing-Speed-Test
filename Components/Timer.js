function LeadingZeros(initialTimer) {
  if (initialTimer <= 9) {
    initialTimer = "0" + initialTimer;
  }
  return initialTimer;
}

const timer = document.querySelector(".timer");
var initialTime = [0, 0, 0, 0];
initialTime[3] = 0;

export function ResetInitialTimeArray(value) {
  initialTime = value;
}
function Timer() {
  let TimeFormat =
    LeadingZeros(initialTime[0]) +
    ":" +
    LeadingZeros(initialTime[1]) +
    ":" +
    LeadingZeros(initialTime[2]);

  initialTime[3]++;
  initialTime[0] = Math.floor(initialTime[3] / 100 / 60);
  initialTime[1] = Math.floor(initialTime[3] / 100 - initialTime[0] * 60);
  initialTime[2] = Math.floor(
    initialTime[3] - initialTime[1] * 100 - initialTime[0] * 6000
  );

  timer.innerText = TimeFormat;
}
export { initialTime, Timer };
