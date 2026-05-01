const Modal = {
  overlay: null,
  currentModal: null,
  currentPostId: null,
  init() {
    this.overlay = document.querySelector('.modal-overlay');
    this.bindEvents();
  },
  bindEvents() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.modal-close')) {
        this.close();
      }
      if (e.target.closest('.modal-overlay.active:not(.search-modal)')) {
        this.close();
      }
      if (e.target.closest('.post-detail-toc-item')) {
        this.handleTocClick(e);
      }
      if (e.target.closest('[data-action="close-modal"]')) {
        this.close();
      }
      if (e.target.closest('.filter-tag button')) {
        this.handleClearFilter(e);
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.currentModal) {
        this.close();
      }
    });
  },
  open(type, id = null) {
    if (type === 'post') {
      this.openPostModal(id);
    } else if (type === 'about') {
      this.openAboutModal();
    } else if (type === 'rss') {
      this.openInfoModal('RSS订阅', 'RSS允许用户使用RSS阅读器订阅博客更新。复制订阅地址并添加到任何RSS阅读器应用中。');
    } else if (type === 'sitemap') {
      this.openInfoModal('网站地图', '网站地图是一个列出你网站上所有页面的XML文件。它帮助搜索引擎更高效地发现和索引你的内容。');
    }
  },
  openPostModal(postId) {
    const post = SITE_DATA.posts.find(p => p.id === postId);
    if (!post) return;
    this.currentPostId = postId;
    this.currentModal = 'post';
    const category = SITE_DATA.categories.find(c => c.id === post.category);
    const tags = post.tags.map(id => SITE_DATA.tags.find(t => t.id === id)).filter(Boolean);
    const toc = this.extractToc(post.content);
    const modalHtml = `
      <div class="modal post-detail-modal">
        <div class="modal-header">
          <span class="modal-title">文章</span>
          <button class="modal-close" aria-label="关闭"><span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span></button>
        </div>
        <div class="modal-body">
          <div class="post-detail-header">
            <img src="${post.cover}" alt="${post.title}">
            <div class="post-detail-header-overlay"></div>
            <div class="post-detail-header-content">
              <span class="post-detail-category">${category?.name || '未分类'}</span>
              <h1 class="post-detail-title">${post.title}</h1>
              <div class="post-detail-meta">
                <span class="post-detail-meta-item">
                  <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></span>
                  ${Posts.formatDate(post.date)}
                </span>
              </div>
            </div>
          </div>
          <div class="post-detail-body">
            <div class="post-detail-content">
              ${post.content}
            </div>
            ${toc.length > 0 ? `
              <aside class="post-detail-toc">
                <h4 class="post-detail-toc-title">目录</h4>
                <nav class="post-detail-toc-list">
                  ${toc.map(item => `<a class="post-detail-toc-item level-${item.level}" data-target="${item.id}">${item.text}</a>`).join('')}
                </nav>
              </aside>
            ` : ''}
          </div>
        </div>
      </div>
    `;
    this.showModal(modalHtml);
  },
  openAboutModal() {
    this.currentModal = 'about';
    const site = SITE_DATA.site;
    const modalHtml = `
      <div class="modal about-modal">
        <div class="modal-header">
          <span class="modal-title">关于我</span>
          <button class="modal-close" aria-label="关闭"><span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span></button>
        </div>
        <div class="modal-body about-body">
          <div class="about-avatar">
            <img src="${site.avatar}" alt="${site.author}">
          </div>
          <h2 class="about-name">${site.author}</h2>
          <p class="about-intro">${site.description}</p>
          
          <div class="about-section">
            <h3 class="about-section-title">
              <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg></span>
              技能展示
            </h3>
            <div class="skills-grid">
              <div class="skill-item">
                <span class="skill-name">前端开发</span>
                <div class="skill-bar"><div class="skill-progress" style="width: 85%"></div></div>
              </div>
              <div class="skill-item">
                <span class="skill-name">JavaScript</span>
                <div class="skill-bar"><div class="skill-progress" style="width: 90%"></div></div>
              </div>
              <div class="skill-item">
                <span class="skill-name">CSS/UI设计</span>
                <div class="skill-bar"><div class="skill-progress" style="width: 80%"></div></div>
              </div>
              <div class="skill-item">
                <span class="skill-name">React/Vue</span>
                <div class="skill-bar"><div class="skill-progress" style="width: 75%"></div></div>
              </div>
            </div>
          </div>
          
          <div class="about-section">
            <h3 class="about-section-title">
              <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></span>
              兴趣爱好
            </h3>
            <div class="hobbies-list">
              <span class="hobby-tag">动漫</span>
              <span class="hobby-tag">编程</span>
              <span class="hobby-tag">设计</span>
              <span class="hobby-tag">阅读</span>
              <span class="hobby-tag">音乐</span>
              <span class="hobby-tag">游戏</span>
            </div>
          </div>
          
          <div class="about-section">
            <h3 class="about-section-title">
              <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
              联系方式
            </h3>
            <div class="contact-list">
              <a href="${site.github}" target="_blank" rel="noopener" class="contact-item">
                <span class="icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></span>
                GitHub
              </a>
              <a href="${site.bilibili}" target="_blank" rel="noopener" class="contact-item">
                <span class="icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.659.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906z"/></svg></span>
                Bilibili
              </a>
              <a href="mailto:${site.email}" class="contact-item">
                <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
                邮箱
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    this.showModal(modalHtml);
  },
  openInfoModal(title, content) {
    this.currentModal = 'info';
    const modalHtml = `
      <div class="modal info-modal">
        <div class="modal-header">
          <span class="modal-title">${title}</span>
          <button class="modal-close" aria-label="关闭"><span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span></button>
        </div>
        <div class="modal-body">
          <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></span>
          <h3>${title}</h3>
          <p>${content}</p>
        </div>
      </div>
    `;
    this.showModal(modalHtml);
  },
  showModal(html) {
    if (this.overlay) {
      this.overlay.innerHTML = html;
      this.overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        const modal = this.overlay.querySelector('.modal');
        if (modal) modal.classList.add('active');
      });
    }
  },
  close() {
    if (this.overlay) {
      const modal = this.overlay.querySelector('.modal');
      if (modal) modal.classList.remove('active');
      setTimeout(() => {
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
        this.currentModal = null;
        this.currentPostId = null;
      }, 250);
    }
  },
  extractToc(html) {
    const toc = [];
    const regex = /<h([2-4]) id="([^"]+)">([^<]+)<\/h[2-4]>/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
      toc.push({
        level: parseInt(match[1]),
        id: match[2],
        text: match[3]
      });
    }
    return toc;
  },
  handleTocClick(e) {
    // 阻止默认行为和事件冒泡，防止退出阅读视图
    e.preventDefault();
    e.stopPropagation();
    const item = e.target.closest('.post-detail-toc-item');
    if (!item) return;
    const targetId = item.dataset.target;
    const modalContent = document.querySelector('.post-detail-content');
    if (modalContent) {
      const targetEl = modalContent.querySelector('#' + targetId);
      if (targetEl) {
        // 计算相对于modal-content的滚动位置
        const scrollTop = targetEl.offsetTop - 20;
        document.querySelector('.post-detail-body').scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        });
      }
    }
  },
  handleClearFilter(e) {
    Posts.clearFilter();
    this.close();
  }
};

window.Modal = Modal;
