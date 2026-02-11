let username = null;
let displayName = username ?? "Guest";

console.log(displayName); // Guest
//?? ignores 0, false, "" — checks only null/undefined