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

/**What is Debouncing?

It ensures a function runs only after a certain time has passed since the last event.

Used in:

Search input

Resize events

Auto-save

Without debounce → API runs on every key press ❌
With debounce → API runs after user stops typing ✅
When you want to wait until the user stops doing something.*/