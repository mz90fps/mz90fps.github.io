// 🔥 SHOW SECTION (all sections handle cheyyum)
function showSection(id) {
    let sections = document.querySelectorAll('[id^="section"], #main');

    sections.forEach(sec => {
        sec.style.display = 'none';
    });

    let active = document.getElementById(id);
    if (active) {
        active.style.display = 'block';
    }

    // 🔥 scroll always top
    window.scrollTo({
        top: 0,
        behavior: "instant" // smooth venel "smooth"
    });
}


// 🔗 OPEN EXTERNAL LINKS
function openLink(url) {
    window.open(url, '_blank');
}


// 🔍 SEARCH OPEN
function openSearch() {
    let bar = document.getElementById("searchBar");
    if (bar) bar.style.display = "block";
}


// ❌ SEARCH CLOSE
function closeSearch() {
    let bar = document.getElementById("searchBar");
    if (bar) bar.style.display = "none";
}


// 🔎 FILTER BUTTONS (search working)
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


// ⌨️ ENTER KEY + LIVE SEARCH
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
