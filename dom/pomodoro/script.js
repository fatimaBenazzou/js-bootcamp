// Step 1: Define Variables
// - Create variables for session length and break length.
// - Create a variable for the timer interval.
// - Track the current time remaining and the current mode (Session or Break).

// Step 2: Select DOM Elements
// - Select and store references to elements for:
//   - Displaying session length, break length, timer, and current mode.
//   - Buttons to increment and decrement session and break lengths.
//   - Start, stop, and clear buttons.

// Step 3: Update Displays
// - Write a function to update the display of session length, break length, current mode, and timer.
//   - Use textContent to modify the content of the elements.

// Step 4: Adjust Session and Break Lengths
// - Add event listeners to increment and decrement buttons for session and break lengths:
//   - Increment or decrement the value by 1 when the corresponding button is clicked.
//   - Ensure the value does not go below 1 for session or break lengths.
//   - Call the update display function after each change.

// Step 5: Implement Timer Logic
// - Create a function `startTimer(duration)`:
//   - Use setInterval to count down from the given duration (in seconds).
//   - Update the timer display every second (convert seconds to MM:SS format).
//   - When the timer reaches 0, switch modes (Session to Break or vice versa).
//   - Restart the timer with the new mode's duration.
//   - Hint: Use Math.floor for minutes/seconds and clearInterval to stop the timer.

// Step 6: Start Button
// - Add an event listener to the start button:
//   - If the timer is not running, start it using startTimer.
//   - If the timer is paused, resume it from the current time remaining.

// Step 7: Stop Button
// - Add an event listener to the stop button:
//   - Use clearInterval to stop the timer.
//   - Keep the current time so the timer can resume later.

// Step 8: Clear Button
// - Add an event listener to the clear button:
//   - Stop the timer using clearInterval.
//   - Reset the session and break lengths to their default values.
//   - Reset the timer and mode to the initial state (Session mode).
//   - Call the display update function to reflect the reset values.

// Step 9: Display Timer in MM:SS Format
// - Format the timer display to show minutes and seconds in MM:SS format.
//   - Hint: Use String.padStart function to ensure two digits for both minutes and seconds.

// Step 10: Testing
// - Test the app to ensure the following:
//   - Session and break lengths update correctly.
//   - Timer starts, stops, and clears as expected.
//   - Timer switches between Session and Break modes correctly.
//   - Timer display shows the correct MM:SS format.

// Hint: Research setInterval, clearInterval, and Math.floor if you're unsure how they work.
