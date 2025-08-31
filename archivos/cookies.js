// cookies.js
(() => {
    const KEY = "cookie_consent";
    const banner = document.getElementById("cookies-banner");
    const btnAccept = document.getElementById("cookies-accept");
    if (!banner || !btnAccept) return;

    const hasConsent = localStorage.getItem(KEY) === "accepted";

    if (!hasConsent) {
        banner.hidden = false;                       
        banner.setAttribute("aria-hidden", "false");
        requestAnimationFrame(() => banner.classList.add("show")); 
    } else {
        banner.hidden = true;
        banner.setAttribute("aria-hidden", "true");
    }

    btnAccept.addEventListener("click", () => {
        localStorage.setItem(KEY, "accepted");
        banner.classList.remove("show");
        banner.setAttribute("aria-hidden", "true");
        banner.addEventListener("transitionend", () => (banner.hidden = true), { once: true });
        });
    })
();
