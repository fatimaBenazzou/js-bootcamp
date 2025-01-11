// 1. Select the necessary DOM elements:
//    - The left navigation button (`.left`).
//    - The right navigation button (`.right`).
//    - The container holding the images (`.images`).
//    - The container holding the colored backgrounds (`.colored-backgrounds`).

// 2. Initialize a variable `index` to keep track of the current position or slide. Start it at 0.

// 3. Create a function `right()` for navigating to the next slide:
//    - Increment the `index` by 1 if it's less than the maximum index (e.g., 3).
//    - Reset the `index` to 0 if it exceeds the maximum index.
//    - Call the `transform()` function to update the position of the elements.

// 4. Create a function `left()` for navigating to the previous slide:
//    - Decrement the `index` by 1 if it's greater than 0.
//    - Reset the `index` to the maximum index (e.g., 3) if it becomes negative.
//    - Call the `transform()` function to update the position of the elements.

// 5. Add event listeners to the navigation buttons:
//    - On clicking the left button, call the `left()` function.
//    - On clicking the right button, call the `right()` function.

// 6. Create a function `transform(index)` to update the position of the images and backgrounds:
//    - Use CSS `transform: translateX()` to shift the `.images` container based on the current `index`.
//    - Similarly, shift the `.colored-backgrounds` container using the same `index`.
//    - Each slide should be 100% of the container's width, so multiply the index by 100 for the translation.

// 7. Test your implementation:
//    - Ensure clicking the left button navigates to the previous slide.
//    - Ensure clicking the right button navigates to the next slide.
//    - Verify that the navigation loops correctly (right button from the last slide goes to the first, and vice versa).
