// 🔥 SHOW SECTION (handles all sections)
function showSection(id) {

    // ✅ SAVE SCROLL POSITION
    sessionStorage.setItem("scrollPos", window.scrollY);

    let sections = document.querySelectorAll('[id^="section"], #main');

    sections.forEach(sec => {
        sec.style.display = 'none';
    });

    let active = document.getElementById(id);
    if (active) {
        active.style.display = 'block';
    }
}


// 🔙 BACK FUNCTION (NO JUMP ULTRA FIX)
function goBack() {

    let scrollPos = sessionStorage.getItem("scrollPos");

    let sections = document.querySelectorAll('[id^="section"]');

    sections.forEach(sec => {
        sec.style.display = 'none';
    });

    let main = document.getElementById("main");
    if (main) {
        main.style.display = 'block';
    }

    if (scrollPos !== null) {
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo(0, parseInt(scrollPos));
        setTimeout(() => {
            document.documentElement.style.scrollBehavior = "smooth";
        }, 0);
    }
}


// 🔗 OPEN LINK (new tab)
function openLink(url) {
    window.open(url, "_blank");
}


// 🔍 SEARCH OPEN
function openSearch() {
    let bar = document.getElementById("searchBar");
    let closeBtn = document.getElementById("closeSearch");
    let input = document.getElementById("searchInput");

    if (bar) bar.style.display = "block";
    if (closeBtn) closeBtn.style.display = "block";
    if (input) input.focus();
}


// ❌ SEARCH CLOSE
function closeSearch() {
    let bar = document.getElementById("searchBar");
    let closeBtn = document.getElementById("closeSearch");
    let input = document.getElementById("searchInput");

    if (bar) bar.style.display = "none";
    if (closeBtn) closeBtn.style.display = "none";
    if (input) input.value = "";

    filterButtons("");
}


// 🔎 FILTER BUTTONS
function filterButtons(value) {
    let buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {
        let text = btn.innerText.toLowerCase();

        if (text.includes(value)) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    });
}


// ⌨️ LIVE SEARCH
document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById("searchInput");

    if (input) {
        input.addEventListener("input", function () {
            filterButtons(this.value.toLowerCase());
        });

        input.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                filterButtons(this.value.toLowerCase());
            }
        });
    }
});


// 📤 SHARE FUNCTION
function shareLink(event, link) {
    event.stopPropagation();

    if (navigator.share) {
        navigator.share({
            title: "Check this out",
            url: link
        });
    } else {
        navigator.clipboard.writeText(link);

        let popup = document.getElementById("popup");
        if (popup) {
            popup.style.display = "block";

            setTimeout(() => {
                popup.style.display = "none";
            }, 2000);
        }
    }
}


/* =========================
   🔥 NEW MENU FUNCTIONS
========================= */

// OPEN MENU
function openMenu() {
    document.getElementById("sideMenu").classList.add("open");
    document.getElementById("overlay").style.display = "block";
}

// CLOSE MENU
function closeMenu() {
    document.getElementById("sideMenu").classList.remove("open");
    document.getElementById("overlay").style.display = "none";
}

// TOGGLE DROPDOWN
function toggleDropdown(id) {
    let el = document.getElementById(id);

    if (el.style.display === "block") {
        el.style.display = "none";
    } else {
        el.style.display = "block";
    }
}
