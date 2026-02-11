try {
  let result = JSON.parse("invalid json");
  console.log(result);
} catch (error) {
  console.error("Something went wrong:", error.message);
}