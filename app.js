const body = document.querySelector("body"),
        blueyTheme = body.querySelector(".bluey-theme"),
        purpleTheme = body.querySelector(".purple-theme"),
        navToggle = body.querySelector(".nav-toggle"),
        navBar = body.querySelector(".navbar"),
        openCloseNav = body.querySelector(".open-close");

blueyTheme.addEventListener("click", () => {
    body.classList.toggle("bluey");
});


navToggle.addEventListener("click", () => {
    navBar.classList.toggle('show');
});