const Posts = {
  allPosts: [],
  filteredPosts: [],
  currentPage: 1,
  perPage: 9,
  viewMode: 'grid',
  filterCategory: null,
  filterTag: null,
  searchQuery: '',
  init() {
    this.allPosts = [...SITE_DATA.posts];
    this.filteredPosts = [...this.allPosts];
    this.loadState();
    this.render();
    this.bindEvents();
    this.initInlineSearch();
  },
  initInlineSearch() {
    const input = document.getElementById('inline-search-input');
    const clearBtn = document.getElementById('inline-search-clear');
    if (!input || !clearBtn) return;
    input.addEventListener('input', () => {
      const query = input.value.trim();
      this.searchQuery = query;
      clearBtn.style.display = query.length > 0 ? 'flex' : 'none';
      this.filterBySearch(query);
    });
    clearBtn.addEventListener('click', () => {
      input.value = '';
      this.searchQuery = '';
      clearBtn.style.display = 'none';
      this.filterBySearch('');
    });
  },
  loadState() {
    const saved = localStorage.getItem('sakura-view-mode');
    if (saved) this.viewMode = saved;
  },
  saveState() {
    localStorage.setItem('sakura-view-mode', this.viewMode);
  },
  bindEvents() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="toggle-layout"]')) {
        this.toggleView();
      }
      if (e.target.closest('.pagination-btn:not(:disabled)')) {
        this.handlePaginationClick(e);
      }
      if (e.target.closest('.post-card, .post-title, .post-cover, .post-arrow-btn')) {
        this.handlePostClick(e);
      }
      if (e.target.closest('.post-tag')) {
        e.stopPropagation();
        this.handlePostTagClick(e);
      }
    });
  },
  render() {
    const grid = document.querySelector('.posts-grid');
    const header = document.querySelector('.content-header');
    if (!grid) return;
    this.updateHeader(header);
    const start = (this.currentPage - 1) * this.perPage;
    const end = start + this.perPage;
    const pagePosts = this.filteredPosts.slice(start, end);
    if (pagePosts.length === 0) {
      grid.innerHTML = this.renderEmpty();
    } else {
      grid.innerHTML = pagePosts.map(post => this.renderCard(post)).join('');
    }
    this.renderPagination();
    this.updateLayoutIcon();
    grid.classList.toggle('list-view', this.viewMode === 'list');
    this.initScrollAnimations();
  },
  updateHeader(header) {
    if (!header) return;
    const titleEl = header.querySelector('.content-title span');
    const filterContainer = header.querySelector('.filter-info');
    const total = this.filteredPosts.length;
    const totalText = this.filterCategory || this.filterTag ? ` (${total})` : ` (${total})`;
    if (titleEl) {
      titleEl.textContent = totalText;
    }
    if (filterContainer) {
      let filters = '';
      if (this.filterCategory) {
        const cat = SITE_DATA.categories.find(c => c.id === this.filterCategory);
        filters += `<span class="filter-tag">${cat?.name || '未知'}<button data-action="clear-category" aria-label="清除分类筛选">&times;</button></span>`;
      }
      if (this.filterTag) {
        const tag = SITE_DATA.tags.find(t => t.id === this.filterTag);
        filters += `<span class="filter-tag">${tag?.name || '未知'}<button data-action="clear-tag" aria-label="清除标签筛选">&times;</button></span>`;
      }
      filterContainer.innerHTML = filters;
    }
  },
  renderCard(post) {
    const category = SITE_DATA.categories.find(c => c.id === post.category);
    const tags = post.tags.map(id => SITE_DATA.tags.find(t => t.id === id)).filter(Boolean);
    const isGrid = this.viewMode === 'grid';
    return `
      <article class="post-card" data-post-id="${post.id}">
        <div class="post-cover">
          <img src="${post.cover}" alt="${post.title}" loading="lazy">
          <div class="post-cover-overlay"></div>
          <span class="post-category-badge">${category?.name || '未分类'}</span>
        </div>
        <div class="post-content">
          <div class="post-meta">
            <span class="post-meta-item">
              <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></span>
              ${this.formatDate(post.date)}
            </span>
          </div>
          <h2 class="post-title">${post.title}</h2>
          <p class="post-excerpt">${post.excerpt}</p>
          <div class="post-tags">
            ${tags.slice(0, 3).map(tag => `<span class="post-tag" data-tag-id="${tag.id}">${tag.name}</span>`).join('')}
          </div>
          <div class="post-footer">
            <div class="post-actions">
              <button class="post-action-btn" data-action="read-post" data-post-id="${post.id}">
                <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></span>
                阅读
              </button>
              ${!isGrid ? `
                <button class="post-arrow-btn" data-action="read-post" data-post-id="${post.id}">
                  <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      </article>
    `;
  },
  renderEmpty() {
    if (this.allPosts.length === 0) {
      return `
        <div class="posts-empty">
          <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>
          <h3>暂无文章</h3>
          <p>稍后再来看看吧。</p>
        </div>
      `;
    }
    return `
      <div class="no-results">
        <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
        <h3>没有找到匹配的文章</h3>
        <p>试试调整筛选条件或搜索词。</p>
      </div>
    `;
  },
  renderPagination() {
    const container = document.querySelector('.pagination');
    if (!container) return;
    const totalPages = Math.ceil(this.filteredPosts.length / this.perPage);
    if (totalPages <= 1) {
      container.innerHTML = '';
      return;
    }
    let html = '';
    html += `<button class="pagination-btn nav-btn" data-action="prev-page" ${this.currentPage === 1 ? 'disabled' : ''}>
      <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg></span>
    </button>`;
    const maxVisible = 5;
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);
    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }
    if (startPage > 1) {
      html += `<button class="pagination-btn" data-page="1">1</button>`;
      if (startPage > 2) html += `<span class="pagination-ellipsis">...</span>`;
    }
    for (let i = startPage; i <= endPage; i++) {
      html += `<button class="pagination-btn ${i === this.currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) html += `<span class="pagination-ellipsis">...</span>`;
      html += `<button class="pagination-btn" data-page="${totalPages}">${totalPages}</button>`;
    }
    html += `<button class="pagination-btn nav-btn" data-action="next-page" ${this.currentPage === totalPages ? 'disabled' : ''}>
      <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></span>
    </button>`;
    container.innerHTML = html;
  },
  handlePaginationClick(e) {
    const btn = e.target.closest('.pagination-btn');
    if (!btn || btn.disabled) return;
    if (btn.dataset.action === 'prev-page') {
      this.goToPage(this.currentPage - 1);
    } else if (btn.dataset.action === 'next-page') {
      this.goToPage(this.currentPage + 1);
    } else if (btn.dataset.page) {
      this.goToPage(parseInt(btn.dataset.page));
    }
  },
  goToPage(page) {
    this.currentPage = page;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  toggleView() {
    this.viewMode = this.viewMode === 'grid' ? 'list' : 'grid';
    this.saveState();
    this.render();
  },
  updateLayoutIcon() {
    const btn = document.querySelector('[data-action="toggle-layout"]');
    if (btn) {
      const icon = btn.querySelector('.icon');
      if (icon) {
        icon.innerHTML = this.viewMode === 'grid' ? this.getListIcon() : this.getGridIcon();
      }
    }
  },
  getGridIcon() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>`;
  },
  getListIcon() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/>
      <line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/>
      <line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
    </svg>`;
  },
  handlePostClick(e) {
    const card = e.target.closest('.post-card');
    if (!card) return;
    const postId = parseInt(card.dataset.postId);
    Modal.open('post', postId);
  },
  handlePostTagClick(e) {
    const tag = e.target.closest('.post-tag');
    if (!tag) return;
    const tagId = parseInt(tag.dataset.tagId);
    document.querySelectorAll('.tag-item').forEach(t => {
      t.classList.toggle('active', parseInt(t.dataset.tagId) === tagId);
    });
    document.querySelectorAll('.category-item').forEach(c => c.classList.remove('active'));
    this.filterByTag(tagId);
  },
  filterByCategory(categoryId) {
    this.filterCategory = categoryId;
    this.filterTag = null;
    this.filteredPosts = this.allPosts.filter(p => p.category === categoryId);
    this.currentPage = 1;
    this.render();
  },
  filterByTag(tagId) {
    this.filterTag = tagId;
    this.filterCategory = null;
    this.filteredPosts = this.allPosts.filter(p => p.tags.includes(tagId));
    this.currentPage = 1;
    this.render();
  },
  filterBySearch(query) {
    const q = query.toLowerCase();
    if (!q) {
      this.filteredPosts = [...this.allPosts];
    } else {
      this.filteredPosts = this.allPosts.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some(tagId => {
          const tag = SITE_DATA.tags.find(t => t.id === tagId);
          return tag?.name.toLowerCase().includes(q);
        })
      );
    }
    this.currentPage = 1;
    this.render();
  },
  clearFilter() {
    this.filterCategory = null;
    this.filterTag = null;
    this.filteredPosts = [...this.allPosts];
    document.querySelectorAll('.category-item').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tag-item').forEach(t => t.classList.remove('active'));
    this.currentPage = 1;
    this.render();
  },
  formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },
  formatNumber(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  },
  initScrollAnimations() {
    if ('IntersectionObserver' in window) {
      const cards = document.querySelectorAll('.post-card:not(.animated)');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animated', 'fade-in-up');
            }, index * 80);
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });
      cards.forEach(card => observer.observe(card));
    }
  }
};

window.Posts = Posts;
