/**It ensures a function runs only once in a given time interval, no matter how many times the event happens.

Used in:

Scroll event

Mouse move

Button spam prevention */
function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

function onScroll() {
  console.log("Scrolling...");
}

const throttledScroll = throttle(onScroll, 2000);

// Even if scroll happens 100 times,
// it runs only once every 2 seconds