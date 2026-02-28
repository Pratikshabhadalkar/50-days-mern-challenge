// Safe User Logger (Async + Scope Safe)

/*
Problem Statement:
You have a list of users.
Log each user name after 1 second without mixing values.
*/

const users = ["A", "B", "C"];

for (let i = 0; i < users.length; i++) {
  setTimeout(() => {
    console.log(users[i]);
  }, i * 1000);
}

/*
Why this works:
- let is block scoped
- Each loop iteration has its own variable
- Async callbacks get correct values
- Delay increases, but values stay correct
*/