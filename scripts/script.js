const tabItems = document.querySelectorAll('.tab-item');
const tabSections = document.querySelectorAll('.tab-section');

// Manejo de pestañas para HOME, SERVICIOS, PRODUCTOS y OPTA WIFI
tabItems.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    const target = tab.dataset.tab;

    // Activar pestaña
    tabItems.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Mostrar sólo la sección correspondiente
    tabSections.forEach(section => {
      section.classList.toggle('active', section.id === target);
    });
  });
});

// Zoom de imagen (simulación)
document.querySelector('.zoom-icon')?.addEventListener('click', () => {
  const img = document.getElementById('mainImage');
  if (img) {
    img.classList.toggle('zoomed');
  }
});

// Cambio de imagen principal al hacer clic en thumbnails
document.querySelectorAll('.thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
      mainImage.src = thumb.src;
    }

    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('selected'));
    thumb.classList.add('selected');
  });
});

// Contador de cantidades
const qtyValue = document.querySelector('.qty-value');
const btns = document.querySelectorAll('.qty-btn');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    let currentQty = parseInt(qtyValue.textContent);
    if (btn.textContent === '+' && currentQty < 99) {
      qtyValue.textContent = currentQty + 1;
    } else if (btn.textContent === '-' && currentQty > 1) {
      qtyValue.textContent = currentQty - 1;
    }
  });
});





document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
    if (!isActive) item.classList.add('active');
  });
});



let lastScrollTop = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 50) {
    // Scroll hacia abajo → ocultar header
    header.classList.add('header-hidden');
  } else {
    // Scroll hacia arriba → mostrar header
    header.classList.remove('header-hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
});



console.log('JS activo. Pestañas, zoom, imagen dinámica y contador funcionales.');