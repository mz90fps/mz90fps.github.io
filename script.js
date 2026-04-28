// 🔥 SHOW SECTION (handles all sections)
function showSection(id) {
    let sections = document.querySelectorAll('[id^="section"], #main');

    sections.forEach(sec => {
        sec.style.display = 'none';
    });

    let active = document.getElementById(id);
    if (active) {
        active.style.display = 'block';
    }

    // 🔥 always start from top
    window.scrollTo({
        top: 0,
        behavior: "auto" // smooth venel "smooth"
    });
}


// 🔗 OPEN LINK (safe method)
function openLink(url) {
    window.location.href = url;
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

    let input = document.getElementById("searchInput");
    if (input) input.value = "";

    filterButtons(""); // reset list
}


// 🔎 FILTER BUTTONS (live search)
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


// ⌨️ LIVE SEARCH + ENTER SUPPORT
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


// 📤 SHARE FUNCTION (optional – safe)
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
