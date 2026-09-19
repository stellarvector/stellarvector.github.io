(function () {
    "use strict";

    var toggle = document.getElementById("menu-toggle");
    var panel = document.getElementById("menu-panel");

    if (toggle && panel) {
        var setOpen = function (open) {
            toggle.setAttribute("aria-expanded", String(open));
            panel.classList.toggle("hidden", !open);
            toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        };

        setOpen(false);

        toggle.addEventListener("click", function () {
            setOpen(toggle.getAttribute("aria-expanded") !== "true");
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
                setOpen(false);
                toggle.focus();
            }
        });

        document.addEventListener("click", function (event) {
            if (toggle.getAttribute("aria-expanded") !== "true") return;
            if (!event.target.closest("#menu-panel") && !event.target.closest("#menu-toggle")) {
                setOpen(false);
            }
        });

        var wide = window.matchMedia("(min-width: 768px)");
        var onWide = function (event) {
            if (event.matches) setOpen(false);
        };
        if (wide.addEventListener) wide.addEventListener("change", onWide);
        else if (wide.addListener) wide.addListener(onWide);
    }

    var themeButtons = document.querySelectorAll("[data-theme-toggle]");
    var themeMeta = document.querySelector('meta[name="theme-color"]');

    var syncLabels = function () {
        var light = document.documentElement.classList.contains("light");

        Array.prototype.forEach.call(themeButtons, function (button) {
            button.setAttribute("aria-pressed", String(light));
            button.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");

            var label = button.querySelector("[data-theme-label]");
            if (label) label.textContent = light ? "theme: light" : "theme: dark";
        });

        if (themeMeta) themeMeta.setAttribute("content", light ? "#fff9f9" : "#0a0505");
    };

    syncLabels();

    Array.prototype.forEach.call(themeButtons, function (button) {
        button.addEventListener("click", function () {
            var light = document.documentElement.classList.toggle("light");
            try {
                localStorage.setItem("sv-theme", light ? "light" : "dark");
            } catch (e) {}
            syncLabels();
        });
    });

    var calendar = document.getElementById("calendar");

    if (calendar && window.innerWidth < 768) {
        var base = calendar.getAttribute("data-embed-url");
        if (base && base.indexOf("mode=") === -1) {
            calendar.src = base + "&mode=AGENDA";
        }
    }

    var requested = document.querySelector("[data-requested-path]");
    if (requested) requested.textContent = window.location.pathname;

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
