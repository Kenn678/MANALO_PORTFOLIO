const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("theme");
const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const initialTheme = savedTheme === "light" || savedTheme === "dark"
  ? savedTheme
  : systemPrefersLight ? "light" : "dark";

document.documentElement.dataset.theme = initialTheme;

function updateThemeToggle(theme) {
  const isDark = theme === "dark";
  themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
  themeToggle.setAttribute("aria-pressed", String(isDark));
}

updateThemeToggle(initialTheme);

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
  updateThemeToggle(nextTheme);
});