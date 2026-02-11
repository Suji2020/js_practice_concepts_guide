//create a promise
const getData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 1000);
});

//consume the promise
getData.then(result => {
  console.log(result);
});

/*async / await (BEST way ❤️)

async/await is just syntactic sugar over promises
Looks synchronous, works async.*/