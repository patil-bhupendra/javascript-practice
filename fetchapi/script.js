fetch("https://jsonplaceholder.typicode.com/users")
  .then((raw) => raw.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));