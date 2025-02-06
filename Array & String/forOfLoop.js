const users = [
  { name: "Alex", age: 13 },
  { name: "Bob", age: 50 },
];
for (const { name, age } of users) {
  console.log(name, age);
}

//v2)
const users2 = {
  user1: { name: "Alex", age: 13 },
  user2: { name: "Bob", age: 50 },
};
for (const { name, age } of Object.values(users2)) {
  console.log(name, age);
}

//v3)
const users3 = {
  Alex: 13,
  Bob: 50,
};
for (const [name, age] of Object.entries(users3)) {
  console.log(name, age);
}

//v4)
const users4 = [
  ["Alex", 13],
  ["Bob", 50],
];
for (const [name, age] of users4) {
  console.log(name, age);
}

//v5)
const users5 = ["Alex", "Bob"];
for (const name of users5) {
  console.log(name);
}

//v6)
const users6 = {
  1: <h1>Alex</h1>,
  2: <h1>Bob</h1>,
};

Object.keys(users6).map((key) => <div key={key}>{users[key]}</div>);

//v7)
const users7 = [
  { name: "Alex", age: 13 },
  { name: "Bob", age: 50 },
];

const onlyAge = users7.map((usr) => {
  if (typeof usr === "object") {
    return usr.age;
  }
  return null;
});

console.log(onlyAge); // [13, 50]
