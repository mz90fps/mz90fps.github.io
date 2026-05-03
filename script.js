// ===== MENU =====
function openMenu() {
    let menu = document.getElementById("sideMenu");
    let overlay = document.getElementById("overlay");

    menu.classList.add("open");
    overlay.style.display = "block";

    document.querySelector(".menu-icon").classList.add("hide");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    let menu = document.getElementById("sideMenu");
    let overlay = document.getElementById("overlay");

    menu.classList.remove("open");
    overlay.style.display = "none";

    document.querySelector(".menu-icon").classList.remove("hide");
    document.body.style.overflow = "auto";
}

// ===== DROPDOWN (FIXED) =====
function toggleDropdown(id) {
    let el = document.getElementById(id);

    if (!el) return;

    let isOpen = el.style.display === "block";

    // close all dropdowns first
    document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");

    if (!isOpen) {
        el.style.display = "block";
    }
}

// ===== SEARCH =====
function openSearch() {
    let bar = document.getElementById("searchBar");
    let closeBtn = document.getElementById("closeSearch");

    bar.style.display = "block";
    closeBtn.style.display = "block";

    document.querySelector(".menu-icon").classList.add("hide");
}

function closeSearch() {
    let bar = document.getElementById("searchBar");
    let closeBtn = document.getElementById("closeSearch");
    let input = document.getElementById("searchInput");

    bar.style.display = "none";
    closeBtn.style.display = "none";
    input.value = "";

    document.querySelector(".menu-icon").classList.remove("hide");
}
