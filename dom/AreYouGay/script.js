document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("No");

    noButton.addEventListener("mouseover", () => {
        const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);

        noButton.style.position = "fixed";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
    const yesButton = document.getElementById("Yes");

    yesButton.addEventListener("click", () => {
        alert("I knew it");
    });
});
