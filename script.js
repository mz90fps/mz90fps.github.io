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
        behavior: "auto"
    });
}


// 🔗 OPEN LINK (new tab better UX)
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


// 📤 SHARE FUNCTION (optional)
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
