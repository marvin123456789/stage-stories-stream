// This is the safest way of storing a password from what I've heard. Please no hacks.
const LIVE_PASSWORD = "18.11.2025";

const tabs = document.querySelectorAll(".tab");
const vodsPanel = document.getElementById("vods-panel");
const livePanel = document.getElementById("live-panel");
const liveTab = document.getElementById("live-tab");

const livePasswordScreen = document.getElementById("live-password-screen");
const liveContent = document.getElementById("live-content");
const liveForm = document.getElementById("live-login-form");
const liveInput = document.getElementById("live-password");
const liveError = document.getElementById("live-error");

let liveUnlocked = false;

function setActiveTab(name) {
    // Toggle active tab button
    tabs.forEach(tab => {
        const isActive = tab.dataset.tab === name;
        tab.classList.toggle("active", isActive);
    });

    // Toggle tab panels
    vodsPanel.classList.toggle("active", name === "vods");
    livePanel.classList.toggle("active", name === "live");
}

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = tab.dataset.tab;

        if (target === "live") {
            // Always switch to the Live panel when clicking the Live tab
            setActiveTab("live");

            // If not unlocked, show password screen; else show player
            if (!liveUnlocked) {
                livePasswordScreen.classList.add("active");
                liveContent.classList.remove("active");
            } else {
                livePasswordScreen.classList.remove("active");
                liveContent.classList.add("active");
            }
        } else {
            setActiveTab("vods");
        }
    });
});

// Handle live password form
liveForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (liveInput.value === LIVE_PASSWORD) {
        liveUnlocked = true;
        livePasswordScreen.classList.remove("active");
        liveContent.classList.add("active");
        liveError.style.display = "none";
        liveInput.value = "";

        // Visually unlock the Live tab
        liveTab.classList.remove("locked");
        liveTab.removeAttribute("aria-disabled");
    } else {
        liveError.style.display = "block";
    }
});