let minOne = document.getElementById('min-one');
let minTen = document.getElementById('min-ten');
let secOne = document.getElementById('sec-one');
let secTen = document.getElementById('sec-ten');
let alarm = document.getElementById('alarm');

/** can change the count
 * If want to change count larger than 9 minute, uncommad all the code
 */
let count = 180;
let intervalId;

let secondOne;
let secondTen;
let minuteOne;
let minuteTen;
updateText(count);

let secondONE;
let secondTEN;
let minuteONE;

function updateVaibleAnimation() {
  secondONE = secondOne === 0 ? 10 : secondTen;
  secondTEN = secondTen === 0 ? 6 : secondTen;
  minuteONE = minuteOne === 0 ? 10 : minuteOne;
  // minuteTEN = minuteTen === 0 ? 6 : minuteTen;
}
updateVaibleAnimation();

function startClick() {
  if (intervalId) return;
  intervalId = setInterval(() => {
    count--;
    updateVariable(count);
    animate(secondOne, secOne, 'animate-sec');
    if (secondTen !== secondTEN) {
      animate(secondTen, secTen, 'animate-sec');
      secondTEN = secondTen;
    }
    if (minuteOne !== minuteONE) {
      animate(minuteOne, minOne, 'animate-min');
      minuteONE = minuteOne;
    }
    // if (minuteTen !== minuteTEN) {
    //   animate(minuteTen, minTen, 'animate-min');
    //   minuteTEN = minuteTen;
    // }
    if (count === 0) {
      clearInterval(intervalId);
      intervalId = null;
      count = 180;
      alarm.play();
    }
    // updateText(count + 1); // don't need to update
  }, 1000);
}

function stopClick() {
  clearInterval(intervalId);
  intervalId = null;
  count = 180;
  setTimeout(() => {
    updateText(count);
    updateVaibleAnimation();
    console.log(secondTen, secondTEN);
  }, 1000);
}

function animate(number, container, aniclass) {
  let nextTime = document.createElement('div');
  nextTime.innerText = number;
  container.append(nextTime);
  container.classList.add(aniclass);

  setTimeout(() => {
    container.classList.remove(aniclass);
    container.removeChild(container.firstElementChild);
  }, 970);
}

function updateVariable(count) {
  const minute = Math.floor(count / 60);
  const second = count % 60;

  secondOne = second % 10;
  secondTen = Math.floor(second / 10);
  minuteOne = minute % 10;
  minuteTen = Math.floor(minute / 10);
  return [secondOne, secondTen, minuteOne, minuteTen];
}

function updateText(count) {
  const [secondOne, secondTen, minuteOne, minuteTen] = updateVariable(count);

  secOne.firstElementChild.innerHTML = secondOne;
  secTen.firstElementChild.innerHTML = secondTen;

  minOne.firstElementChild.innerHTML = minuteOne;
  minTen.firstElementChild.innerHTML = minuteTen;
}
