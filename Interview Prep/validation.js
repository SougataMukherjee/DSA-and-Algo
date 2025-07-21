function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalid.email")); // false
