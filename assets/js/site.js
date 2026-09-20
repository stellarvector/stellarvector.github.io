(function () {
    "use strict";

    /* Calendar Agenda rewrite for mobile viewports */
    var calendar = document.getElementById("calendar");
    if (calendar && window.innerWidth < 768) {
        var base = calendar.getAttribute("data-embed-url");
        if (base && base.indexOf("mode=") === -1) {
            calendar.src = base + "&mode=AGENDA";
        }
    }

    /* 404 Requested Path Helper */
    var requested = document.querySelector("[data-requested-path]");
    if (requested) requested.textContent = window.location.pathname;

    /* Typewriter Effect (Kicker Tagline) */
    var typed = document.querySelector("[data-typed]");
    if (typed && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        var full = typed.textContent.trim();
        var index = 0;
        typed.textContent = "";
        var step = function () {
            typed.textContent = full.slice(0, ++index);
            if (index < full.length) window.setTimeout(step, 20);
        };
        window.setTimeout(step, 150);
    }

    /* Console Banner */
    try {
        console.log(
            "%c  ___ _       _ _            __   __        _\n" +
            " / __| |_ ___| | |__ _ _ _   \\ \\ / /__ __ __| |_ ___ _ _\n" +
            " \\__ \\  _/ -_) | / _` | '_|   \\ V / -_) _|  _| _ \\ '_|\n" +
            " |___/\\__\\___|_|_\\__,_|_|      \\_/\\___\\__|\\__\\___/_|\n",
            "color:#e21010;font-family:monospace"
        );
        console.log(
            "%cwe play CTFs monthly and we take all skill levels.\n" +
            "there is a flag hidden on /launchpad. good luck :)",
            "color:#3ddc84;font-family:monospace"
        );
    } catch (e) {}
})();
