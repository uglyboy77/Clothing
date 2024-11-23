// configuration for Darkmode
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('toggle');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeIcon.textContent = '🌞'; 
  } else {
    themeIcon.textContent = '🌙';
  }
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}
document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  const themeIcon = document.getElementById('theme-icon');

  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = '🌞'; 
  } else {
    themeIcon.textContent = '🌙'; 
  }
});

// configuration for menu
function toggleMenu() {
  const dropmenu = document.querySelector('.searchbox');
  dropmenu.classList.toggle('show');
}
function toggleDown() {
 const down = document.getElementById('drop');
 down.classList.toggle('show');
}

// configuration for next/button images
let currentSlide = 0;
function moveSlide(direction) {
  const slides = document.querySelectorAll('.slideshow-container img');
  const totalSlides = slides.length;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1; 
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0; 
  }
  const slideWidth = slides[0].clientWidth; 
  const container = document.querySelector('.slideshow-container');
  container.style.transform = `translateX(-${currentSlide * slideWidth}px)`; 
}

// configuration for loading screen
setTimeout(() => {
  const loading = document.getElementById('loading');
  const main = document.getElementById('main');
  if (loading && main) {
    loading.style.zIndex = '0';
    loading.style.display = 'none';
    main.style.zIndex = '1000';
  }
},1000);
                
setTimeout(() => {
  const loading = document.getElementById('ack');
  const main = document.getElementById('main');
  if (loading && main) {
    loading.style.zIndex = '0';
    loading.style.display = 'none'; 
    main.style.zIndex = '1000';
  }
}, 1000);

