// ============================
// SECTION SYSTEM (IMPORTANT)
// ============================

function showSection(id) {
    // save scroll position
    sessionStorage.setItem("scrollPos", window.scrollY);

    // hide main
    document.getElementById("main").style.display = "none";

    // hide all sections
    let sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.style.display = "none");

    // show selected
    document.getElementById(id).style.display = "block";

    // scroll top (section view)
    window.scrollTo(0, 0);
}

function goBack() {
    document.getElementById("main").style.display = "block";

    let sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.style.display = "none");

    // restore scroll position
    let pos = sessionStorage.getItem("scrollPos");
    if (pos) {
        window.scrollTo(0, pos);
    }
}

// ============================
// MENU SYSTEM
// ============================

function openMenu() {
    document.getElementById("sideMenu").style.left = "0";
    document.getElementById("overlay").style.display = "block";
    document.querySelector(".menu-icon").style.display = "none";
}

function closeMenu() {
    document.getElementById("sideMenu").style.left = "-100%";
    document.getElementById("overlay").style.display = "none";
    document.querySelector(".menu-icon").style.display = "block";
}

// ============================
// DROPDOWN MENU
// ============================

function toggleDropdown(id) {
    let el = document.getElementById(id);

    if (el.style.display === "block") {
        el.style.display = "none";
    } else {
        el.style.display = "block";
    }
}

// ============================
// SEARCH SYSTEM
// ============================

function openSearch() {
    document.getElementById("searchBar").style.display = "block";
    document.getElementById("searchIcon").style.display = "none";

    // hide menu icon while searching
    document.querySelector(".menu-icon").style.display = "none";
}

function closeSearch() {
    document.getElementById("searchBar").style.display = "none";
    document.getElementById("searchIcon").style.display = "block";

    // show menu icon back
    document.querySelector(".menu-icon").style.display = "block";
}

// ============================
// SHARE FUNCTION
// ============================

function shareLink(event, url) {
    event.stopPropagation();

    if (navigator.share) {
        navigator.share({
            title: "Check this product",
            url: url
        });
    } else {
        navigator.clipboard.writeText(url);
        alert("Link copied!");
    }
}
