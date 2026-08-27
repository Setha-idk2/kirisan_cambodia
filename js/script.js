// Dynamic Navbar Component
function renderNavbar() {
  const header = document.getElementById('navbar-component');
  if (!header) return;

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  header.innerHTML = `
    <nav class="navbar">
      <a href="index.html" class="logo">
        <span title="Kirisan Cambodia logo. click to return to home page">
        <img src="assets/icon/icon.webp" alt="Kirisan Cambodia Logo" class="logo-icon"></span>
      </a>
      <ul class="nav-links" id="navlinks">
        <li><a href="index.html" class="${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}"><span title="Return to home page">Home</span></a></li>
        <li><a href="products.html" class="${currentPath === 'products.html' ? 'active' : ''}"><span title="Search, filter and view all products">Products</span></a></li>
        <li><a href="about.html" class="${currentPath === 'about.html' ? 'active' : ''}"><span title="About Kirisan Group">About</span></a></li>
        <li><a href="contact.html" class="${currentPath === 'contact.html' ? 'active' : ''}"><span title="Get in touch with us">Contact</span></a></li>
      </ul>
      <button class="mobile-toggle" id="menuToggle" aria-label="Toggle Navigation">☰</button>
    </nav>
  `;

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navlinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}

// Dynamic Footer Component (emojis replaced with gray SVG icons)
function renderFooter() {
  const footer = document.getElementById('footer-component');
  if (!footer) return;

  // Gray SVG icons (stroke and fill set to #6b7280)
  const locationIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
  const phoneIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
  const emailIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;

  // Facebook SVG icon (fills the social-icon container)
  const facebookIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 320 512" fill="currentColor">  <path d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"/></svg>`;

  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-grid">
        
        <!-- Column 1: Company Info -->
        <div class="footer-col company-col">
          <h3 class="footer-brand">KIRISAN CAMBODIA CO., LTD</h3>
          <p class="footer-contact-item" title="Our physical address">
            <span class="footer-icon">${locationIcon}</span>
              <a href="https://maps.app.goo.gl/HJdfwn6rRKmZjb8F6" target="_blank" rel="noopener noreferrer" title="Click to view Kirisan Group office location on Google Maps">
              Rise Commercial Building, 2nd Floor Room 2B2, St. 282 Sangkat Beoung Keng Kong 1 Khan Beoung Kengkong, Phnom Penh
              </a>
          </p>
          <p class="footer-contact-item" title="Phone number">
            <span class="footer-icon">${phoneIcon}</span>
            <a href="tel:+85599666417">+855 99 666 417</a>
          </p>
          <p class="footer-contact-item" title="Email address">
            <span class="footer-icon">${emailIcon}</span>
            <a href="mailto:kirisangroup@gmail.com">kirisangroup@gmail.com</a>
          </p>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="footer-col">
          <h4>QUICK LINKS</h4>
          <ul class="footer-links-list">
            <li><a href="index.html" title="Return to home page">Home</a></li>
            <li><a href="products.html" title="View all products">Products</a></li>
            <li><a href="about.html" title="Learn more about us">About Us</a></li>
            <li><a href="contact.html" title="Get in touch with us">Contact</a></li>
          </ul>
        </div>

        <!-- Column 3: Social Media -->
        <div class="footer-col">
          <h4>CONNECT WITH US</h4>
          <ul class="footer-social-list">
            <li>
              <a href="https://www.facebook.com/share/199TVjo92W/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" title="Visit Facebook page">
                <span class="social-icon">${facebookIcon}</span> Facebook
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 4: Interactive Map Image -->
        <div class="footer-col map-col">
          <a href="https://maps.app.goo.gl/HJdfwn6rRKmZjb8F6" target="_blank" rel="noopener noreferrer" class="map-link" title="Click to view Kirisan Group office location on Google Maps">
            <img src="assets/map/image.png" alt="Kirisan Cambodia Location Map" class="footer-map-img">
            <span class="map-overlay-btn">Open in Maps ↗</span>
          </a>
        </div>

      </div>

      <!-- Bottom Copyright -->
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} KIRISAN CAMBODIA CO., LTD. All rights reserved.</p>
      </div>
    </div>
  `;
}

// Lightbox modal opener
function openLightbox(product) {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');

  if (!modal || !modalImg) return;

  const imageName = product.image ? product.image.trim() : 'placeholder.png';
  const initialSrc = encodeURI(`assets/images/${imageName}`);

  modalImg.src = initialSrc;
  if (modalCaption) modalCaption.textContent = product.Name;

  modal.classList.add('active');
}

// Lightbox HTML injector
function setupModal() {
  if (!document.getElementById('image-modal')) {
    const modalHTML = `
      <div id="image-modal" class="modal">
        <span class="modal-close" id="modal-close">&times;</span>
        <div class="modal-container">
          <img class="modal-content" id="modal-img" alt="Enlarged product image">
          <div id="modal-caption" class="modal-caption"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  const modal = document.getElementById('image-modal');
  const modalClose = document.getElementById('modal-close');

  const closeModal = () => modal.classList.remove('active');

  if (modalClose) modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-container')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function createProductCard(product) {
  const imageName = product.image ? product.image.trim() : 'placeholder.png';
  const initialSrc = encodeURI(`assets/images/${imageName}`);

  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <div class="product-image">
      <img 
        src="${initialSrc}" 
        alt="${product.Name}" 
        loading="lazy" 
        decoding="async" 
        width="220" 
        height="200"
        onerror="
          if (!this.dataset.triedJpg) {
            this.dataset.triedJpg = true;
            this.src = '${initialSrc.replace(/\.(png|webp)$/i, '.jpg')}';
          } else if (!this.dataset.triedPng) {
            this.dataset.triedPng = true;
            this.src = '${initialSrc.replace(/\.(jpg|jpeg|webp)$/i, '.png')}';
          } else {
            this.onerror = null;
            this.src = 'assets/images/placeholder.png';
          }
        "
      >
    </div>
    <div class="product-info">
      <div class="meta-tags">
        <span class="badge size-badge">${product.size}</span>
        <span class="badge flavour-badge">${product.flavour}</span>
      </div>
      <h3>${product.Name}</h3>
      <p class="product-detail">${product.description}</p>
    </div>
  `;

  card.addEventListener('click', () => {
    openLightbox(product);
  });

  return card;
}

function populateFlavourOptions(products) {
  const flavourSelect = document.getElementById('flavour-filter');
  if (!flavourSelect) return;

  const flavours = [...new Set(products.map(p => p.flavour).filter(Boolean))];
  flavours.sort();

  flavourSelect.innerHTML = '<option value="all">All Flavours</option>';
  flavours.forEach(flavour => {
    const option = document.createElement('option');
    option.value = flavour.toLowerCase();
    option.textContent = flavour;
    flavourSelect.appendChild(option);
  });
}

function filterAndRenderProducts() {
  const allProductsContainer = document.getElementById('all-products');
  const noResultsElement = document.getElementById('no-results');
  if (!allProductsContainer) return;

  const searchInput = document.getElementById('search-input');
  const subcategorySelect = document.getElementById('subcategory-filter');
  const flavourSelect = document.getElementById('flavour-filter');

  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const selectedSubcat = subcategorySelect ? subcategorySelect.value.toLowerCase() : 'all';
  const selectedFlavour = flavourSelect ? flavourSelect.value.toLowerCase() : 'all';

  const filtered = allProductsList.filter(product => {
    const nameMatch = product.Name ? product.Name.toLowerCase().includes(query) : false;
    const subcatMatch = product.subcategory ? product.subcategory.toLowerCase().includes(query) : false;
    const flavourMatch = product.flavour ? product.flavour.toLowerCase().includes(query) : false;
    const sizeMatch = product.size ? product.size.toLowerCase().includes(query) : false;

    const matchesQuery = !query || nameMatch || subcatMatch || flavourMatch || sizeMatch;
    const matchesSubcategory = selectedSubcat === 'all' || 
      (product.subcategory && product.subcategory.toLowerCase() === selectedSubcat);
    const matchesFlavour = selectedFlavour === 'all' || 
      (product.flavour && product.flavour.toLowerCase() === selectedFlavour);

    return matchesQuery && matchesSubcategory && matchesFlavour;
  });

  allProductsContainer.innerHTML = '';

  if (filtered.length === 0) {
    if (noResultsElement) noResultsElement.style.display = 'block';
  } else {
    if (noResultsElement) noResultsElement.style.display = 'none';
    filtered.forEach(product => {
      allProductsContainer.appendChild(createProductCard(product));
    });
  }
}

function setupFilterListeners() {
  const searchInput = document.getElementById('search-input');
  const subcategorySelect = document.getElementById('subcategory-filter');
  const flavourSelect = document.getElementById('flavour-filter');

  if (searchInput) searchInput.addEventListener('input', filterAndRenderProducts);
  if (subcategorySelect) subcategorySelect.addEventListener('change', filterAndRenderProducts);
  if (flavourSelect) flavourSelect.addEventListener('change', filterAndRenderProducts);
}

let allProductsList = [];

async function loadProductsFromJSONL() {
  const featuredContainer = document.getElementById('featured-products');
  const allProductsContainer = document.getElementById('all-products');

  if (!featuredContainer && !allProductsContainer) return;

  try {
    const response = await fetch('data/products.jsonl');
    const text = await response.text();

    allProductsList = text
      .trim()
      .split('\n')
      .filter(line => line.trim() !== '')
      .map(line => JSON.parse(line));

    if (featuredContainer) {
      featuredContainer.innerHTML = '';
      allProductsList.slice(0, 6).forEach(product => {
        featuredContainer.appendChild(createProductCard(product));
      });
    }

    if (allProductsContainer) {
      populateFlavourOptions(allProductsList);
      setupFilterListeners();
      filterAndRenderProducts();
    }

  } catch (error) {
    console.error('Failed to load products:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  setupModal();
  loadProductsFromJSONL();
});