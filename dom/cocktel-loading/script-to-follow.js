// Step 1: Declare two variables: one for the worker (interval ID) and one for the loading percentage.
// Example: let worker = null; let loaded = 0;

// Step 2: Write a function called `increment` that performs the following tasks:
//  - Update the content of an element with the ID 'counter' to show the loading percentage (loaded + '%').
//  - Adjust the `top` style property of the element with the ID 'drink' based on the loading percentage.
//  - Check if `loaded` equals 25, 50, or 75, and fade in the respective child divs of the element with the ID 'cubes'.
//  - When `loaded` equals 100:
//     - Fade in elements with the IDs 'lemon' and 'straw'.
//     - Reset `loaded` to 0.
//     - Stop the loading animation.
//     - Restart the loading animation after 1 second using `setTimeout`.
//  - Increment `loaded` for every call of this function.

// Step 3: Write a function called `startLoading` that performs the following tasks:
//  - Hide the elements with IDs 'lemon' and 'straw' (set their `display` style to 'none').
//  - Hide all child divs of the element with the ID 'cubes'.
//  - Start the loading animation by calling `setInterval` with the `increment` function and a delay of 30ms.

// Step 4: Write a function called `stopLoading` that stops the interval using `clearInterval` and the `worker` variable.

// Step 5: Write a helper function called `fadeIn` that mimics the fade-in effect:
//  - Accept two parameters: `element` (the DOM element to fade in) and `duration` (time in milliseconds).
//  - Set the `opacity` of the element to 0 and its `display` style to 'block'.
//  - Gradually increase the `opacity` using `requestAnimationFrame` over the specified duration.

// Step 6: At the end of the script, call `startLoading()` to initiate the loading process when the script runs.
