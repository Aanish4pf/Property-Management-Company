document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenuToggle.addEventListener("click", function () {
        if (mobileMenu.style.display === "block") {
            mobileMenu.style.display = "none";
            mobileMenu.classList.remove("open"); // Remove the "open" class
        } else {
            mobileMenu.style.display = "block";
            mobileMenu.classList.add("open"); // Add the "open" class
        }
    });
});
