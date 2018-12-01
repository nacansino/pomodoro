export function MillisecondsToHuman(ms) {
  //No Hours
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  //const hours = Math.floor(ms / 1000 / 60 / 60);

  const humanized = [
    //pad(hours.toString(), 2),
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2),
  ].join(':');

  return humanized;
}

export function GetEndTime(runTime, startTime) {
  const msToAdd = runTime * 60 *1000;

  return msToAdd + startTime;
}
  export function renderElapsedString(elapsed, runningSince) {
    let totalElapsed = elapsed;
    if (runningSince) {
      totalElapsed += Date.now() - runningSince;
    }
    return MillisecondsToHuman(totalElapsed);
  }

  function pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  }
