document.addEventListener("DOMContentLoaded", function () {
    // Toggle Mobile Menu
    const nav = document.querySelector("nav ul");
    const toggleButton = document.createElement("div");
    toggleButton.innerHTML = "&#9776;"; // Hamburger icon
    toggleButton.style.fontSize = "30px";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.display = "none"; // Hidden by default

    document.querySelector("nav").prepend(toggleButton);

    toggleButton.addEventListener("click", function () {
        nav.classList.toggle("show");
    });

    // Show toggle button only on small screens
    function checkScreenSize() {
        if (window.innerWidth <= 666) {
            toggleButton.style.display = "block";
            nav.style.display = "none";
        } else {
            toggleButton.style.display = "none";
            nav.style.display = "block";
        }
    }

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    // Smooth Scroll Effect
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Download Button Alert
    document.querySelector(".btn button").addEventListener("click", function () {
        alert("Download will start soon!");
    });

    // Upgrade Button Animation
    const upgradeButton = document.querySelector("#premium button");
    upgradeButton.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "0.3s ease-in-out";
    });
    upgradeButton.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});
