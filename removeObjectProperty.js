let obj = {
  name: "Sam",
  age: 30,
  city: "Bangalore",
};

delete obj.age; //delete obj['age'];

console.log(obj); // { name: 'Sam', city: 'Bangalore' }
