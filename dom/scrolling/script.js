// Step 1: Select Elements
// - Select the following elements from the DOM:
//   - Two mountain elements.
//   - Two cloud elements that also move horizontally.
//   - A text element that moves vertically.
//   - A "man" element whose height will dynamically change.
const mountainLeft = document.querySelector("#mountain_left");
const mountainRight = document.querySelector("#mountain_right");
const cloud1 = document.querySelector("#clouds_1");
const cloud2 = document.querySelector("#clouds_2");
const text = document.querySelector("#text");
const man = document.querySelector("#man");

// Step 2: Add a Scroll Event Listener
// - Listen for the `scroll` event on the `window` object to detect user scrolling.
window.addEventListener("scroll", () => {
    // Step 3: Retrieve Scroll Value
    // - Inside the event listener, get the current vertical scroll position.
    // Search for `scrollY` property.
    let value = window.scrollY;

    mountainLeft.style.left = `-${value / 0.7}px`;
    mountainRight.style.left = `${value / 0.7}px`;
    cloud1.style.left = `${value * 2}px`;
    cloud2.style.left = `-${value * 2}px`;
    text.style.bottom = `-${value}px`;
    man.style.height = `${window.innerHeight - value}px`;
});

// Step 6: Test the Code
// - Scroll the page to verify the following:
//   - Mountains move horizontally in opposite directions.
//   - Clouds move horizontally at a faster speed.
//   - Text moves downward as you scroll.
//   - The height of the "man" element decreases smoothly with scrolling.
