let kiloGram = document.getElementById("weight");
let height = document.getElementById("height");
let age = document.getElementById("age");
console.log(kiloGram);
const resultBmr = () => {
  const valueBmr =
    88.362 + 13.397 * kiloGram.value + 4.799 * height.value - 5.677 * age.value;
  document.getElementById("result").value = Math.round(valueBmr);
  return Math.round(valueBmr);
};
const activityBMR = () => {
  // const notActive = document.getElementById("act1");
  let activity = 0;

  const selectedActivity = document.querySelector("#activities").value;

  if (selectedActivity == "notActive") {
    activity = resultBmr() * 1.2;
  }
  if (selectedActivity == "lightlyActive") {
    activity = resultBmr() * 1.375;
  }
  if (selectedActivity == "Active") {
    activity = resultBmr() * 1.55;
  }
  if (selectedActivity == "veryActive") {
    activity = resultBmr() * 1.725;
  }

  return (document.getElementById("resultActivity").value = Math.round(
    activity
  ));
};

// const activityBMRResult = () => {
//   const valueNotActive = resultBmr * 1.2;
//   const valueLightlyActive = resultBmr * 1.375;
//   const valueActive = resultBmr * 1.55;
//   const valueVeryActive = resultBmr * 1.725;
//   return (document.getElementById("resultActivity").value = Math.round(
//     activityBMRResult
//   ));
// };
