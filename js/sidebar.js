const Sidebar = {
  sidebar: null,
  overlay: null,
  announcementHidden: false,
  init() {
    this.sidebar = document.querySelector('.sidebar');
    this.overlay = document.querySelector('.sidebar-overlay');
    this.toggleBtn = document.querySelector('.sidebar-toggle');
    this.renderProfile();
    this.renderCategories();
    this.renderTags();
    this.bindEvents();
    this.loadAnnouncementState();
  },
  bindEvents() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.sidebar-toggle')) {
        this.toggle();
      }
      if (e.target.closest('.sidebar-overlay')) {
        this.close();
      }
      if (e.target.closest('.announcement-close')) {
        this.closeAnnouncement();
      }
      if (e.target.closest('.category-item')) {
        this.handleCategoryClick(e);
      }
      if (e.target.closest('.tag-item')) {
        this.handleTagClick(e);
      }
      if (e.target.closest('.social-link')) {
        this.handleSocialClick(e);
      }
      if (e.target.closest('.profile-avatar')) {
        this.handleProfileClick();
      }
    });
  },
  renderProfile() {
    const data = SITE_DATA.site;
    const avatar = this.sidebar?.querySelector('.profile-avatar img');
    const name = this.sidebar?.querySelector('.profile-name');
    const bio = this.sidebar?.querySelector('.profile-bio');
    if (avatar) avatar.src = data.avatar;
    if (name) name.textContent = data.author;
    if (bio) bio.textContent = data.description;
    const stats = this.sidebar?.querySelectorAll('.profile-stat-value');
    if (stats) {
      stats[0].textContent = SITE_DATA.posts.length;
      stats[1].textContent = SITE_DATA.categories.length;
      stats[2].textContent = SITE_DATA.tags.length;
    }
  },
  renderCategories() {
    const container = this.sidebar?.querySelector('.category-list');
    if (!container) return;
    const icons = {
      all: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
      code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>`,
      palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="8" r="2"/><circle cx="8" cy="14" r="2"/><circle cx="16" cy="14" r="2"/></svg>`,
      heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
      book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
      file: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13,2 13,9 20,9"/></svg>`
    };
    container.innerHTML = `
      <div class="category-item active" data-category-id="all">
        <div class="category-item-left">
          <div class="category-icon">${icons.all}</div>
          <span class="category-name">所有</span>
        </div>
      </div>
    ` + SITE_DATA.categories.map(cat => `
      <div class="category-item" data-category-id="${cat.id}">
        <div class="category-item-left">
          <div class="category-icon">${icons[cat.icon] || icons.file}</div>
          <span class="category-name">${cat.name}</span>
        </div>
      </div>
    `).join('');
  },
  renderTags() {
    const container = this.sidebar?.querySelector('.tag-cloud');
    if (!container) return;
    container.innerHTML = SITE_DATA.tags.map(tag => `
      <span class="tag-item" data-tag-id="${tag.id}">
        ${tag.name}
      </span>
    `).join('');
  },
  toggle() {
    this.sidebar?.classList.toggle('open');
    this.overlay?.classList.toggle('active');
  },
  close() {
    this.sidebar?.classList.remove('open');
    this.overlay?.classList.remove('active');
  },
  handleCategoryClick(e) {
    const item = e.target.closest('.category-item');
    const categoryId = item.dataset.categoryId;
    document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
    document.querySelectorAll('.tag-item').forEach(t => t.classList.remove('active'));
    item.classList.add('active');
    if (categoryId === 'all') {
      Posts.clearFilter();
    } else {
      Posts.filterByCategory(parseInt(categoryId));
    }
    this.close();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  handleTagClick(e) {
    const tag = e.target.closest('.tag-item');
    const tagId = parseInt(tag.dataset.tagId);
    document.querySelectorAll('.tag-item').forEach(t => t.classList.remove('active'));
    if (tag.classList.contains('active')) {
      tag.classList.remove('active');
      Posts.clearFilter();
    } else {
      tag.classList.add('active');
      document.querySelectorAll('.category-item').forEach(c => c.classList.remove('active'));
      Posts.filterByTag(tagId);
    }
    this.close();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  handleSocialClick(e) {
    e.preventDefault();
    const link = e.target.closest('.social-link');
    const href = link.getAttribute('href');
    if (href && href !== '#') {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  },
  handleProfileClick() {
    Modal.open('about');
  },
  closeAnnouncement() {
    const announcement = this.sidebar?.querySelector('.announcement');
    if (announcement) {
      announcement.style.display = 'none';
      this.announcementHidden = true;
      localStorage.setItem('sakura-announcement-hidden', 'true');
    }
  },
  loadAnnouncementState() {
    const hidden = localStorage.getItem('sakura-announcement-hidden');
    if (hidden === 'true') {
      const announcement = this.sidebar?.querySelector('.announcement');
      if (announcement) announcement.style.display = 'none';
    }
  }
};

window.Sidebar = Sidebar;
