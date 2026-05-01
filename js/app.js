const App = {
  currentPage: 'home',
  init() {
    this.initBanner();
    Theme.init();
    Navbar.init();
    Sidebar.init();
    Posts.init();
    Search.init();
    Modal.init();
    Scroll.init();
    this.bindGlobalEvents();
    this.initPageNavigation();
    this.renderArchives();
    this.handleHashChange();
  },
  initPageNavigation() {
    window.addEventListener('hashchange', () => this.handleHashChange());
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          window.location.hash = href;
          setTimeout(() => this.handleHashChange(), 50);
        }
      });
    });
  },
  handleHashChange() {
    const hash = window.location.hash || '#';
    const sections = ['archives', 'about', 'friends'];
    let targetSection = null;
    
    sections.forEach(section => {
      const el = document.getElementById(section);
      if (el) {
        if (hash === `#${section}`) {
          targetSection = section;
          el.style.display = 'block';
        } else {
          el.style.display = 'none';
        }
      }
    });
    
    const contentWrapper = document.querySelector('.content-wrapper');
    if (contentWrapper) {
      contentWrapper.style.display = (!targetSection || targetSection === 'home') ? 'block' : 'none';
    }
    
    const banner = document.querySelector('.banner');
    if (banner) {
      banner.style.display = (!targetSection || targetSection === 'home') ? 'block' : 'none';
    }
    
    if (targetSection && targetSection !== 'home') {
      Scroll.scrollToTop();
    }
    
    this.updateNavActiveState(hash);
    this.currentPage = targetSection || 'home';
  },
  updateNavActiveState(hash) {
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === hash || (hash === '' && href === '#')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  },
  renderArchives() {
    const archiveList = document.querySelector('.archive-list');
    if (!archiveList) return;
    
    const posts = SITE_DATA.posts;
    const grouped = {};
    
    posts.forEach(post => {
      const year = post.date.split('-')[0];
      if (!grouped[year]) grouped[year] = [];
      grouped[year].push(post);
    });
    
    const years = Object.keys(grouped).sort((a, b) => b - a);
    
    archiveList.innerHTML = years.map(year => `
      <div class="archive-year">
        <h3 class="archive-year-title">${year}</h3>
        <div class="archive-items">
          ${grouped[year].map(post => {
            const category = SITE_DATA.categories.find(c => c.id === post.category);
            return `
              <div class="archive-item" data-post-id="${post.id}">
                <span class="archive-date">${post.date}</span>
                <span class="archive-title">${post.title}</span>
                <span class="archive-category">${category?.name || '未分类'}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `).join('');
    
    archiveList.addEventListener('click', (e) => {
      const item = e.target.closest('.archive-item');
      if (item) {
        const postId = parseInt(item.dataset.postId);
        Modal.open('post', postId);
      }
    });
  },
  initBanner() {
    const bannerSlides = document.querySelector('.banner-slides');
    const bannerDots = document.querySelector('.banner-dots');
    if (!bannerSlides || !bannerDots) return;
    const banners = SITE_DATA.banners;
    bannerSlides.innerHTML = banners.map((banner, index) => `
      <div class="banner-slide ${index === 0 ? 'active' : ''}">
        <div class="slide-bg" style="background-image: url('${banner.image}')" loading="${index === 0 ? 'eager' : 'lazy'}"></div>
        <div class="slide-overlay"></div>
        <div class="banner-content">
          ${index === 0 ? `<div class="banner-avatar"><img src="${SITE_DATA.site.avatar}" alt="${SITE_DATA.site.author}" loading="eager"></div>` : ''}
          <h1 class="banner-title">${banner.title}</h1>
          <p class="banner-subtitle">
            <span class="typing-text">${banner.subtitle}</span>
            <span class="cursor"></span>
          </p>
          <div class="banner-tags">
            ${banner.tags.map(tag => `<span class="banner-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
    bannerDots.innerHTML = banners.map((_, index) => `
      <button class="banner-dot ${index === 0 ? 'active' : ''}" aria-label="跳转到第${index + 1}张"></button>
    `).join('');
    Banner.init();
  },
  bindGlobalEvents() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        Sidebar.close();
      }
    });
    document.addEventListener('click', (e) => {
      if (e.target.closest('.navbar-brand')) {
        e.preventDefault();
        Posts.clearFilter();
        Scroll.scrollToTop();
      }
      if (e.target.closest('.footer-copyright a')) {
        e.preventDefault();
        Scroll.scrollToTop();
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        Sidebar.close();
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
