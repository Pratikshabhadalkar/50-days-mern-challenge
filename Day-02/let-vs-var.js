// Async behavior with let vs var

console.log("Using var:");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

setTimeout(() => {
  console.log("Using let:");
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}, 2000);
