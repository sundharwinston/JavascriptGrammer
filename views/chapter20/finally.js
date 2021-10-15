
// Define the Promise
let task = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise has been rejected!");
  }, 2000);
});

  
task
  .then((data) => {
      console.log(data);
    }
  )
  .catch((error) => {
      console.log("Error:", error);
    })
  .finally(() => {
    console.log(
      "finally block executed..!"
    );
  });