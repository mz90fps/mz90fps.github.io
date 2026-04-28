// 🔥 SHOW SECTION (scalable version)
function showSection(id) {
    // ella sections hide cheyyum
    let sections = document.querySelectorAll('[id^="section"], #main');

    sections.forEach(sec => {
        sec.style.display = 'none';
    });

    // selected section show
    let active = document.getElementById(id);
    if (active) {
        active.style.display = 'block';
    }

    // 🔥 scroll always top
    window.scrollTo({
        top: 0,
        behavior: "instant" // "smooth" venel change cheyyam
    });
}

// 🔗 OPEN EXTERNAL LINK
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

// ⌨️ ENTER KEY SEARCH (optional)
document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById("searchInput");

    if (input) {
        input.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                alert("Search feature coming soon 🚀");
            }
        });
    }
});