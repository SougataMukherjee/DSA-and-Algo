const object = {
  name: "Sam",
  age: 30,
  address: {
    streetName: "subhaspally",
    city: "Asansol",
  },
};

const newObject = {
  ...object,
  address: {
    ...object.address,
    streetName: "Bansankari",
    city: "Bangalore",
  },
};
console.log(object, newObject);
