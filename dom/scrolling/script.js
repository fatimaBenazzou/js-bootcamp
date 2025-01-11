// Step 1: Select Elements
// - Select the following elements from the DOM:
//   - Two mountain elements.
//   - Two cloud elements that also move horizontally.
//   - A text element that moves vertically.
//   - A "man" element whose height will dynamically change.

// Step 2: Add a Scroll Event Listener
// - Listen for the `scroll` event on the `window` object to detect user scrolling.

// Step 3: Retrieve Scroll Value
// - Inside the event listener, get the current vertical scroll position.
// Search for `scrollY` property.

// Step 4: Update Element Styles
// - Modify the styles of each selected element based on the scroll position:
//   - Move the two mountains horizontally.
//   - Move the two clouds horizontally, multiplying the scroll value for faster movement.
//   - Adjust the bottom position of the text to create a vertical movement effect.
//   - Dynamically adjust the height of the "man" element to shrink as the user scrolls.

// Step 5: Use Formulas for Movement
// - Use simple arithmetic formulas to calculate the new positions:
//   - Divide or multiply the scroll value for different speeds and directions of movement.
//   - Example: For horizontal movement to the left, use a negative value (e.g., `-scrollY`).

// Hint: Experiment with different speeds by adjusting the multiplication/division factors in the formulas.

// Step 6: Test the Code
// - Scroll the page to verify the following:
//   - Mountains move horizontally in opposite directions.
//   - Clouds move horizontally at a faster speed.
//   - Text moves downward as you scroll.
//   - The height of the "man" element decreases smoothly with scrolling.
