let kiloGram = prompt("weight");
let height = prompt("height");
let age = prompt("age");

const resultBmr = 88.362 + 13.397 * kiloGram + 4.799 * height - 5.677 * age;

console.log(Math.round(resultBmr));

const notActive = resultBmr * 1.2;
const lightlyActive = resultBmr * 1.375;
const active = resultBmr * 1.55;
const veryActive = resultBmr * 1.725;

const activity = prompt(`How active are you?
1: not active
2: lightly active
3: active
4: very active
`);

if (activity == 1) {
  alert(notActive);
} else if (activity == 2) {
  alert(lightlyActive);
} else if (activity == 3) {
  alert(active);
} else {
  alert(veryActive);
}

console.log(Math.round(activity));
