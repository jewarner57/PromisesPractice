/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the `greetAndUppercase` function. This function uses
 *    Async/Await. How is this function different than a regular (non-async)
 *    function? What is its return type?
 * 
 *    - The async function is run differently because it stops at each await
 *    - block and waits for it to return a promise before moving on
 *    - It returns a promise
 * 
 * 2. Uncomment block #1 and run the code using `node challenge3.js`. What is
 *    printed when we use `greetAndUppercase` like a regular function?
 * 
 *    - It returns an unresolved promise
 * 
 * 3. Uncomment block #2 and run the code again. What happens now?
 * 
 *    - It prints HELLO THERE, DUCKY
 * 
 * 4. Write an asynchronous method 'spacer' that takes a string as input and 
 *    returns the input string with a space added between each character. You 
 *    can use your solution from Part 3.
 * 
 *    Call 'spacer' in the `greetAndUppercase` method and run your code again.
 *    You should see something like:
 * 
 *    'H E L L O   T H E R E ,   D U C K Y'
 * 
 *    - Done
 * 
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
 * @param name The name of the person to greet.
 */
function greet(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof name === 'string') {
        resolve('Hello there, ' + name);
      } else {
        reject('Name must be a string!');
      }
    }, 500);
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
    }, 500);
  });
}

async function greetAndUppercase(name) {
  greeting = await greet(name)
  uppercasedGreeting = await uppercaser(greeting)
  spacerString = spacer(uppercasedGreeting)
  return spacerString
}

/* Uncomment me! #1 */
result = greetAndUppercase('Ducky')
console.log(result)

/* Uncomment me! #2 */
greetAndUppercase('Ducky')
  .then(function (result) {
    console.log(result)
  })
  .catch(function (err) {
    console.log(err)
  })