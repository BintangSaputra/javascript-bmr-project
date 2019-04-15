const resultBmr = () => {
  let kiloGram = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let age = document.getElementById("age").value;
  console.log(kiloGram);

  const valueBmr = 88.362 + 13.397 * kiloGram + 4.799 * height - 5.677 * age;
  return (document.getElementById("result").value = Math.round(valueBmr));
};

// console.log(Math.round(resultBmr(kiloGram, height, age)));

// const notActive = resultBmr * 1.2;
// const lightlyActive = resultBmr * 1.375;
// const active = resultBmr * 1.55;
// const veryActive = resultBmr * 1.725;

// const activity = `How active are you?
// 1: not active
// 2: lightly active
// 3: active
// 4: very active
// `;

// if (activity == 1) {
//   alert(notActive);
// } else if (activity == 2) {
//   alert(lightlyActive);
// } else if (activity == 3) {
//   alert(active);
// } else {
//   alert(veryActive);
// }

// console.log(Math.round(activity));
