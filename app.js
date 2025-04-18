const body = document.querySelector("body"),
        blueyTheme = body.querySelector(".bluey-theme"),
        purpleTheme = body.querySelector(".purple-theme");

blueyTheme.addEventListener("click", () => {
    body.classList.toggle("bluey");
});
