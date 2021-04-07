/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. What will be printed to the console when
 *    it runs? Run the code using `node challenge2.js` and verify that your
 *    expectation was correct.
 * 
 *    - Hello there, Ducky
 *    - MAKE SCHOOL IS AWESOME!!!
 * 
 *    - Yes, this is what it logged out.
 * 
 * 2. What happens if greet() fails? Make it fail by changing 'name' to a number
 *    instead of a string. What happens? Does uppercaser() still run?
 * 
 *    - Uppercaser does not run. Recieved an error! is logged
 * 
 * 3. What happens if greet() succeeds and uppercaser() fails? Modify your code
 *    to achieve this result by changing the values of 'name' and 'my_str' and
 *    run the code again.
 * 
 *    - Greet runs but uppercaser prints an error
 * 
 * 4. Write a method that takes a string as input and returns the input string
 *    with a space added between each character. E.g. 'foo' -> 'f o o'
 * 
 *    Name this method spacer(str). It should run asynchronously, so use a 
 *    setTimeout() and return a Promise.
 * 
 *    Last, call spacer() after you call greeter() and uppercaser().
 * 
 *    Make sure you only have one catch() block. If you have more than one,
 *    refactor your code so that you only have one. 
 * 
 *    - Done
 * 
 *******************************************************************************
 */


/**
* Asynchronously returns a string with a space in between each character
* @param str The string to be spaced
*/
function spacer(str) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof str === 'string') {
        strArr = str.split("")
        newStr = strArr.join(" ")
        resolve(newStr)
      }
      else {
        reject("str must be a string")
      }
    }, 1000)
  })
}

/**
 * Asynchronously returns a greeting for a specified name.
 * @param name_str The name of the person to greet.
 */
function greet(name_str) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof name_str === 'string') {
        resolve('Hello there, ' + name_str);
      } else {
        reject('Name must be a string!');
      }
    }, 1000);
  });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof str === 'string') {
        resolve(str.toUpperCase());
      } else {
        reject('Argument to uppercaser must be string');
      }
    }, 1500);
  });
}

let name_str = "Ducky"
let my_str = "Make School Is Awesome!!!"

greet(name_str)
  .then((greetResult) => {
    console.log(greetResult)
    return uppercaser(my_str);
  })
  .then((uppercaserResult) => {
    console.log(uppercaserResult)
    return spacer(my_str)
  })
  .then((spacerResult) => {
    console.log(spacerResult)
  })
  .catch((err) => {
    console.log('Received an error!')
    console.log(err);
  });
