const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    if (menuBtn.textContent === "☰") {
        menuBtn.textContent = "✖";
    } else {
        menuBtn.textContent = "☰";
    }
});

function updateFooter() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;
}

updateFooter();
