// ===================================
// ESTADO DE LA APLICACIÓN
// ===================================
const state = {
  isPlaying: false,
  isScrolled: false,
  isMobileMenuOpen: false,
  activeCategory: 'todos',
  showSuccess: false
};

// ===================================
// DATOS DEL MENÚ
// ===================================
const menuItems = [
  {
    category: 'sushi',
    title: 'Sushi Deluxe',
    price: '$28.90',
    description: 'Selección premium de 12 piezas de nigiri y 8 rolls especiales con atún, salmón y anguila',
    image: 'https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzYyMzkwMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Popular'
  },
  {
    category: 'sushi',
    title: 'Rainbow Roll',
    price: '$16.50',
    description: 'Roll de cangrejo cubierto con salmón, atún, aguacate y tobiko',
    image: 'https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzYyMzkwMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    category: 'sushi',
    title: 'Sashimi Premium',
    price: '$32.00',
    description: '18 piezas de pescado fresco seleccionado por nuestro chef',
    image: 'https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzYyMzkwMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: "Chef's Choice"
  },
  {
    category: 'ramen',
    title: 'Tonkotsu Ramen',
    price: '$15.90',
    description: 'Caldo cremoso de hueso de cerdo, chashu, huevo marinado, bambú y cebollín',
    image: 'https://images.unsplash.com/photo-1697652974652-a2336106043b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYW1lbiUyMGJvd2x8ZW58MXx8fHwxNzYyMzM3NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Popular'
  },
  {
    category: 'ramen',
    title: 'Spicy Miso Ramen',
    price: '$14.50',
    description: 'Caldo picante de miso, cerdo especiado, maíz, alga nori y aceite de chile',
    image: 'https://images.unsplash.com/photo-1697652974652-a2336106043b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYW1lbiUyMGJvd2x8ZW58MXx8fHwxNzYyMzM3NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    category: 'ramen',
    title: 'Shoyu Ramen',
    price: '$13.90',
    description: 'Caldo tradicional de soya, pollo, huevo, bambú y cebolla verde',
    image: 'https://images.unsplash.com/photo-1697652974652-a2336106043b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYW1lbiUyMGJvd2x8ZW58MXx8fHwxNzYyMzM3NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    category: 'tempura',
    title: 'Tempura Mix',
    price: '$18.90',
    description: 'Camarones, vegetales frescos y pescado en tempura crujiente con salsa tentsuyu',
    image: 'https://images.unsplash.com/photo-1651328236028-77b585d3f4e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wdXJhJTIwZGlzaHxlbnwxfHx8fDE3NjI0Mjg2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    category: 'tempura',
    title: 'Ebi Tempura',
    price: '$16.50',
    description: '8 piezas de camarones jumbo en tempura perfectamente dorada',
    image: 'https://images.unsplash.com/photo-1651328236028-77b585d3f4e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wdXJhJTIwZGlzaHxlbnwxfHx8fDE3NjI0Mjg2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Popular'
  },
  {
    category: 'bebidas',
    title: 'Sake Premium',
    price: '$12.00',
    description: 'Selección de sake japonés premium servido frío o caliente',
    image: 'https://images.unsplash.com/photo-1545239907-ea7bb166efa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWtlJTIwamFwYW5lc2V8ZW58MXx8fHwxNzYyNDI4NjcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Premium'
  },
  {
    category: 'bebidas',
    title: 'Matcha Latte',
    price: '$6.50',
    description: 'Té verde matcha ceremonial con leche vaporizada',
    image: 'https://images.unsplash.com/photo-1545239907-ea7bb166efa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWtlJTIwamFwYW5lc2V8ZW58MXx8fHwxNzYyNDI4NjcyfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    category: 'bebidas',
    title: 'Ramune',
    price: '$4.50',
    description: 'Refresco japonés carbonatado en varios sabores',
    image: 'https://images.unsplash.com/photo-1545239907-ea7bb166efa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWtlJTIwamFwYW5lc2V8ZW58MXx8fHwxNzYyNDI4NjcyfDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

// ===================================
// ELEMENTOS DEL DOM
// ===================================
const elements = {
  navbar: document.getElementById('navbar'),
  musicToggle: document.getElementById('musicToggle'),
  mobileMenuToggle: document.getElementById('mobileMenuToggle'),
  navMenu: document.getElementById('navMenu'),
  bgMusic: document.getElementById('bgMusic'),
  menuGrid: document.getElementById('menuGrid'),
  reservaForm: document.getElementById('reservaForm'),
  successMessage: document.getElementById('successMessage'),
  nuevaReservaBtn: document.getElementById('nuevaReserva'),
  fechaInput: document.getElementById('fechaInput')
};

// ===================================
// INICIALIZACIÓN
// ===================================
function init() {
  setupEventListeners();
  renderMenu();
  setMinDate();
}

// ===================================
// EVENT LISTENERS
// ===================================
function setupEventListeners() {
  // Scroll handling
  window.addEventListener('scroll', handleScroll);

  // Music toggle
  elements.musicToggle.addEventListener('click', toggleMusic);

  // Mobile menu toggle
  elements.mobileMenuToggle.addEventListener('click', toggleMobileMenu);

  // Navigation links
  document.querySelectorAll('[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
      const section = e.currentTarget.getAttribute('data-section');
      scrollToSection(section);
    });
  });

  // Menu category buttons
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.getAttribute('data-category');
      setActiveCategory(category);
    });
  });

  // Reserva form
  elements.reservaForm.addEventListener('submit', handleReservaSubmit);

  // Nueva reserva button
  elements.nuevaReservaBtn.addEventListener('click', resetForm);
}

// ===================================
// SCROLL HANDLING
// ===================================
function handleScroll() {
  const scrolled = window.scrollY > 100;
  
  if (scrolled !== state.isScrolled) {
    state.isScrolled = scrolled;
    
    if (scrolled) {
      elements.navbar.classList.add('scrolled');
    } else {
      elements.navbar.classList.remove('scrolled');
    }
  }
}

// ===================================
// SCROLL TO SECTION
// ===================================
function scrollToSection(id) {
  const element = document.getElementById(id);
  
  if (element) {
    const navbarHeight = 85;
    const targetPosition = element.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
  
  // Close mobile menu if open
  if (state.isMobileMenuOpen) {
    toggleMobileMenu();
  }
}

// ===================================
// MUSIC TOGGLE
// ===================================
function toggleMusic() {
  state.isPlaying = !state.isPlaying;
  
  const playIcon = elements.musicToggle.querySelector('.play-icon');
  const pauseIcon = elements.musicToggle.querySelector('.pause-icon');
  const label = elements.musicToggle.querySelector('.music-label');
  
  if (state.isPlaying) {
    elements.bgMusic.play().catch(error => {
      console.log('Error playing audio:', error);
    });
    
    elements.musicToggle.classList.add('playing');
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
    label.textContent = 'Pause';
  } else {
    elements.bgMusic.pause();
    
    elements.musicToggle.classList.remove('playing');
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
    label.textContent = 'Music';
  }
}

// ===================================
// MOBILE MENU TOGGLE
// ===================================
function toggleMobileMenu() {
  state.isMobileMenuOpen = !state.isMobileMenuOpen;
  
  if (state.isMobileMenuOpen) {
    elements.navMenu.classList.add('open');
    elements.mobileMenuToggle.classList.add('open');
  } else {
    elements.navMenu.classList.remove('open');
    elements.mobileMenuToggle.classList.remove('open');
  }
}

// ===================================
// MENU RENDERING
// ===================================
function setActiveCategory(category) {
  state.activeCategory = category;
  
  // Update active button
  document.querySelectorAll('.category-btn').forEach(btn => {
    if (btn.getAttribute('data-category') === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Render filtered menu
  renderMenu();
}

function renderMenu() {
  const filteredItems = state.activeCategory === 'todos' 
    ? menuItems 
    : menuItems.filter(item => item.category === state.activeCategory);
  
  elements.menuGrid.innerHTML = '';
  
  filteredItems.forEach(item => {
    const menuItemEl = createMenuItem(item);
    elements.menuGrid.appendChild(menuItemEl);
  });
}

function createMenuItem(item) {
  const div = document.createElement('div');
  div.className = 'menu-item';
  
  div.innerHTML = `
    <div class="menu-item-image-wrapper">
      <img src="${item.image}" alt="${item.title}" class="menu-item-image">
      ${item.badge ? `<div class="menu-item-badge">${item.badge}</div>` : ''}
    </div>
    <div class="menu-item-content">
      <div class="menu-item-header">
        <h3 class="menu-item-title">${item.title}</h3>
        <span class="menu-item-price neon-text-cyan">${item.price}</span>
      </div>
      <p class="menu-item-description">${item.description}</p>
    </div>
  `;
  
  return div;
}

// ===================================
// RESERVA FORM HANDLING
// ===================================
function setMinDate() {
  const today = new Date().toISOString().split('T')[0];
  elements.fechaInput.setAttribute('min', today);
}

function handleReservaSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  console.log('Reserva:', data);
  
  // Show success message
  state.showSuccess = true;
  elements.reservaForm.classList.add('hidden');
  elements.successMessage.classList.remove('hidden');
}

function resetForm() {
  state.showSuccess = false;
  elements.reservaForm.classList.remove('hidden');
  elements.successMessage.classList.add('hidden');
  elements.reservaForm.reset();
}

// ===================================
// START APPLICATION
// ===================================
document.addEventListener('DOMContentLoaded', init);
