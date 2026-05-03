// ===== MENU =====
function openMenu() {
    let menu = document.getElementById("sideMenu");
    let overlay = document.getElementById("overlay");

    menu.classList.add("open");
    overlay.style.display = "block";

    // 🔥 hide menu icon
    document.querySelector(".menu-icon").classList.add("hide");

    document.body.style.overflow = "hidden";
}

function closeMenu() {
    let menu = document.getElementById("sideMenu");
    let overlay = document.getElementById("overlay");

    menu.classList.remove("open");
    overlay.style.display = "none";

    // 🔥 show menu icon back
    document.querySelector(".menu-icon").classList.remove("hide");

    document.body.style.overflow = "auto";
}

// ===== SEARCH =====
function openSearch() {
    let bar = document.getElementById("searchBar");
    let closeBtn = document.getElementById("closeSearch");

    bar.style.display = "block";
    closeBtn.style.display = "block";

    // 🔥 hide menu icon
    document.querySelector(".menu-icon").classList.add("hide");
}

function closeSearch() {
    let bar = document.getElementById("searchBar");
    let closeBtn = document.getElementById("closeSearch");
    let input = document.getElementById("searchInput");

    bar.style.display = "none";
    closeBtn.style.display = "none";
    input.value = "";

    // 🔥 show menu icon back
    document.querySelector(".menu-icon").classList.remove("hide");
}
