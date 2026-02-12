function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function search(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounce(search, 1000);

// Example usage:
debouncedSearch("S");
debouncedSearch("Su");
debouncedSearch("Suji"); 
// Only "Suji" runs after 1 second