export function MsToHuman(ms) {
  //No Hours
  const centiseconds = Math.floor((ms / 10) % 100);
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60));
  //const hours = Math.floor(ms / 1000 / 60 / 60);

  const humanized_noCs = [
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2)
  ].join(':');

  const humanized = [
    //pad(hours.toString(), 2),
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2),
    pad(centiseconds.toString(), 2),
  ].join(':');

  return (minutes>0 ? humanized_noCs: humanized);
}

export function GetEndTime(runTime, startTime) {
  const msToAdd = runTime * 60 *1000;

  return msToAdd + startTime;
}

  function pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  }
