"use strict";
const Color = {
  RED: "RED",
  GREEN: "GREEN",
  BLUE: "BLUE",
  sayHi() {
    console.log("hi");
  },
};

console.log(Color.hasOwnProperty("RED"));
console.log(Color instanceof Object);
console.log(Color.toString());
const myObj = Object.entries(Color).forEach(function (val) {
  console.log(val);
});
const colorEntries = Object.entries(Color).filter(
  ([key, value]) => typeof value !== "function"
);
console.log(myObj, colorEntries);
const obj = Object.fromEntries(colorEntries); //Convert key-value pairs back to an object
console.log(obj);
Object.seal(Color); //Prevents adding/removing properties, but allows modifying existing ones
console.log(Object.isSealed(Color));
Object.freeze(Color); //Prevents all changes (add/remove/modify)
console.log(Object.isFrozen(Color));
const ModifiedColor = Object.freeze({
  ...Color,
  RED: "MODIFIED_RED",
});
console.log(ModifiedColor);
console.log(Object.assign({}, ModifiedColor, { PINK: "PINK" }));
for (let key in Color) {
  console.log(key, Color[key]);
}

("use strict");
const tasks = [
  { id: 1, plan: "free", done: false },
  { id: 2, plan: "premium", done: true },
  { id: 3, plan: "premium", done: false },
];
const newTasks = [
  [{ id: 4, plan: "free" }],
  [
    { id: 5, plan: "premium" },
    { id: 6, plan: "premium" },
  ],
];
const premiumPlan = tasks.find((task) => task.plan === "premium"); //Find first premium user
const purchaseDone = tasks.findIndex((task) => task.done); //index of first completed task
const hasPremiumTasks = tasks.some((task) => task.plan === "premium"); //if ANY premium tasks exist
const hasCompletedTasks = tasks.some((task) => task.done); //if ANY tasks are done
const allFree = tasks.every((task) => task.plan === "free"); //if all task free plan
const incompleteTasks = tasks.filter((task) => !task.done); //get all incomplete task
const allTasks = tasks.concat(newTasks);
const flatTasks = allTasks.flat();
const sliceThree = flatTasks.slice(0, 3);
console.log(
  premiumPlan,
  purchaseDone,
  hasPremiumTasks,
  hasCompletedTasks,
  allFree,
  incompleteTasks,
  flatTasks,
  sliceThree
);
for (const task of flatTasks) {
  console.log(`ID: ${task.id}, Plan: ${task.plan}`);
}
