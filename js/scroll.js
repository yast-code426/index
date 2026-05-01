const Scroll = {
  progressBar: null,
  scrollBtn: null,
  init() {
    this.progressBar = document.querySelector('.scroll-progress');
    this.scrollBtn = document.querySelector('.scroll-to-top');
    this.bindEvents();
  },
  bindEvents() {
    window.addEventListener('scroll', () => this.handleScroll());
    document.addEventListener('click', (e) => {
      if (e.target.closest('.scroll-to-top')) {
        this.scrollToTop();
      }
    });
  },
  handleScroll() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    if (this.progressBar) {
      this.progressBar.style.width = progress + '%';
    }
    if (this.scrollBtn) {
      if (scrollTop > 400) {
        this.scrollBtn.classList.add('show');
      } else {
        this.scrollBtn.classList.remove('show');
      }
    }
  },
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
};

window.Scroll = Scroll;
