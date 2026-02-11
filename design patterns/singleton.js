/**The Singleton Pattern ensures that:

Only one instance of an object exists.

All parts of the app use the same instance.

Useful for:

Database connections

Config settings

Logger */
const Singleton = (function () {
  let instance;

  function createInstance() {
    return { name: "Only Instance" };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2); // true
/**Both obj1 and obj2 refer to the same instance. 
 * prevents creating multiple instances.
*/
