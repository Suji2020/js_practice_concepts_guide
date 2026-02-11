console.log("Start");

async function fetchData() {
  try {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("User data loaded");
      }, 1000);
    });

    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();

console.log("End");