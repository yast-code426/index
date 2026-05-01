const Search = {
  modal: null,
  input: null,
  results: null,
  isOpen: false,
  init() {
    this.modal = document.querySelector('.search-modal');
    this.input = document.querySelector('.search-input');
    this.results = document.querySelector('.search-results');
    this.clearBtn = document.querySelector('.search-clear');
    this.bindEvents();
  },
  bindEvents() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="open-search"]')) {
        this.open();
      }
      if (e.target.closest('.search-close') || e.target.closest('.search-modal-close') || (e.target.closest('.search-modal') && !e.target.closest('.search-container'))) {
        this.close();
      }
      if (e.target.closest('.search-clear')) {
        this.clear();
      }
      if (e.target.closest('.search-result-item')) {
        this.handleResultClick(e);
      }
    });
    if (this.input) {
      this.input.addEventListener('input', () => this.handleInput());
      this.input.addEventListener('keydown', (e) => this.handleKeydown(e));
    }
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.toggle();
      }
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  },
  open() {
    if (!this.modal) return;
    this.isOpen = true;
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      this.input?.focus();
    }, 100);
  },
  close() {
    if (!this.modal) return;
    this.isOpen = false;
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
    if (this.input) this.input.value = '';
    this.renderResults([]);
  },
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  },
  clear() {
    if (this.input) this.input.value = '';
    this.renderResults([]);
    this.input?.focus();
  },
  handleInput() {
    const query = this.input?.value.trim() || '';
    if (query.length === 0) {
      this.renderResults([]);
      return;
    }
    const results = this.search(query);
    this.renderResults(results);
  },
  search(query) {
    const q = query.toLowerCase();
    return SITE_DATA.posts.filter(post => 
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.tags.some(tagId => {
        const tag = SITE_DATA.tags.find(t => t.id === tagId);
        return tag?.name.toLowerCase().includes(q);
      })
    );
  },
  renderResults(results) {
    if (!this.results) return;
    if (results.length === 0) {
      const query = this.input?.value.trim() || '';
      if (query.length === 0) {
        this.results.innerHTML = `
          <div class="search-empty">
            <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
            <h4>搜索文章</h4>
            <p>输入关键词来查找文章</p>
          </div>
        `;
      } else {
        this.results.innerHTML = `
          <div class="search-empty">
            <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></span>
            <h4>没有找到结果</h4>
            <p>试试其他关键词</p>
          </div>
        `;
      }
      this.updateStats(0, query);
      return;
    }
    this.results.innerHTML = results.map(post => {
      const category = SITE_DATA.categories.find(c => c.id === post.category);
      return `
        <div class="search-result-item" data-post-id="${post.id}">
          <div class="search-result-cover">
            <img src="${post.cover}" alt="${post.title}" loading="lazy">
          </div>
          <div class="search-result-content">
            <h4 class="search-result-title">${this.highlight(post.title, query)}</h4>
            <p class="search-result-excerpt">${this.highlight(post.excerpt, query)}</p>
            <div class="search-result-meta">
              <span>${category?.name || '未分类'}</span>
              <span>${Posts.formatDate(post.date)}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
    this.updateStats(results.length, query);
  },
  highlight(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${this.escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  },
  escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  },
  updateStats(count, query) {
    const statsEl = document.querySelector('.search-stats');
    if (statsEl) {
      if (count > 0) {
        statsEl.innerHTML = `<span>${count} 个结果</span>`;
      } else {
        statsEl.innerHTML = '';
      }
    }
  },
  handleResultClick(e) {
    const item = e.target.closest('.search-result-item');
    if (!item) return;
    const postId = parseInt(item.dataset.postId);
    this.close();
    Modal.open('post', postId);
  },
  handleKeydown(e) {
    if (e.key === 'Enter') {
      const firstResult = this.results?.querySelector('.search-result-item');
      if (firstResult) {
        firstResult.click();
      }
    }
  }
};

window.Search = Search;
