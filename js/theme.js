(function () {
  var KEY = "theme";
  var root = document.documentElement;

  function getStored() {
    return localStorage.getItem(KEY);
  }
  function setStored(value) {
    if (value) localStorage.setItem(KEY, value);
    else localStorage.removeItem(KEY);
  }
  function isDark() {
    var t = root.getAttribute("data-theme");
    if (t) return t === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function apply(theme) {
    if (theme === "dark" || theme === "light") {
      root.setAttribute("data-theme", theme);
      setStored(theme);
    } else {
      root.removeAttribute("data-theme");
      setStored(null);
    }
    updateButton();
  }
  function updateButton() {
    var btn = document.querySelector(".theme-toggle");
    var icon = document.querySelector(".theme-toggle-icon");
    if (!btn || !icon) return;
    var dark = isDark();
    icon.textContent = dark ? "\u263C" : "\u263E"; // sun / moon
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }
  function toggle() {
    apply(isDark() ? "light" : "dark");
  }

  (function init() {
    var stored = getStored();
    if (stored === "dark" || stored === "light")
      root.setAttribute("data-theme", stored);
  })();

  document.addEventListener("DOMContentLoaded", function () {
    updateButton();
    var btn = document.querySelector(".theme-toggle");
    if (btn) btn.addEventListener("click", toggle);
  });
})();
