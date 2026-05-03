// =====================
// 🔥 SECTION CONTROL
// =====================
function showSection(id) {
    let sections = document.querySelectorAll('[id^="section"], #main');

    sections.forEach(sec => {
        sec.style.display = 'none';
    });

    let active = document.getElementById(id);
    if (active) {
        active.style.display = 'block';
    }
}

// =====================
// 🔥 MENU
// =====================
function openMenu() {
    document.getElementById("sideMenu").classList.add("open");
    document.getElementById("overlay").style.display = "block";
    document.querySelector(".menu-icon").classList.add("hide");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("open");
    document.getElementById("overlay").style.display = "none";
    document.querySelector(".menu-icon").classList.remove("hide");
    document.body.style.overflow = "auto";
}

// =====================
// 🔥 DROPDOWN FIX (IMPORTANT)
// =====================
function toggleDropdown(id) {
    let el = document.getElementById(id);

    if (!el) return;

    if (el.style.display === "block") {
        el.style.display = "none";
    } else {
        el.style.display = "block";
    }
}

// =====================
// 🔍 SEARCH
// =====================
function openSearch() {
    document.getElementById("searchBar").style.display = "block";
    document.getElementById("closeSearch").style.display = "block";

    document.querySelector(".menu-icon").classList.add("hide");
}

function closeSearch() {
    document.getElementById("searchBar").style.display = "none";
    document.getElementById("closeSearch").style.display = "none";
    document.getElementById("searchInput").value = "";

    document.querySelector(".menu-icon").classList.remove("hide");
}
