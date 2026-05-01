const Navbar = {
  navbar: null,
  lastScroll: 0,
  init() {
    this.navbar = document.querySelector('.navbar');
    if (!this.navbar) return;
    this.bindEvents();
    this.handleScroll();
  },
  bindEvents() {
    window.addEventListener('scroll', () => this.handleScroll());
    document.addEventListener('click', (e) => {
      if (e.target.closest('.navbar-toggle')) {
        this.toggleMobileMenu();
      }
    });
  },
  handleScroll() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      this.navbar.classList.add('scrolled');
    } else {
      this.navbar.classList.remove('scrolled');
    }
    this.lastScroll = currentScroll;
  },
  toggleMobileMenu() {
    const nav = document.querySelector('.navbar-nav');
    const overlay = document.querySelector('.sidebar-overlay');
    nav.classList.toggle('open');
    if (overlay) overlay.classList.toggle('active');
  },
  closeMobileMenu() {
    const nav = document.querySelector('.navbar-nav');
    const overlay = document.querySelector('.sidebar-overlay');
    if (nav) nav.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
  }
};

window.Navbar = Navbar;
