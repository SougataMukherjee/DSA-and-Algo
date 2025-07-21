//type 0:
class MyComponent {
  constructor(state, { dispatch }) {
    this.state = state;
    this.dispatch = dispatch;
  }

  triggerAction() {
    console.log("state:", this.state);
    this.dispatch();
  }
}

const instance = new MyComponent(
  { count: 42 },
  {
    dispatch: () => {
      console.log("Dispatch called!");
    },
  }
);
instance.triggerAction();

//type 1:
class Calculator {
  constructor() {
    this.value = 0;
  }
  add(val) {
    this.value += val;
    return this;
  }
  multiply(val) {
    this.value *= val;
    return this;
  }
}
const calculator = new Calculator();
const compute = calculator.add.bind(calculator);
console.log(compute(5).multiply(2));

const result = new Calculator().add(5).multiply(2);
console.log(result);

//type 2:
class User {
  #privateId;
  constructor(name, id) {
    this.name = name;
    this.#privateId = id;
  }
  getParentId() {
    return this.#privateId;
  }
}

class ShoppingCart extends User {
  #cartItems = [];
  constructor(name, id) {
    super(name, id);
  }
  addItem(productId, quantity = 1) {
    const existingItem = this.#cartItems.find((item) => item.id === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.#cartItems.push({ id: productId, quantity });
    }
    this.#logCart();
  }

  removeItem(productId) {
    this.#cartItems = this.#cartItems.filter((item) => item.id !== productId);
    this.#logCart();
  }

  updateQuantity(productId, newQuantity) {
    const item = this.#cartItems.find((item) => item.id === productId);
    if (item) {
      item.quantity = newQuantity;
      this.#logCart();
    } else {
      console.log("Item not found in cart");
    }
  }

  #logCart() {
    console.log(`User ${this.getParentId()}'s Cart:`);
    console.table(this.#cartItems);
  }
}

const userCart = new ShoppingCart("Sam", "user123");
userCart.addItem("prod1", 2);
userCart.addItem("prod2");
userCart.addItem("prod1");
userCart.updateQuantity("prod2", 5);
userCart.removeItem("prod1");
