const Banner = {
  currentSlide: 0,
  totalSlides: 0,
  autoplayInterval: null,
  autoplayDelay: 6000,
  isTransitioning: false,
  observer: null,
  init() {
    this.slides = document.querySelectorAll('.banner-slide');
    this.dots = document.querySelectorAll('.banner-dot');
    this.prevBtn = document.querySelector('.banner-arrow.prev');
    this.nextBtn = document.querySelector('.banner-arrow.next');
    this.container = document.querySelector('.banner');
    if (!this.slides.length) return;
    this.totalSlides = this.slides.length;
    this.bindEvents();
    this.startAutoplay();
    this.initTyping();
    this.preloadImages();
  },
  bindEvents() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goTo(index));
    });
    if (this.container) {
      this.container.addEventListener('mouseenter', () => this.stopAutoplay());
      this.container.addEventListener('mouseleave', () => this.startAutoplay());
      this.container.addEventListener('touchstart', () => this.stopAutoplay(), { passive: true });
      this.container.addEventListener('touchend', () => this.startAutoplay(), { passive: true });
    }
  },
  goTo(index) {
    if (this.isTransitioning || index === this.currentSlide) return;
    this.isTransitioning = true;
    this.slides[this.currentSlide].classList.remove('active');
    this.dots[this.currentSlide].classList.remove('active');
    this.currentSlide = (index + this.totalSlides) % this.totalSlides;
    this.slides[this.currentSlide].classList.add('active');
    this.dots[this.currentSlide].classList.add('active');
    setTimeout(() => {
      this.isTransitioning = false;
    }, 800);
  },
  next() {
    this.goTo(this.currentSlide + 1);
  },
  prev() {
    this.goTo(this.currentSlide - 1);
  },
  startAutoplay() {
    this.stopAutoplay();
    this.autoplayInterval = setInterval(() => this.next(), this.autoplayDelay);
  },
  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  },
  initTyping() {
    const subtitle = document.querySelector('.banner-subtitle .typing-text');
    if (!subtitle) return;
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let index = 0;
    const type = () => {
      if (index < text.length) {
        subtitle.textContent += text.charAt(index);
        index++;
        setTimeout(type, 80);
      }
    };
    setTimeout(type, 1200);
  },
  preloadImages() {
    const banners = SITE_DATA.banners;
    banners.forEach(banner => {
      const img = new Image();
      img.src = banner.image;
    });
  },
  destroy() {
    this.stopAutoplay();
    this.slides = null;
    this.dots = null;
    this.prevBtn = null;
    this.nextBtn = null;
    this.container = null;
  }
};

window.Banner = Banner;
