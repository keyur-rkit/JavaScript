
const str = "keyur@gmail.com"
const email = str.trim();
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
console.log(typeof emailPattern);
console.log(emailPattern.test(email));
