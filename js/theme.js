const Theme = {
  STORAGE_KEY: 'sakura-theme',
  init() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      this.setTheme(saved);
    } else {
      this.autoDetect();
    }
    this.bindEvents();
  },
  autoDetect() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme(prefersDark ? 'dark' : 'light');
  },
  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.updateIcon(theme);
  },
  toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  },
  updateIcon(theme) {
    const btn = document.querySelector('[data-action="toggle-theme"]');
    if (btn) {
      const icon = btn.querySelector('.theme-icon');
      if (icon) {
        icon.innerHTML = theme === 'dark' ? this.getSunIcon() : this.getMoonIcon();
      }
    }
  },
  getSunIcon() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>`;
  },
  getMoonIcon() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>`;
  },
  bindEvents() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action="toggle-theme"]');
      if (btn) {
        this.toggle();
      }
    });
  }
};

window.Theme = Theme;
