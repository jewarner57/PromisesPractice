/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 *    - Step 1, Step 3, Step 2. Because step 1, step 3 will be logged immediately and
 *    - will not wait for the snooze function to complete
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 *    - Step 1, Step 3, Step 2
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 *    - The steps will still be printed 1, 3, 2 because the snooze function
 *    - still must run before step 2 can be printed.
 *    - They ran 1, 3, 2. Yes
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
  setTimeout(function () {
    action();
  }, 0);
}
console.log('Step 1');

snooze(function () {
  console.log('Step 2');
  console.log("Async Action completed via callback");
});

console.log('Step 3');

