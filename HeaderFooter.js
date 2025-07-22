document.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      const header = document.getElementById("header");
      if (header) {
        header.innerHTML = data;
        initDarkModeToggle(); // Run dark mode logic immediately after header loads
      }
    })
    .catch(err => console.error("Error loading header:", err));

  // Load footer
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      const footer = document.getElementById("footer");
      if (footer) footer.innerHTML = data;
    })
    .catch(err => console.error("Error loading footer:", err));
});

// ✅ Move your dark mode logic here
function initDarkModeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.querySelector('.theme-text');

  if (!themeToggle || !themeIcon || !themeText) {
    console.warn("Dark mode toggle elements not found.");
    return;
  }

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateButton(theme);
  };

  const updateButton = (theme) => {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeText.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  };

  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}
