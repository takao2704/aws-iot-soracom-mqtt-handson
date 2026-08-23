(() => {
  const menuButton = document.querySelector('.menu-button');
  const sidebar = document.querySelector('.sidebar');
  const tocLinks = [...document.querySelectorAll('.toc a[href^="#"]')];

  const closeMenu = () => {
    if (!menuButton || !sidebar) return;
    menuButton.setAttribute('aria-expanded', 'false');
    sidebar.dataset.open = 'false';
  };

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    sidebar.dataset.open = String(!open);
  });

  tocLinks.forEach((link) => link.addEventListener('click', closeMenu));

  document.querySelectorAll('pre').forEach((pre) => {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.type = 'button';
    button.textContent = 'コピー';
    button.setAttribute('aria-label', 'コードをクリップボードへコピー');
    button.addEventListener('click', async () => {
      const code = pre.querySelector('code')?.textContent ?? pre.textContent ?? '';
      await navigator.clipboard.writeText(code.replace(/コピー$/, '').trimEnd());
      button.textContent = '完了';
      window.setTimeout(() => { button.textContent = 'コピー'; }, 1400);
    });
    pre.append(button);
  });

  const sections = tocLinks
    .map((link) => ({ link, target: document.querySelector(link.getAttribute('href')) }))
    .filter(({ target }) => target);

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
    if (!visible) return;
    tocLinks.forEach((link) => link.removeAttribute('aria-current'));
    sections.find(({ target }) => target === visible.target)?.link.setAttribute('aria-current', 'location');
  }, { rootMargin: '-18% 0px -68% 0px', threshold: 0 });

  sections.forEach(({ target }) => observer.observe(target));
})();

